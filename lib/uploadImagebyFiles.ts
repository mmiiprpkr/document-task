import { uploadFiles } from "./uploadthing"

export async function uploadByFile(file: File) {

  console.log(file);
  // upload to uploadthing
  const res = await uploadFiles("imageUploader", {
    files: [file]
  })

  return {
    success: 1,
    file: {
      url: res?.[0].url,
      name: file.name,
      title: `${file.name} ${file.type}`
    },
  }
}