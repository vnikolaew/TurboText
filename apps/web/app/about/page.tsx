import React from "react";
import moment from "moment";
import { TypingRun, xprisma } from "@repo/db";
import AboutUsSection from "./_components/AboutUsSection";
import BugReportFeatureRequestSection from "@app/about/_components/BugReportFeatureRequestSection";
import ContactSection from "@app/about/_components/ContactSection";
import AppGlobalStatsSection from "@app/about/_components/AppGlobalStatsSection";
import type { Metadata } from "next";
import { APP_DESCRIPTION, APP_NAME } from "@config/site";
import WordsSetAndLanguageSection from "@app/about/_components/WordsSetAndLanguageSection";
import StatsSection from "@app/about/_components/StatsSection";

export interface PagProps {
}

export const metadata: Metadata = {
   title: `About | ${APP_NAME}`,
   description: APP_DESCRIPTION,
};

const LAUNCH_DATE = new Date(2024, 6, 15);

const Page = async ({}: PagProps) => {
   const runs: TypingRun[] = await xprisma.typingRun.findMany({
      select: { id: true, userId: true, typedLetters: true, typedLettersInfo: true },
   });

   return (
      <section className={`w-2/3 mx-auto my-24 flex flex-col items-center gap-4`}>
         <h2 className={`text-xl text-neutral-400 max-w-[450px] text-wrap text-center leading-tight`}>
            Helping users improve their typing speed
            since {moment(LAUNCH_DATE).format(`Do of MMMM, YYYY`)}</h2>
         <AppGlobalStatsSection runs={runs} />
         <AboutUsSection />
         <WordsSetAndLanguageSection />
         <StatsSection />
         <BugReportFeatureRequestSection />
         <ContactSection />
      </section>
   );
};

export default Page;