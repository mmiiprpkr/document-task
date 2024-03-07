"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { KindeState } from "@kinde-oss/kinde-auth-nextjs/dist/types";

import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import { Team } from "@/types";
import { Loader2 } from "lucide-react";

const Dashboardpage = () => {
  const { user }: KindeState = useKindeBrowserClient();
  const createUser = useMutation(api.user.createUser)
  const router = useRouter();

  const result =  useQuery(api.user.getUser, { email: user?.email as string });
  const team: Team[] | undefined = useQuery(api.team.getTeam, {
    email: user?.email as string,
  });

  if (result === undefined || team === undefined) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-5 w-5"/>
      </div>
    )
  }

  
  if (!result[0]?._id) {
    createUser({
      name: user?.given_name!,
      email: user?.email!,
      image: user?.picture!
    }).then((resp) => {
      console.log(resp);
    })
  }


  if (team === undefined) {
    return null
  }
  
  if (!team[0]?._id) {
    return router.push("/teams/create");
  }

  return router.push(`/dashboard/${team[0]?._id}`);
};

export default Dashboardpage;
