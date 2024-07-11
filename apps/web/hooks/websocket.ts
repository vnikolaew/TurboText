"use client";

import { useWebSocket } from "@providers/WebSocketProvider";
import { useCallback, useEffect } from "react";
import { z } from "zod";

const messageSchema = z.object({
   clientId: z.string(),
   channelName: z.string(),
   messageName: z.string(),
   // @ts-ignore
   messageType: z.union(Object.entries(MessageType).map(([x, y]) => z.literal(x)) as const),
   timestamp: z.number().optional(),
   extras: z.record(z.string(), z.any()).nullable(),
   data: z.record(z.string(), z.any()).nullable(),
}).passthrough();

export interface IMessage {
   clientId: string,
   channelName: string,
   messageName: string,
   messageType: string,
   timestamp: number;
   extras: Record<string, any>;
   data: Record<string, any>;
}

export function useChannel(channelName: string, callback: (message: IMessage) => void) {
   const websocket = useWebSocket();
   const clientId = ``;

   const publish = useCallback((name: string, message: IMessage) => {
      websocket.send(JSON.stringify({
         ...message,
         channelName: name,
      } as IMessage));
   }, []);

   useEffect(() => {
      const message: IMessage = {
         channelName,
         messageName: `global`,
         messageType: `SUBSCRIBE`,
         clientId,
         timestamp: Date.now(),
         extras: {},
         data: {},
      };

      websocket.send(JSON.stringify(message));

      websocket.addEventListener(`message`, (event) => {
         const parsed = messageSchema.safeParse(event.data);
         if (parsed.success) {
            callback(parsed.data as IMessage);
         }
      });
   }, []);

   return { publish, websocket }
}