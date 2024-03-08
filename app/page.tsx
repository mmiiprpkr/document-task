"use client";

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import { Loader2 } from "lucide-react";

const Home = () => {
  const { user }: KindeUser | any  = useKindeBrowserClient();

  return ( 
    <div className="h-full bg-black">
      <Header user={user}/>
      <Hero user={user}/>
    </div>
   );
}
 
export default Home;