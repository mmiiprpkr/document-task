import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps {
  url: string;
}

export const UserAvatar = ({
  url
}: UserAvatarProps) => {
  return (
    <Avatar>
      <AvatarImage src={url} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};
