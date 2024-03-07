"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { KindeState } from "@kinde-oss/kinde-auth-nextjs/dist/types";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import { Team } from "@/types";

const Dashboardpage = () => {
  const { user }: KindeState = useKindeBrowserClient();
  const router = useRouter();

  const team: Team[] | undefined = useQuery(api.team.getTeam, {
    email: user?.email as string,
  });

  if (team === undefined) {
    return null
  }
  
  if (!team?.length) {
    return router.push("/teams/create");
  }

  return router.push(`/dashboard/${team[0]?._id}`);
};

export default Dashboardpage;
