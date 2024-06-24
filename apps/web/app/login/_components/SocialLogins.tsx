import { Button } from "@repo/ui";
import React from "react";
import { UilGithub, UilGoogle } from "@iconscout/react-unicons";
import { signIn } from "next-auth/react";

export interface SocialLoginsProps {
}

const SocialLogins = ({}: SocialLoginsProps) => {
   return (
      <div className={`w-full flex items-center gap-4`}>
         <Button onClick={_ => signIn(`google`, { callbackUrl: `/` }).then(res => {
            console.log({ res });
         })} title={`Google`}
                 className={`flex-1 group hover:!bg-neutral-300 transition-colors duration-100`} variant={`secondary`}>
            <UilGoogle className={`text-white group-hover:!text-black transition-colors duration-100`} />
         </Button>
         <Button onClick={_ => signIn(`github`, {callbackUrl: `/`}).then(res => {
            console.log({ res });
         })} title={`Github`} className={`flex-1 group hover:!bg-neutral-300 transition-colors duration-100`}
                 variant={`secondary`}>
            <UilGithub className={`text-white group-hover:!text-black transition-colors duration-100`} />
         </Button>
      </div>
   );
};

export default SocialLogins;