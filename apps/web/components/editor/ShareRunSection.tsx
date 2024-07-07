"use client";
import { APP_NAME } from "@config/site";
import { TypingRun } from "@repo/db";
import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@repo/ui";
import { PropsWithChildren } from "react";
import {
   FacebookIcon,
   FacebookShareButton,
   LinkedinIcon,
   LinkedinShareButton,
   RedditIcon,
   RedditShareButton,
   TwitterIcon,
   TwitterShareButton,
   ViberIcon,
   ViberShareButton,
} from "react-share";

export interface ShareRunSectionProps {
   run: TypingRun;
}

const SIZE = 28;

const SOCIALS = [
   {
      title: `Facebook`,
      Icon: ({ run }: { run: TypingRun }) => (
         <FacebookShareButton
            hashtag={note.tags.map((t) => `#${t}`).join(" ")}
            url={`${process.env.NEXT_PUBLIC_BASE_URL}/explore?previewId=${note.id}`}
         >
            <FacebookIcon size={SIZE} className={`rounded-full`} />
         </FacebookShareButton>
      ),
   },
   {
      title: `Twitter`,
      Icon: ({ run }: { run: TypingRun }) => (
         <TwitterShareButton
            title={note.title}
            hashtags={[]}
            url={`${process.env.NEXT_PUBLIC_BASE_URL}/explore?previewId=${note.id}`}
         >
            <TwitterIcon size={SIZE} className={`rounded-full`} />
         </TwitterShareButton>
      ),
   },
   {
      title: `LinkedIn`,
      Icon: ({ run }: { run: TypingRun }) => (
         <LinkedinShareButton
            summary={`${raw_text.slice(0, 30)}...`}
            source={APP_NAME}
            title={title}
            url={`${process.env.NEXT_PUBLIC_BASE_URL}/explore?previewId=${id}`}
         >
            <LinkedinIcon size={SIZE} className={`rounded-full`} />
         </LinkedinShareButton>
      ),
   },
   {
      title: `Viber`,
      Icon: ({ run }: { run: TypingRun }) => (
         <ViberShareButton
            title={title}
            url={`${process.env.NEXT_PUBLIC_BASE_URL}/explore?previewId=${id}`}
         >
            <ViberIcon size={SIZE} className={`rounded-full`} />
         </ViberShareButton>
      ),
   },
   {
      title: `Reddit`,
      Icon: ({ run }: { run: TypingRun }) => (
         <RedditShareButton
            title={title}
            url={`${process.env.NEXT_PUBLIC_BASE_URL}/explore?previewId=${id}`}
         >
            <RedditIcon size={SIZE} className={`rounded-full`} />
         </RedditShareButton>
      ),
   },
] as const;

const ShareRunSection = ({ run }: ShareRunSectionProps) => {
   return (
      <div className={`flex flex-1 items-center gap-2`}>
         {SOCIALS.map(({ Icon, title }, index) => (
            <SocialShareButton key={run.id + title} title={title}>
               <Icon run={run} />
            </SocialShareButton>
         ))}
      </div>
   );
};

const SocialShareButton = ({
   title,
   children,
}: PropsWithChildren & { title: string }) => {
   return (
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger asChild>{children}</TooltipTrigger>
            <TooltipContent
               side={`bottom`}
               className={`!z-30 rounded-md bg-black text-xs text-white`}
            >
               {`Share to ${title}`}
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
};

export default ShareRunSection;
