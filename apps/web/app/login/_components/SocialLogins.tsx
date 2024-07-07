import { UilGithub, UilGoogle } from "@iconscout/react-unicons";
import { Button } from "@repo/ui";
import { signIn } from "next-auth/react";

export interface SocialLoginsProps {}

const SocialLogins = ({}: SocialLoginsProps) => {
   return (
      <div className={`flex w-full items-center gap-4`}>
         <GoogleSignInButton />
         <GithubSignInButton />
      </div>
   );
};

const GoogleSignInButton = ({}: SocialLoginsProps) => (
   <Button
      onClick={(_) =>
         signIn(`google`, { callbackUrl: `/` }).then((res) => {
            console.log({ res });
         })
      }
      title={`Google`}
      className={`group flex-1 !bg-accent !text-main transition-colors duration-100 hover:!bg-neutral-300`}
      variant={`secondary`}
   >
      <UilGoogle
         className={`text-main transition-colors duration-100 group-hover:!text-accent`}
      />
   </Button>
);

const GithubSignInButton = ({}: SocialLoginsProps) => (
   <Button
      onClick={(_) =>
         signIn(`github`, { callbackUrl: `/` }).then((res) => {
            console.log({ res });
         })
      }
      title={`Github`}
      className={`group flex-1 !bg-accent !text-main transition-colors duration-100 hover:!bg-neutral-300`}
      variant={`secondary`}
   >
      <UilGithub
         className={`text-main transition-colors duration-100 group-hover:!text-accent`}
      />
   </Button>
);

export default SocialLogins;
