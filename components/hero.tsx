import Link from "next/link";
import { Button } from "@/components/ui/button";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
interface HeroPops {
  user: KindeUser
}

export const Hero = ({ user }: HeroPops) => {

  return (
    <section className="h-full">
      <div className="mx-auto max-w-screen-xl px-4 py-10 lg:flex lg:items-center flex-col">
      <div className="flex items-center justify-center">
          <Image 
            src="/hero.png"
            alt="document"
            height={300}
            width={300}
          />
        </div>
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl text-primary font-extrabold sm:text-5xl">
            Task-app is a single space where you can think
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-slate-200">
            write, and plan. Capture thoughts, manage projects, or even run an entire company — and do it exactly the way you want.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {user && (
              <Link href="/dashboard">
                <Button>
                  Get Start
                </Button>
              </Link>
            )}
            {!user && (
              <LoginLink>
                <Button>
                  Get free account
                </Button>
              </LoginLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
