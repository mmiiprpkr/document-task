"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { File } from "@/types";
import { useQuery } from "convex/react";
import Image from "next/image"
import { useParams } from "next/navigation";

export const WorkSpaceHeader = () => {
  const params = useParams();
  const file:File | undefined = useQuery(api.file.getFileById, { _id: params.fileId as Id<"files"> });

  if (file === undefined) {
    return null;
  }

  return (
    <nav className="p-3 border-b flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <Image 
          src="/logo-1.png"
          alt="logo"
          height={40}
          width={40}
        />
        <h2 className="text-primary font-semibold">{file.fileName}</h2>
      </div>
    </nav>
  )
}