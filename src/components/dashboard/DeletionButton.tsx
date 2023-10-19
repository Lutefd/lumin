"use client";
import { useRouter } from "next/navigation";
import { Trash } from "lucide-react";
import { Button } from "../ui/button";
import { api } from "@/trpc/react";

interface DeletionButton {
  id: string;
}

export default function DeletionButton({ id }: DeletionButton) {
  const utils = api.useContext();
  const router = useRouter();
  const { mutate: deleteFiles } = api.files.deleteFile.useMutation({
    onSuccess: async () => {
      await utils.files.getUserFiles.invalidate();
      router.refresh();
    },
  });
  return (
    <Button
      variant={"destructive"}
      className="w-full"
      size={"sm"}
      onClick={() =>
        deleteFiles({
          id: id,
        })
      }
    >
      <Trash className="h-4 w-4" />
    </Button>
  );
}
