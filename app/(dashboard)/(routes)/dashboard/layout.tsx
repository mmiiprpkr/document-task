"use client";

import { useCallback, useEffect } from "react";

import { api } from "@/convex/_generated/api";
import { ConvexReactClient, useConvex, useMutation } from "convex/react";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";

import { Sidebar } from "@/components/dashboard/sidebar";
import { Navbar } from "@/components/dashboard/header";

const DashboardLayout = (
  {children}: { children: React.ReactNode },
) => {
  const convex: ConvexReactClient = useConvex();
  const { user }: KindeUser | any = useKindeBrowserClient();

  const createUser = useMutation(api.user.createUser)

  const checkUser = useCallback( async () => {
    const rusult = await convex.query(api.user.getUser, { email: user?.email as string });
    
    if (!rusult?.length) {
      createUser({
        name: user?.given_name!,
        email: user?.email!,
        image: user?.picture!
      }).then((resp) => {
        console.log(resp);
      })
    }
  }, [convex, createUser, user?.given_name, user?.email, user?.picture])

  useEffect(() => {
    if (user) {
      checkUser();
    }
  }, [user, checkUser]);

  return ( 
    <div>
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <div className="md:pl-72">
          <Navbar user={user}/>
          {children}
        </div>
    </div>
   );
}
 
export default DashboardLayout;