import ChatWrapper from "@/components/file-view/ChatWrap";
import PDFRenderer from "@/components/file-view/PDFRenderer";
import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import { notFound, redirect } from "next/navigation";

interface PageProps {
  params: {
    fileID: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { fileID } = params;
  const session = await getServerAuthSession();

  if (!session) redirect("/");

  const file = await api.files.getSingleFile.query({ fileID });
  if (!file) notFound();
  return (
    <div className="flex h-[calc(100vh-3.5rem)] flex-1 flex-col justify-between ">
      <div className="max-w-8xl mx-auto w-full grow lg:flex xl:px-2">
        {/* leftside componentize later */}
        <div className="flex-1 xl:flex">
          <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
            <PDFRenderer url={file.url} />
          </div>
        </div>
        <div className="flex-[0.75] shrink-0 border-t border-gray-200 lg:w-96 lg:border-l lg:border-t-0">
          <ChatWrapper />
        </div>
      </div>
    </div>
  );
}
