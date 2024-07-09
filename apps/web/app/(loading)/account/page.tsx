import EmailNotVerifiedNotification from "@app/(loading)/account/_components/EmailNotVerifiedNotification";
import TypingRunsStatsSection from "@app/(loading)/account/_components/TypingRunsStatsSection";
import UserActivitySection from "@app/(loading)/account/_components/UserActivitySection";
import LatestUserChallenges from "@app/(loading)/account/_components/challenges/LatestUserChallenges";
import LatestUserRuns from "@app/(loading)/account/_components/runs/LatestUserRuns";
import { getUserWithTypingRuns } from "@app/(loading)/account/_queries";
import OnAccountVerified from "@app/_components/toasts/OnAccountVerified";
import {
   APP_DESCRIPTION,
   APP_NAME,
   AUTHOR,
   AUTHOR_WEBSITE,
} from "@config/site";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageLinks from "./_components/PageLinks";
import UserRunsChart from "@app/(loading)/account/_components/charts/UserRunsChart";
import UserGeneralInfo from "@app/(loading)/account/_components/UserGeneralInfo";
import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@lib/utils";
import UserRunsChartTwo from "@app/(loading)/account/_components/charts/UserRunsChartTwo";
import { max } from "lodash";
import { TypingRun } from "@repo/db";
import UserRunsChartThree from "@app/(loading)/account/_components/charts/UserRunsChartThree";

export const metadata: Metadata = {
   title: `Account | ${APP_NAME}`,
   description: APP_DESCRIPTION,
   authors: [
      {
         url: AUTHOR_WEBSITE,
         name: AUTHOR,
      },
   ],
   applicationName: APP_NAME,
   // icons: appLogo.src,
   keywords: [`speed`, `typing`, `speed-typing`, `test`, `web`, `keyboard`],
   category: `notes`,
   creator: AUTHOR,
   referrer: `no-referrer`,
};

export interface PageProps {
   searchParams: { verified?: string };
}

export function getRunsGroupedByAccuracy(runs: TypingRun[]) {
   const runsGrouped = Array
      .from({ length: Math.ceil(max(runs.map(r => r.metadata?.accuracy)) / 10) })
      .map((_, index) => {
         const [from, to] = [10 * index, 10 * (index + 1) - 1];
         return {
            range: `${from}-${to}` as `${number}-${number}`,
            runs: runs.filter(x => x.metadata?.accuracy >= from && x.metadata?.accuracy <= to).length,
            runs_: runs.filter(x => x.metadata?.wpm >= from && x.metadata?.wpm <= to)
         };
      });
   return runsGrouped as const
}

export function getRunsGrouped(runs: TypingRun[]) {
   const runsGrouped = Array
      .from({ length: Math.ceil(max(runs.map(r => r.metadata?.wpm)) / 10) })
      .map((_, index) => {
         const [from, to] = [10 * index, 10 * (index + 1) - 1];
         return {
            range: `${from}-${to}` as `${number}-${number}`,
            runs: runs.filter(x => x.metadata?.wpm >= from && x.metadata?.wpm <= to).length,
            runs_: runs.filter(x => x.metadata?.wpm >= from && x.metadata?.wpm <= to)
         };
      });
   return runsGrouped as const
}

const Page = async ({ searchParams }: PageProps) => {
   const user = await getUserWithTypingRuns();
   if (!user) notFound();

   const runsGrouped = getRunsGrouped(user.typingRuns)
   const runsGroupedByAccuracy = getRunsGroupedByAccuracy(user.typingRuns)

   return (
      <section
         className={`mx-auto mt-24 flex w-2/3 flex-col items-center gap-4`}
      >
         {!user.emailVerified && <EmailNotVerifiedNotification />}
         {user.emailVerified && searchParams?.verified === `true` && (
            <OnAccountVerified />
         )}
         <PageLinks />
         <UserGeneralInfo user={user} />
         <Section>
            <UserActivitySection typingRuns={user?.typingRuns} />
         </Section>
         <Section>
            <UserRunsChart runs={runsGrouped} />
         </Section>
         <Section>
            <UserRunsChartThree runs={runsGroupedByAccuracy} />
         </Section>
         <Section>
            <TypingRunsStatsSection runs={user.typingRuns} />
         </Section>
         <Section>
            <LatestUserRuns user={user} />
         </Section>
         <Section>
            <LatestUserChallenges user={user} />
         </Section>
      </section>
   );
};

const Section = ({
                    children,
                    className,
                    ...props
                 }: PropsWithChildren & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => (
   <div
      className={cn(`my-8 flex w-full items-center gap-8 rounded-lg bg-secondary-bg p-6 py-10 shadow-lg`, className)}
      {...props}
   >
      {children}
   </div>
);

export default Page;
