"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Sidebar } from "./sidebar";
import { useEffect, useState } from "react";

export const MobileMenu = () => {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <Button
          size="sm"
        >
          <Menu className="w-4 h-4"/>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 p-0">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>
            <Sidebar />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}