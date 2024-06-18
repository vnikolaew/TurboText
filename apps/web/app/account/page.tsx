import React from "react";
import { Separator, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, UserAvatar } from "@repo/ui";
import moment from "moment";
import { notFound } from "next/navigation";
import AccountLinks from "@app/account/_components/AccountPageLinks";
import EmailNotVerifiedNotification from "@app/account/_components/EmailNotVerifiedNotification";
import UserActivitySection from "@app/account/_components/UserActivitySection";
import { formatMillisecondsToTime } from "@lib/utils";
import LatestUserRuns from "@app/account/_components/LatestUserRuns";
import type { Metadata } from "next";
import { APP_DESCRIPTION, APP_NAME, AUTHOR, AUTHOR_WEBSITE } from "@config/site";
import appLogo from "@public/logo.jpg";
import { getUserWithTypingRuns } from "@app/account/_queries";

export const metadata: Metadata = {
   title: `Account | ${APP_NAME}`,
   description: APP_DESCRIPTION,
   authors: [{
      url: AUTHOR_WEBSITE,
      name: AUTHOR,
   }],
   applicationName: APP_NAME,
   icons: appLogo.src,
   keywords: [`speed`, `typing`, `speed-typing`, `test`, `web`, `keyboard`],
   category: `notes`,
   creator: AUTHOR,
   referrer: `no-referrer`,
};


export interface PageProps {
}

const Page = async ({}: PageProps) => {
   const user = await getUserWithTypingRuns()
   if (!user) notFound();

   return (
      <section className={`w-2/3 mx-auto mt-24 flex flex-col items-center gap-4`}>
         {!user.emailVerified && (
            <EmailNotVerifiedNotification />
         )}
         <div className={`w-full bg-stone-950 rounded-lg shadow-lg flex items-center p-6 py-10 gap-8 mt-8`}>
            <div className={`flex flex-col items-start gap-2`}>
               <div className={`flex items-center gap-4`}>
                  <UserAvatar className={`w-20 h-20`} imageSrc={user?.image!} />
                  <div className={`flex flex-col items-start gap-2`}>
                     <h2 className={`text-2xl text-neutral-300`}>{user?.name}</h2>

                     <div className={`flex flex-col gap-0`}>
                        <TooltipProvider>
                           <Tooltip>
                              <TooltipTrigger asChild>
                     <span
                        className={`text-sm text-neutral-500 cursor-pointer`}>
                        Joined {moment(user.createdAt).format(`DD MMM YYYY`)}
                     </span>
                              </TooltipTrigger>
                              <TooltipContent
                                 side={`right`}
                                 className={`bg-black text-white rounded-xl text-sm border-neutral-700 !px-4 !py-2`}>
                                 {moment(user.createdAt).fromNow()}
                              </TooltipContent>
                           </Tooltip>
                        </TooltipProvider>
                        <span className={`text-sm text-neutral-500`}>
                        Current streak: {user.streak} days
                     </span>
                     </div>
                  </div>
               </div>
            </div>
            <Separator orientation={`vertical`} className={`h-20 w-[4px] rounded-full bg-neutral-700`} />
            <div className={`flex-1 h-full grid grid-cols-3`}>
               <div className={`flex flex-col items-start gap-1`}>
                  <span className={`text-neutral-500 text-sm`}>Tests started</span>
                  <h2 className={`text-3xl text-white`}>{user.typingRuns.length}</h2>
               </div>
               <div className={`flex flex-col items-start gap-1`}>
                  <span className={`text-neutral-500 text-sm`}>Tests completed</span>
                  <h2 className={`text-3xl text-white`}>{user.typingRuns.length}</h2>
               </div>
               <div className={`flex flex-col items-start gap-1`}>
                  <span className={`text-neutral-500 text-sm`}>Time typing</span>
                  <h2 className={`text-3xl text-white`}>{formatMillisecondsToTime(user.totalTimeTypingMs)}</h2>
               </div>
            </div>
            <Separator orientation={`vertical`} className={`h-20 w-[4px] rounded-full bg-neutral-700`} />
            <AccountLinks username={user.name!} />
         </div>

         <div className={`w-full bg-stone-950 rounded-lg shadow-lg flex items-center p-6 py-10 gap-8 mt-8`}>
            <UserActivitySection typingRuns={user.typingRuns} />
         </div>
         {/*<div className={`w-full bg-stone-950 rounded-lg shadow-lg flex items-center p-6 py-10 gap-8 mt-8`}>*/}
         {/*   <pre>{JSON.stringify(user.typingRuns, null, 2)}</pre>*/}
         {/*</div>*/}
         <div className={`w-full bg-stone-950 rounded-lg shadow-lg flex items-center p-6 py-10 gap-8 mt-8`}>
            <LatestUserRuns user={user} />
         </div>
      </section>
   );
};

export default Page;