"use client";
import { useCallback, useEffect } from "react";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { KindeState } from "@kinde-oss/kinde-auth-nextjs/dist/types";

import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import { Team } from "@/types";

const Dashboardpage = () => {
  const convex = useConvex();
  const { user }: KindeState  = useKindeBrowserClient();
  const router = useRouter();

  const checkTeam = useCallback(async () => {
    const result: Team[] = await convex.query(api.team.getTeam, { email: user?.email as string });

    if (!result?.length) {
      return router.push("/teams/create");
    }

    return router.push(`/dashboard/${result[0]?._id}`)
  }, [convex, router,user?.email])

  useEffect(() => {
    checkTeam()
  }, [checkTeam]);


  return ( 
    <div>
      DashboardPage
    </div>
   );
}
 
export default Dashboardpage;