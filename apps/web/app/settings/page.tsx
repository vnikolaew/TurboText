import SettingsAccordion from "@app/settings/_components/SettingsAccordion";
import WithInitialState from "@app/settings/_components/common/WithInitialState";
import { auth } from "@auth";
import {
   APP_DESCRIPTION,
   APP_NAME,
   AUTHOR,
   AUTHOR_WEBSITE,
} from "@config/site";
import { xprisma } from "@repo/db";
import type { Metadata } from "next";
import Sections from "./_components/Sections";
import { getClickSoundsFiles } from "./_queries";

export interface PageProps {
   searchParams?: { sections: string | string[] | undefined };
}

export const metadata: Metadata = {
   title: `Settings | ${APP_NAME}`,
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

const Page = async ({}: PageProps) => {
   const session = await auth();
   const user = await xprisma.user.findUnique({
      where: { id: session?.user?.id ?? `` },
      include: { tags: true, configuration: true },
   });

   // if (!user) notFound();
   let rest = null;
   if (user) {
      const { updatePassword, verifyPassword, ...rest_ } = user;
      rest = rest_;
   }

   return (
      <section
         className={`mx-auto my-24 flex w-3/4 flex-col items-center gap-4`}
      >
         <WithInitialState soundClicks={getClickSoundsFiles()} />
         <Sections />
         <SettingsAccordion user={rest} />
      </section>
   );
};

export default Page;
