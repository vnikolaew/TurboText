"use client";
import React, { PropsWithChildren } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@repo/ui";
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
import { APP_NAME } from "@config/site";
import { TypingRun } from "@repo/db";

export interface ShareRunSectionProps {
   run: TypingRun;
}

const SIZE = 28;

const SOCIALS = [
   {
      title: `Facebook`,
      Icon: ({ run }: { run: TypingRun }) =>
         <FacebookShareButton
            hashtag={note.tags.map(t => `#${t}`).join(" ")}
            url={`${process.env.NEXT_PUBLIC_BASE_URL}/explore?previewId=${note.id}`}>
            <FacebookIcon size={SIZE} className={`rounded-full`} />
         </FacebookShareButton>,
   },
   {
      title: `Twitter`,
      Icon: ({ run }: { run: TypingRun }) =>
         <TwitterShareButton
            title={note.title} hashtags={[ ]}
            url={`${process.env.NEXT_PUBLIC_BASE_URL}/explore?previewId=${note.id}`}
         >
            <TwitterIcon size={SIZE} className={`rounded-full`} />
         </TwitterShareButton>,
   },
   {
      title: `LinkedIn`,
      Icon: ({ run }: { run: TypingRun }) =>
         <LinkedinShareButton
            summary={`${raw_text.slice(0, 30)}...`} source={APP_NAME} title={title}
            url={`${process.env.NEXT_PUBLIC_BASE_URL}/explore?previewId=${id}`}>
            <LinkedinIcon size={SIZE} className={`rounded-full`} />
         </LinkedinShareButton>,
   },
   {
      title: `Viber`,
      Icon: ({ run }: { run: TypingRun }) =>
         <ViberShareButton title={title} url={`${process.env.NEXT_PUBLIC_BASE_URL}/explore?previewId=${id}`}>
            <ViberIcon size={SIZE} className={`rounded-full`} />
         </ViberShareButton>,
   },
   {
      title: `Reddit`,
      Icon: ({ run }: { run: TypingRun }) =>
         <RedditShareButton title={title} url={`${process.env.NEXT_PUBLIC_BASE_URL}/explore?previewId=${id}`}>
            <RedditIcon size={SIZE} className={`rounded-full`} />
         </RedditShareButton>,
   },
] as const;

const ShareRunSection = ({ run }: ShareRunSectionProps) => {
   return (
      <div className={`flex items-center gap-2 flex-1`}>
         {SOCIALS.map(({ Icon, title }, index) => (
            <SocialShareButton key={run.id + title} title={title}>
               <Icon run={run} />
            </SocialShareButton>
         ))}
      </div>
   );
};

const SocialShareButton = ({ title, children }: PropsWithChildren & { title: string }) => {
   return (
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger asChild>
               {children}
            </TooltipTrigger>
            <TooltipContent side={`bottom`} className={`bg-black text-white rounded-md text-xs !z-30`}>
               {`Share to ${title}`}
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
};

export default ShareRunSection;