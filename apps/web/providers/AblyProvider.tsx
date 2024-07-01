"use client";
import React, { PropsWithChildren, useEffect } from "react";
import { AblyProvider as AProvider, ChannelProvider } from "ably/react";
import Ably from "ably";
import { usePathname } from "next/navigation";
import { usePrevious } from "@hooks/usePrevious";

export interface AblyProviderProps extends PropsWithChildren {
}

export const CHANEL_NAME = `private-global-chat`;

const AblyProvider = ({ children }: AblyProviderProps) => {
   const pathname = usePathname();
   const prevPathname = usePrevious(pathname);

   useEffect(() => {
      console.log(`Pathname change: `, { pathname, prevPathname });
      (async () => {
         if (prevPathname === `/_chat`) {
            // Handle removal of user from matching queue:
            const res = await fetch(`/api/challenge`, {
               method: `DELETE`,
               credentials: `include`,
            }).then(r => r.json());
            console.log({ res });
         }
      })()
   }, [pathname]);

   return (
      <AProvider client={
         new Ably.Realtime({
            key: process.env.NEXT_PUBLIC_ABLY_API_KEY!,
            clientId: `turbo-text`,
         })}>
         <ChannelProvider channelName={CHANEL_NAME}>
            {children}
         </ChannelProvider>
      </AProvider>
   );
};

export default AblyProvider;