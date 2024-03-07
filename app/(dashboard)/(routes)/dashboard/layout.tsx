"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";

import { Sidebar } from "@/components/dashboard/sidebar";
import { Navbar } from "@/components/dashboard/header";

const DashboardLayout = (
  {children}: { children: React.ReactNode },
) => {
  const { user }: KindeUser | any = useKindeBrowserClient();
  return ( 
    <div className="h-full">
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