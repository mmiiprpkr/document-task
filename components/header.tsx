"use client";

import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";

import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { KindeState } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import { LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";

export const Header = () => {
  const { user }: KindeState | undefined  = useKindeBrowserClient();

  if (user === undefined) {
    return null
  }

  return (
    <header className="bg-black fixed w-full left-0 top-0">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <Image 
            src="/logo-1.png"
            alt="logo"
            width={60}
            height={60}
          />
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-white transition hover:text-white/75"
                  href="#"
                >
                  {" "}
                  About{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-white/75"
                  href="#"
                >
                  {" "}
                  Careers{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-white/75"
                  href="#"
                >
                  {" "}
                  History{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-white/75"
                  href="#"
                >
                  {" "}
                  Services{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-white/75"
                  href="#"
                >
                  {" "}
                  Projects{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-white/75"
                  href="#"
                >
                  {" "}
                  Blog{" "}
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              {!user && (
                <>
                  <Button variant="ghost" className="text-white" asChild>
                    <RegisterLink>
                      Register
                    </RegisterLink>
                  </Button>

                  <Button asChild>
                    <LoginLink>
                      Login
                    </LoginLink>
                  </Button>
                </>
              )}
              {user && (
                <Link href="/dashboard" className={cn(
                  buttonVariants({
                    variant: "default"
                  }),
                  "flex items-center"
                )}>
                  <LayoutDashboard className="h-4 w-4 mr-2" />
                  Dashboard
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
