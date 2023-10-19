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
    <div className="h-[calc(100vh - 3.5rem)] flex flex-1 flex-col justify-between">
      <div className="max-w-8xl mx-auto w-full grow lg:flex xl:px-2">
        {/* leftside componentize later */}
      </div>
    </div>
  );
}
