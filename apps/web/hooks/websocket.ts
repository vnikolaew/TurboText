"use client";

import { clientIdAtom, useWebSocket } from "@providers/WebSocketProvider";
import { useCallback, useEffect } from "react";
import { z } from "zod";
import { useSession } from "next-auth/react";
import { useAtom } from "jotai";

export enum MessageType {
   SEND = 0,
   SUBSCRIBE = 1,
   UNSUBSCRIBE = 2,
   PING = 3
}

const initialSchema = z.object({
   clientId: z.string(), initial: z.literal(true),
});

const messageSchema = z.object({
   clientId: z.string(),
   channelName: z.string(),
   clientName: z.string().nullable(),
   messageName: z.string(),
   // @ts-ignore
   messageType: z.union(Object.entries(MessageType).map(([x, y]) => z.literal(x)) as const),
   timestamp: z.number().optional(),
   extras: z.record(z.string(), z.any()).nullable(),
   data: z.record(z.string(), z.any()).nullable(),
}).passthrough();

export interface IMessage {
   clientId: string,
   clientName?: string;
   channelName: string,
   messageName: string,
   messageType: string,
   timestamp: number;
   extras: Record<string, any>;
   data: Record<string, any>;
}

export function useChannel(channelName: string, callback?: (message: IMessage) => void) {
   let websocket = useWebSocket();
   const [clientId, setClientId] = useAtom(clientIdAtom);
   const session = useSession();

   const publish = useCallback((name: string, message: IMessage) => {
      websocket?.send(JSON.stringify({
         ...message,
         channelName: name,
         clientName: session.data?.user?.name,
         clientId,
      } as IMessage));
   }, [clientId, session.data?.user?.name]);

   useEffect(() => {
      websocket ??= new WebSocket("ws://localhost:5002");
      console.log(`we are in useEffect()`);

      const openHandler = _ => {
         console.log(`Opening websocket...`);
      };

      const messageHandler = (event: any) => {
         console.log(`New unparsed message: `,{ event });
         const eventObj = JSON.parse(event.data);
         const parsed = messageSchema.safeParse(eventObj);

         console.log({ parsed });
         if (parsed.success && parsed.data.channelName === channelName) {
            callback?.(parsed.data as IMessage);
         }

         const initial = initialSchema.safeParse(eventObj);
         if (initial.success) {
            console.log(`New client ID: ${initial.data.clientId}`, websocket);

            const clientId = initial.data.clientId;
            setClientId(clientId);
            const message: IMessage = {
               channelName,
               messageName: `global`,
               messageType: `SUBSCRIBE`,
               clientName: session.data?.user?.name,
               clientId,
               timestamp: Date.now(),
               extras: {},
               data: {},
            };

            if(websocket?.readyState === WebSocket.OPEN) {
               websocket?.send(JSON.stringify(message));
            }
         }
      };

      websocket.addEventListener(`open`, openHandler);
      websocket.addEventListener(`message`, messageHandler);

      return () => {
         websocket.removeEventListener(`open`, openHandler);
         websocket.removeEventListener(`message`, messageHandler);
      };
   }, []);

   return { publish, websocket, clientId };
}