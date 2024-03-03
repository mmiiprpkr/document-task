"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import { SidebarMenu } from "./sidebar-menu"
import { SidebarBottom } from "./sidebar-bottom";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Team } from "@/types";

export const Sidebar = () => {
  const { user } = useKindeBrowserClient();

  const team: Team[] | any = useQuery(api.team.getTeam, { email: user?.email as string });

  if (team === undefined && user === undefined) {
    return null;
  }

  return (
    <div className="bg-gray-100 h-full fixed w-72 border-r p-6 flex flex-col inset-y-0">
      <div className="flex-1">
        <SidebarMenu user={user!} teams={team}/>
      </div>
      <div>
        <SidebarBottom user={user!} />
      </div>
    </div>
  )
}