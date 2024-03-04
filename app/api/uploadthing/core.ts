import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
 
const f = createUploadthing();
 
const { getUser } = getKindeServerSession()

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: '4MB' }, pdf: { maxFileCount: 1 }, video: { maxFileCount: 1, maxFileSize: "1GB" }, audio: {maxFileCount: 1 }})
    // .middleware(async (req) => {
    //   const user = await getUser()

    //   if (!user) throw new Error('Unauthorized')

    //   return { userId: user.id }
    // })
    .onUploadComplete(async ({ metadata, file }) => {}),
} satisfies FileRouter
 
export type OurFileRouter = typeof ourFileRouter;