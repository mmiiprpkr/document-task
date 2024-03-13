"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  teamName: string;
  active: boolean;
  onClick: () => void
  icon?: LucideIcon
}

export const SidebarItem = ({ teamName, active, onClick, icon: Icon }: SidebarItemProps) => {
  return (
    <Button
      onClick={onClick}
      variant="ghost"
      className={cn(
        "font-bold p-2 rounded-lg cursor-pointer justify-start w-full",
        active && "text-primary bg-gray-200"
      )}
    >
      {Icon && (
        <Icon className="mr-2" />
      )}
      {teamName}
    </Button>
  );
};
