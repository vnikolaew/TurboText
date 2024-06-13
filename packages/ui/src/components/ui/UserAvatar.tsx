import { CircleUserRound } from "lucide-react";
import React, { HTMLAttributes } from "react";
import { Avatar, AvatarImage } from "./avatar";
import { AvatarProps } from "@radix-ui/react-avatar";

export interface UserAvatarProps extends AvatarProps, HTMLAttributes<HTMLSpanElement> {
   imageSrc?: string;
   alt?: string;
}

export const UserAvatar = ({ imageSrc, alt, className, ...props }: UserAvatarProps) => {
   return imageSrc ? (
      <Avatar className={className} {...props}>
         <AvatarImage alt={alt ?? ``} src={imageSrc} />
      </Avatar>
   ) : (
      <CircleUserRound className={className} size={28} />
   );
};
