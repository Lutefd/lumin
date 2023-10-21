"use client";
import { ChevronDown, ChevronUp, Loader2 } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { useToast } from "../ui/use-toast";
import { useResizeDetector } from "react-resize-detector";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface PDFRendererProps {
  url: string;
}
export default function PDFRenderer({ url }: PDFRendererProps) {
  const [numPages, setNumPages] = useState<number>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageValidator = z.object({
    page: z
      .string()
      .refine((num) => Number(num) > 0 && Number(num) <= numPages!),
  });
  type TPageValidator = z.infer<typeof pageValidator>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<TPageValidator>({
    defaultValues: {
      page: "1",
    },
    resolver: zodResolver(pageValidator),
  });
  const handlePageSubmit = ({ page }: TPageValidator) => {
    setCurrentPage(Number(page));
    setValue("page", String(page));
  };
  const { toast } = useToast();
  const { ref, width } = useResizeDetector();
  return (
    <div className="flex w-full flex-col items-center rounded-md bg-white">
      <div className="flex h-14 w-full items-center justify-between border-b border-zinc-200 px-2">
        <div className="flex items-center gap-1.5">
          <Button
            variant="ghost"
            aria-label="previous-page"
            onClick={() => {
              setCurrentPage((prev) => (prev - 1 > 1 ? prev - 1 : 1));
            }}
          >
            <ChevronDown className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-1.5">
            <Input
              {...register("page")}
              className={cn(
                "h-8 w-12",
                errors.page && "focus-visible:ring-red-500",
              )}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  void handleSubmit(handlePageSubmit)();
                }
              }}
            />
            <p className="space-x-1 text-sm text-zinc-700">
              <span>/</span>
              <span>{numPages ?? "x"}</span>
            </p>
          </div>
          <Button
            variant="ghost"
            aria-label="next-page"
            onClick={() => {
              setCurrentPage((prev) =>
                prev + 1 > numPages! ? numPages! : prev + 1,
              );
            }}
          >
            <ChevronUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="max-h-screen w-full flex-1">
        <div ref={ref}>
          <Document
            file={url}
            loading={
              <div className="flex items-center justify-center">
                <Loader2 className="my-24 h-6 w-6 animate-spin" />
              </div>
            }
            onLoadError={() => {
              toast({
                title: "Erro ao carregar o PDF",
                description: "Tente novamente em alguns instantes",
                variant: "destructive",
              });
            }}
            onLoadSuccess={({ numPages }) => {
              setNumPages(numPages);
            }}
            className="max-h-full"
          >
            <Page
              pageNumber={currentPage}
              width={width ? width : 1}
              loading={
                <div className="flex items-center justify-center">
                  <Loader2 className="my-24 h-6 w-6 animate-spin" />
                </div>
              }
            />
          </Document>
        </div>
      </div>
    </div>
  );
}
