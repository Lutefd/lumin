import { Suspense } from "react";
import UploadButton from "./UploadButton";
import { api } from "@/trpc/server";
import { Ghost, LoaderIcon } from "lucide-react";
import DashboardFiles from "./DashboardFiles";

export default async function DashboardContent() {
  const files = await api.files.getUserFiles.query();
  console.log(files);
  return (
    <main className="mx-auto max-w-7xl md:p-10">
      <div className="mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0">
        <h1 className="mb-3 text-5xl font-bold text-gray-900">Meus Arquivos</h1>
        <UploadButton />
      </div>
      <Suspense
        fallback={
          <div className="mt-16 flex flex-col items-center gap-2">
            <LoaderIcon className="animate-spin" />
          </div>
        }
      >
        {files && files?.length !== 0 ? (
          <DashboardFiles files={files} />
        ) : (
          <div className="mt-16 flex flex-col items-center gap-2">
            <Ghost className="h-8 w-8 text-zinc-800" />
            <h3 className="text-xl font-semibold">Tá bem vazio por aqui...</h3>
            <p>Vamos fazer upload de um PDF</p>
          </div>
        )}
      </Suspense>
    </main>
  );
}
