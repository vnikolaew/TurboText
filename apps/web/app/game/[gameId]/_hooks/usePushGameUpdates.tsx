"use client";

import { EventType } from "@app/game/[gameId]/_hooks/useTypingGame";
import { currentCharIndexAtom } from "@atoms/editor";
import { CHANEL_NAME } from "@providers/AblyProvider";
import { useChannel } from "ably/react";
import { useAtomValue } from "jotai";
import { useSession } from "next-auth/react";
import { useCallback, useEffect, useRef } from "react";

export function usePushGameUpdates(gameId: string, interval: number) {
   const intervalRef = useRef<NodeJS.Timeout>(null!);
   const currCharIndex = useAtomValue(currentCharIndexAtom);
   const session = useSession();

   const { channel } = useChannel(CHANEL_NAME, async (message) => {
      if (message.data.userId === session.data?.user?.id) return;
      if (
         message.data.type === EventType.ChallengeStopped ||
         message.data.type === EventType.ChallengeFinished
      ) {
         await channel.detach();
      }

      console.log({ message });
   });

   const update = useCallback(async () => {
      await channel.publish(EventType.GameUpdate, {
         userId: session.data?.user?.id,
         gameId,
         charIndex: currCharIndex,
      });
   }, [currCharIndex, session, gameId]);

   useEffect(() => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(update, interval ?? 2000);

      return () => {
         if (intervalRef.current) clearInterval(intervalRef.current);
      };
   }, [update, interval]);

   const start = useCallback(() => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(update, interval ?? 2000);
      console.log(`Starting push updates interval.`);
   }, [update, interval]);

   const end = useCallback(() => {
      console.log(`Current interval: `, intervalRef.current);
      if (intervalRef.current) {
         console.log(`Ending push updates interval.`);
         clearInterval(intervalRef.current);
      }
   }, []);

   return { start, end };
}
