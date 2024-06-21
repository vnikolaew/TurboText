import React, { Fragment, PropsWithChildren } from "react";
import { auth } from "@auth";
import { xprisma } from "@repo/db";
import WithInitialState from "@components/editor/WithInitialState";

export interface WithUserConfigProps extends PropsWithChildren {
}

const WithUserConfig = async ({children}: WithUserConfigProps) => {
   const session = await auth();

   let user;
   if (!session?.user) user = null;
   else {
      let dbUser = await xprisma.user.findUnique({
         where: { id: session?.user?.id ?? `` },
         include: {
            tags: {
               select: {
                  id: true, name: true,
               },
            },
            experience: {
               select: {
                  id: true, points: true, level: true,
               },
            },
            configuration: true,
            typingRuns: {
               select: {
                  id: true, typedLetters: true, mode: true, metadata: true, totalTimeMilliseconds: true,
               },
            },
         },
      });
      if (!dbUser) user = null;
      else {
         const { updatePassword, verifyPassword, ...rest } = dbUser;
         user = rest;
      }
   }

   return (
      <Fragment>
         <WithInitialState user={user} />
         {children}
      </Fragment>
   );
};

export default WithUserConfig;