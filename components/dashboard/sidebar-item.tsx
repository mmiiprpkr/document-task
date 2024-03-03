"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  teamName: string;
  active: boolean;
  onClick: () => void
}

export const SidebarItem = ({ teamName, active, onClick }: SidebarItemProps) => {
  return (
    <Button
      onClick={onClick}
      variant="ghost"
      className={cn(
        "font-bold p-2 rounded-lg cursor-pointer justify-start",
        active && "text-primary bg-secondary"
      )}
    >
      {teamName}
    </Button>
  );
};
