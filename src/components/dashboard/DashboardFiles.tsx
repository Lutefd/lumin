import type { RouterOutputs } from "@/trpc/shared";
import { MessageSquare, Plus } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";
import DeletionButton from "./DeletionButton";

interface DashboardFilesProps {
  files: RouterOutputs["files"]["getUserFiles"];
}

export default function DashboardFiles({ files }: DashboardFilesProps) {
  return (
    <ul className="mt-8 grid grid-cols-1 gap-6 divide-y divide-zinc-200 md:grid-cols-2 lg:grid-cols-3">
      {files.map((file) => {
        return (
          <li
            key={file.id}
            className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow transition hover:shadow-lg"
          >
            <Link
              href={`/dashboard/${file.id}`}
              className="flex flex-col gap-2"
            >
              <div className="flex w-full items-center justify-between space-x-6 px-6 pt-6">
                <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-r from-violet-400 to-purple-500" />
                <div className="flex-1 truncate">
                  <div className="flex items-center space-x-3">
                    <h3 className="truncate text-lg font-medium text-zinc-900">
                      {file.name}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
            <div className="mt-4 grid grid-cols-3 place-items-center gap-6 px-6 py-2 text-xs text-zinc-500">
              <div className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                {format(new Date(file.createdAt), "dd MM yyyy")}
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                mocked
              </div>
              <DeletionButton id={file.id} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
