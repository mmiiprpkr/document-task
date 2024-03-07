"use client";
import { useState } from "react";

import { File } from "@/types";

import { Check, ChevronsUpDown, Pencil, PlusCircle, Trash2 } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useParams, useRouter } from "next/navigation";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { SidebarBottom } from "./sidebar-bottom";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import { UseFileEditModal } from "@/hooks/useFileEdit";
import { ConfirmModal } from "../modals/confirm-modal";
import Image from "next/image";
import { UseAddFileModal } from "@/hooks/useAddfileModal";

interface SwitchFileProps {
  files: File[] | undefined;
  user: KindeUser | any
}

export const SwitchFile = ({ files, user }: SwitchFileProps) => {
  const [open, setOpen] = useState(false)
  const params = useParams();
  const router = useRouter();
  const currentFile: File | null = useQuery(api.file.getFileById, { _id: params?.fileId as Id<"files"> })
  const { onOpen: onOpenEditModal } = UseFileEditModal();
  const { onOpen: onOpenFileModal } = UseAddFileModal();
  const deleteFile = useMutation(api.file.deleteFile);

  const handleDelete = () => {
    deleteFile({
      _id: currentFile?._id as Id<"files">
    })
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
            {currentFile?.fileName}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search files..." />
          <CommandEmpty>No files found.</CommandEmpty>
          <CommandGroup className="flex flex-col p-0">
            {files?.map((file) => (
              <CommandItem
                key={file._id}
                value={file._id}
                onSelect={() => {
                  router.push(`/dashboard/${file.teamId}/${file._id}`)
                  setOpen(false)
                }}
              >
                <div className="flex items-center">
                  <div className="relative h-4 w-4 mr-2">
                    <Image 
                      fill
                      src="/logo.png"
                      className={cn("object-fill", file._id === params?.fileId ? "opacity-100" : "opacity-0")}
                      alt="logo"
                    />
                  </div>
                    {file.fileName}
                </div>
              </CommandItem>
            ))}
            <CommandItem>
              <button
                className="flex items-center justify-start w-full"
                onClick={() => onOpenFileModal(user)}
              >
                <PlusCircle className="h-4 w-4 mr-2"/>
                  Add
                </button>
              {/* <SidebarBottom user={user}/> */}
            </CommandItem>
            <CommandItem>
              <button
                className="flex items-center justify-start w-full"
                onClick={() => onOpenEditModal(currentFile!)}
              >
                <Pencil className="h-4 w-4 mr-2"/>
                  Edit
              </button>
            </CommandItem>
            <CommandItem>
              <ConfirmModal confirmFn={handleDelete} header="Are you absolutely sure?" discription="This action cannot be undone. permanently delete your file and remove your data from our servers.">
                <button
                  className="flex items-center justify-start w-full"
                >
                  <Trash2 className="h-4 w-4 mr-2"/>
                  Delete
                </button>
              </ConfirmModal>
            </CommandItem>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}