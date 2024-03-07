"use client";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams, useRouter } from "next/navigation";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import { toast } from "sonner";
import { PlusCircle } from "lucide-react";
import { UseAddFileModal } from "@/hooks/useAddfileModal";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "required"
  })
});


export const AddFileModal = () => {
  const { isOpen, data, onClose } = UseAddFileModal();

  const router = useRouter();
  const params = useParams();

  const createFile = useMutation(api.file.createFile);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: ""
    }
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const file = await createFile({
        fileName: values.name,
        teamId: params?.teamId as string,
        createdBy: data?.email as string,
        archice: false,
        whiteboard: "untitle"
      });
      form.reset();
      router.push(`/dashboard/${params?.teamId}/${file}`)
      router.refresh();
      toast.success("file created✅");
      onClose();
    } catch (error) {
      console.error("CEATE NEW FILE ERROR", error);
    }
  }


  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create new file</DialogTitle>
          <DialogDescription>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2 flex flex-col"
              >
                <FormField 
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>File name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}    
                          disabled={isSubmitting}
                          placeholder="Enter file name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="ml-auto"
                >
                  Create
                </Button>
              </form>
            </Form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}