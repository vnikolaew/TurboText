import AppGlobalStatsSection from "@app/about/_components/AppGlobalStatsSection";
import BugReportFeatureRequestSection from "@app/about/_components/BugReportFeatureRequestSection";
import ContactSection from "@app/about/_components/ContactSection";
import StatsSection from "@app/about/_components/StatsSection";
import WordsSetAndLanguageSection from "@app/about/_components/WordsSetAndLanguageSection";
import { APP_DESCRIPTION, APP_NAME } from "@config/site";
import { formatMilliseconds } from "@lib/utils";
import { TypingRun, xprisma } from "@repo/db";
import { sum } from "lodash";
import moment from "moment";
import type { Metadata } from "next";
import AboutUsSection from "./_components/AboutUsSection";

export interface PagProps {}

export const metadata: Metadata = {
   title: `About | ${APP_NAME}`,
   description: APP_DESCRIPTION,
};

const LAUNCH_DATE = new Date(2024, 6, 15);

const Page = async ({}: PagProps) => {
   const runs: TypingRun[] = await xprisma.typingRun.findMany({
      select: {
         id: true,
         userId: true,
         typedLetters: true,
         typedLettersInfo: true,
      },
   });
   const [amount, unit] = formatMilliseconds(
      sum(
         runs.map(
            (r) => r.typedLettersInfo?.typedLetters?.at(-1)?.timestamp as number
         )
      )
   )?.split(` `);

   return (
      <section
         className={`mx-auto my-24 flex w-2/3 flex-col items-center gap-4`}
      >
         <h2
            className={`max-w-[450px] text-wrap text-center text-xl leading-tight text-main`}
         >
            Helping users improve their typing speed since{" "}
            {moment(LAUNCH_DATE).format(`Do of MMMM, YYYY`)}
         </h2>
         <AppGlobalStatsSection runs={runs} amount={amount!} unit={unit!} />
         <AboutUsSection />
         <WordsSetAndLanguageSection />
         <StatsSection />
         <BugReportFeatureRequestSection />
         <ContactSection />
      </section>
   );
};

export default Page;
