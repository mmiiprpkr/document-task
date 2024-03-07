"use client";

import { Editor } from "@/components/editor";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { redirect, useParams, useRouter } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";

const FileIdPage = () => {
  const params = useParams();
  const router = useRouter();

  const files: File | any= useQuery(api.file.getFileById, { _id: params?.fileId as Id<"files"> });

  if (files === undefined) {
    return null;
  }

  if (!files) {
    return router.push("/dashboard");
  }

  return ( 
    <div className="h-full">
      <Editor files={files}/>
    </div>
   );
}
 
export default FileIdPage;