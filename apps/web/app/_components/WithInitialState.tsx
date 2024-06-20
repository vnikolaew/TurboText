import { auth } from "@auth";
import { xprisma } from "@repo/db";
import React from "react";
import HydrateAllAtoms from "@app/_components/HydrateAllAtoms";

export interface WithInitialStateProps {
}

const WithInitialState = async ({}: WithInitialStateProps) => {
   const session = await auth();
   if(!session?.user) return null;

   const user = await xprisma.user.findUnique({
      where: { id: session.user?.id ?? `` },
       include: {
         experience: {
            select: {
               id: true, level: true, points: true
            }
         },
          configuration: {
            select: {
               id: true, userId: true
            }
          }
       }
   });
   if(!user) return null
   const {verifyPassword, updatePassword, ...rest} = user;

   return <HydrateAllAtoms user={rest!} />;
};

export default WithInitialState;