"use client";

import { api } from "@/convex/_generated/api";
import { File } from "@/types";
import { useQuery } from "convex/react";
import { redirect, useParams } from "next/navigation";

import { columns } from "@/components/team/columns"
import { DataTable } from "@/components/team/data-table";

const TeamIdPage = () => {
  const params = useParams();

  const team = useQuery(api.team.getTeamById, { _id: params?.teamId as string });
  const files = useQuery<File[] | any>(api.file.getFiles, {teamId: params?.teamId as string });

  if (team === undefined || files === undefined) {
    return null;
  }

  if (!team[0]?._id) {
    return redirect("/dashboard")
  }

  return ( 
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={files} />
    </div>
   );
}
 
export default TeamIdPage;