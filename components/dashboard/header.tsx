"use client";

import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types"
import { MobileMenu } from "./mobile-menu"
import { SwitchFile } from "./switch-file"
import { UserAvatar } from "@/components/avatar"
import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"
import { useParams } from "next/navigation"
import { Id } from "@/convex/_generated/dataModel";
import { File } from "@/types";

interface NavbarProps {
  user: KindeUser
}

export const Navbar = ({ user }: NavbarProps) => {
  const params = useParams()
  const file: File[] | undefined = useQuery(api.file.getFiles, { teamId: params?.teamId as Id<"teams"> });
  
  if (file === undefined) {
    return null;
  }

  return (
    <nav className="w-full h-16 border-b flex items-center px-8">
      <div className="w-full flex items-center justify-between">
        <MobileMenu />
        {params?.fileId && (
          <SwitchFile files={file} user={user}/> 
        )}
        <UserAvatar url={user?.picture as string} />
      </div>
    </nav>
  )
}