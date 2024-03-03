"use client";

import { api } from "@/convex/_generated/api";
import { File } from "@/types";
import { useQuery } from "convex/react";
import { useParams } from "next/navigation";

import { Payment, columns } from "@/components/team/columns"
import { DataTable } from "@/components/team/data-table";

const TeamIdPage = () => {
  const params = useParams();

  const files = useQuery<File[] | any>(api.file.getFiles, {teamId: params?.teamId as string });

  if (files === undefined) {
    return null;
  }

  return ( 
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={files} />
    </div>
   );
}
 
export default TeamIdPage;