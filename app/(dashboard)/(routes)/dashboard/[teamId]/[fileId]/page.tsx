"use client";

import { Empty } from "@/components/empty";
import { Button } from "@/components/ui/button";
import { WorkSpaceHeader } from "@/components/workspace/workspace-header";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Editor } from "@/components/editor";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { redirect, useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";

const FileIdPage = () => {
  const params = useParams();

  const files: File | any= useQuery(api.file.getFileById, { _id: params?.fileId as Id<"files"> });

  if (files === undefined) {
    return null;
  }

  if (!files) {
    return redirect("/dashboard");
  }

  return ( 
    <div className="h-full">
      <Editor files={files}/>
    </div>
   );
}
 
export default FileIdPage;