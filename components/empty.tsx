import Image from "next/image"

export const Empty = () => {
  return (
    <Image 
      src="/empty.png"
      alt="empty"
      height={300}
      width={300}
    />
  )
}