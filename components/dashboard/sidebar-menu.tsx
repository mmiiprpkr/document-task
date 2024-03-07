"use client";

import { ChevronDown, LayoutGrid, LogOut, Settings, Trash2, User } from "lucide-react";
import Image from "next/image";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { Separator } from "@/components/ui/separator";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import { UserAvatar } from "@/components/avatar";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useState } from "react";
import { Team } from "@/types";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SidebarItem } from "./sidebar-item";
import { UseSettingModal } from "@/hooks/useSettingModal";
import { ConfirmModal } from "../modals/confirm-modal";
import { Id } from "@/convex/_generated/dataModel";

const menu = [
  {
    id: 1,
    name: "Create Team",
    href: "/teams/create",
    icon: User,
  },
];

interface SidebarMenuProps {
  user: KindeUser;
  teams: Team[]
}

export const SidebarMenu = ({ user, teams }: SidebarMenuProps) => {
  const params = useParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { onOpen } = UseSettingModal();

  const team: Team[] | any = useQuery(api.team.getTeamById, { _id: params?.teamId as string });
  const deleteTeam = useMutation(api.team.deleteTeam);

  if (team === undefined) {
    return null;
  }
  
  const onClick = (
    (item: string) => {
      router.push(item);
    }
  );

  const onDelete = () => {
    deleteTeam({
      _id: params?.teamId as Id<"teams">
    })
    handleClose();
    router.push("/dashboard");
  }

  const handleChangeTeam = (team: Team) => {
    router.push(`/dashboard/${team._id}`);
    handleClose();
  }

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(!open);
  }

  const handeOpenModal = (event: React.MouseEvent) => {
    event.stopPropagation();
    onOpen(team[0]);
    console.log("clicke here open")
  }

  return (
    <>
      <Popover open={open} onOpenChange={handleClose}>
        <PopoverTrigger className="w-full" asChild>
          <div className="flex items-center gap-3 rounded-md hover:bg-gray-200 p-2 cursor-pointer" onClick={handleOpen}>
            <Image src="/logo.png" alt="logo" width={40} height={40} />
            <h2 className="font-black flex items-center gap-2 w-full text-primary">
              {team[0]?.teamName}
              <ChevronDown className="w-4 h-4 ml-auto" />
            </h2>
          </div>
        </PopoverTrigger>
        <PopoverContent className="ml-7 p-4 space-y-2">
          <div className="flex flex-col">
            {teams?.map((team) => (
              <SidebarItem 
                key={team._id}
                active={team._id === params?.teamId}
                onClick={() => handleChangeTeam(team)}
                teamName={team.teamName}
              />
            ))}
          </div>
          <div>
            {menu.map((item) => (
              <Button
                variant="ghost"
                key={item.id}
                className="flex gap-2 items-center w-full justify-start"
                onClick={() => onClick(item.href)}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Button>
            ))}
              <Button
                variant="ghost"
                className="flex gap-2 items-center w-full justify-start"
                onClick={handeOpenModal}
              >
                <Settings className="h-4 w-4" />
                Settings
              </Button>
              <ConfirmModal confirmFn={onDelete} header="Are you absolutely sure?" discription="This action cannot be undone. This will permanently delete your
            team and remove your data from our servers.">
                <Button
                  variant="ghost"
                  className="flex gap-2 items-center w-full justify-start"
                >
                  <Trash2 className="h-4 w-4" />
                  Delete team
                </Button>
              </ConfirmModal>
            <LogoutLink>
              <Button
                variant="ghost"
                className="flex gap-2 items-center w-full justify-start"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </LogoutLink>
          </div>
          <Separator />
          {user && (
            <div className="flex gap-2 items-center">
              <UserAvatar url={user?.picture as string} />
              <div>
                <h2 className="font-semibold">{user?.given_name}</h2>
                <h2 className="text-sm text-muted-foreground">{user?.email}</h2>
              </div>
            </div>
          )}
        </PopoverContent>
      </Popover>

      <Button
        variant="outline"
        className="w-full justify-start gap-2 font-bold mt-8"
      >
        <LayoutGrid className="h-5 w-5"/>
        All File
      </Button>
    </>
  );
};
