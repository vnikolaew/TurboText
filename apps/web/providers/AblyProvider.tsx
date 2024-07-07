"use client";
import { otherUserDataLoadingAtom } from "@atoms/user";
import { usePrevious } from "@hooks/usePrevious";
import Ably from "ably";
import { AblyProvider as AProvider, ChannelProvider } from "ably/react";
import { useSetAtom } from "jotai";
import { usePathname } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";

export interface AblyProviderProps extends PropsWithChildren {}

export const CHANEL_NAME = `private-global-chat`;

const AblyProvider = ({ children }: AblyProviderProps) => {
   const pathname = usePathname();
   const prevPathname = usePrevious(pathname);
   const setOtherUserLoading = useSetAtom(otherUserDataLoadingAtom);

   useEffect(() => {
      if (prevPathname?.startsWith(`/profile`)) {
         console.log({ prevPathname, pathname });
         console.log({ setOtherUserLoading });
         setOtherUserLoading?.(false);
      }

      (async () => {
         if (prevPathname === `/_chat`) {
            // Handle removal of user from matching queue:
            const res = await fetch(`/api/challenge`, {
               method: `DELETE`,
               credentials: `include`,
            }).then((r) => r.json());
         }
      })();
   }, [pathname]);

   return (
      <AProvider
         client={
            new Ably.Realtime({
               key: process.env.NEXT_PUBLIC_ABLY_API_KEY!,
               clientId: `turbo-text`,
            })
         }
      >
         <ChannelProvider channelName={CHANEL_NAME}>{children}</ChannelProvider>
      </AProvider>
   );
};

export default AblyProvider;
