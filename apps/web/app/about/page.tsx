import AppGlobalStatsSection from "@app/about/_components/AppGlobalStatsSection";
import BugReportFeatureRequestSection from "@app/about/_components/BugReportFeatureRequestSection";
import ContactSection from "@app/about/_components/ContactSection";
import StatsSection from "@app/about/_components/StatsSection";
import WordsSetAndLanguageSection from "@app/about/_components/WordsSetAndLanguageSection";
import { APP_DESCRIPTION, APP_NAME } from "@config/site";
import moment from "moment";
import type { Metadata } from "next";
import AboutUsSection from "./_components/AboutUsSection";
import { getAboutPageStats } from "@app/about/_queries";
import StatsChart from "./_components/StatsChart";
import WithInitialState from "./_components/WithInitialState";

export interface PagProps {
}

export const metadata: Metadata = {
   title: `About | ${APP_NAME}`,
   description: APP_DESCRIPTION,
};

const LAUNCH_DATE = new Date(2024, 6, 15);

const Page = async ({}: PagProps) => {
   const { runs, unit, amount, challenges, usersGrouped } = await getAboutPageStats();

   return (
      <section
         className={`mx-auto my-24 flex w-2/3 flex-col items-center gap-4`}
      >
         <WithInitialState />
         <h2
            className={`max-w-[450px] text-wrap text-center text-xl leading-tight text-main`}
         >
            Helping users improve their typing speed since{" "}
            {moment(LAUNCH_DATE).format(`Do of MMMM, YYYY`)}
         </h2>
         <AppGlobalStatsSection challenges={challenges} runs={runs} amount={amount!} unit={unit!} />
         <StatsChart usersGrouped={usersGrouped} />
         <AboutUsSection />
         <WordsSetAndLanguageSection />
         <StatsSection />
         <BugReportFeatureRequestSection />
         <ContactSection />
      </section>
   );
};

export default Page;
