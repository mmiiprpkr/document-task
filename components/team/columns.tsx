"use client"

import { File } from "@/types"
import { ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { LucidePencil, MoreHorizontal, Trash2 } from "lucide-react";
import { UseFileEditModal } from "@/hooks/useFileEdit";
import { useRouter as UseRouter } from "next/navigation";
import { ConfirmModal } from "../modals/confirm-modal";
import { useMutation as UseMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

export const columns: ColumnDef<File>[] = [
  {
    accessorKey: "fileName",
    header: "Filename",
    cell: ({ row }) => {
      const router = UseRouter();

      return <h2 className="font-bold cursor-pointer opacity-70 transition" onClick={() => router.push(`/dashboard/${row.original.teamId}/${row.original._id}`)}>{row.original.fileName}</h2>
    }
  },
  {
    accessorKey: "_creationTime",
    header: "CeartedAt",
    cell: ({ row }) => {
      return <div>{format(new Date(row.getValue("_creationTime")), "yyyy-MM-dd")}</div>
    }
  },
  {
    header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      const file: File | any = row.original;

      const { onOpen } = UseFileEditModal();
      const delefile = UseMutation(api.file.deleteFile);

      const handleDelete = () => {
        delefile({
          _id: row.original._id as Id<"files">
        })
      }

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-4 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onOpen(file)}>
                <LucidePencil className="h-4 w-4 mr-2" />
                  Edit
              </DropdownMenuItem>
              <ConfirmModal confirmFn={handleDelete} header="Are you absolutely sure?" discription="This action cannot be undone. This permanently delete your account
        and remove your data from our servers.">
                <Button className="w-full flex items-center justify-start pl-2" variant="ghost">
                  <Trash2 className="h-4 w-4 mr-2 items-start" />
                  Delete
                </Button>
              </ConfirmModal>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]
