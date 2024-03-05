"use client";

import { Empty } from "@/components/empty";
import { Button } from "@/components/ui/button";
import { WorkSpaceHeader } from "@/components/workspace/workspace-header";
import { cn } from "@/lib/utils";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Editor } from "@/components/editor";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { redirect, useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";

const FileIdPage = () => {
  const [isDocumentOpen, setIsDocumentOpen] = useState(true);
  const [isCanvaOpen, setIsCanvaOpen] = useState(false);
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
      <WorkSpaceHeader />
      <div className="flex justify-center gap-2">
        <Button onClick={() => setIsCanvaOpen(!isCanvaOpen)} size="sm">
          {isCanvaOpen ? "hide canvas" : "show canvas"}
        </Button>
        <Button onClick={() => setIsDocumentOpen(!isDocumentOpen)} size="sm">
          {isDocumentOpen ? "hide docment" : "show docment"}
        </Button>
      </div>
      {!isDocumentOpen && !isCanvaOpen && (
        <div className="h-full flex items-center justify-center">
          <Empty />
        </div>
      )}
      <div className={cn(
        "grid grid-cols-2 h-full",
        !isDocumentOpen && "grid-cols-1",
        !isCanvaOpen && "grid-cols-1",
        !isDocumentOpen && !isCanvaOpen && "hidden"
      )}>
        <div className={cn(
          "",
          isDocumentOpen ? "" : "hidden"
        )}>
          <Editor files={files}/>
        </div>
        <div
          className={cn(
            "bg-primary",
            isCanvaOpen ? "" : "hidden"
          )}
        >
          Canvas
        </div>
      </div>
    </div>
   );
}
 
export default FileIdPage;