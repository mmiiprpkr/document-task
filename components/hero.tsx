import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="h-full bg-black">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl text-primary font-extrabold sm:text-5xl">
            Documents & diagrams
            <strong className="font-extrabold text-white sm:block">
              {" "}
              for engineering teams.{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-slate-200">
            All-in-one markdown editor, collaborative canvas, and diagram-as-code builder
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="#">
            <Button>
              Get Start
            </Button>
          </Link>

          <Link href="#">
            <Button
              variant="secondary"
              className="text-primary"
            >
              Learn more
            </Button>
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
