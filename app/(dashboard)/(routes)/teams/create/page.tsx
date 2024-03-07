"use client";

import * as z from "zod";

import Image from "next/image";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";

const formSchema = z.object({
  teamName: z.string().min(1, {
    message: "Team name is required"
  })
})

const CreateTeamPage = () => {
  const router = useRouter();

  const { user } = useKindeBrowserClient();
  const createTeam = useMutation(api.team.createTeam);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teamName: ""
    }
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const team = await createTeam({
        teamName: values.teamName,
        createdBy: user?.email!
      });

      toast.success("team created ✅")
      form.reset();
      router.push(`/dashboard/${team}`);
      router.refresh();
    } catch (error) {
      console.error("CREATE TEAM", error);
    }
  }

  return ( 
    <div className="p-16">
      <div className="flex items-center justify-center">
        <Image 
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col items-center mt-8">
        <h2 className="text-primary font-bold text-2xl md:text-5xl">
          What should we call your team?
        </h2>
        <p className="text-base text-muted-foreground">
          You can always change this later from settings
        </p>
        <div className="mt-7 md:w-[40%] w-full">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <FormField 
                control={form.control}
                name="teamName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Team Name</FormLabel>
                    <FormControl>
                      <Input 
                        {...field}
                        disabled={isSubmitting}
                        placeholder="Your team name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center gap-x-3">
                <Button
                  disabled={isSubmitting}
                >
                  Create
                </Button>
                <Link href="/dashboard">
                  <Button variant="ghost">
                    Back
                  </Button>
                </Link>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
   );
}
 
export default CreateTeamPage;