"use client";

import { useWebSocket } from "@providers/WebSocketProvider";
import { useCallback, useEffect, useState } from "react";
import { z } from "zod";

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
   const [clientId, setClientId] = useState(``);

   const publish = useCallback((name: string, message: IMessage) => {
      websocket.send(JSON.stringify({
         ...message,
         channelName: name,
         clientId
      } as IMessage));
   }, [clientId]);

   useEffect(() => {
      const openHandler = _ => {
         if(!clientId.length) return;

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
      };

      const messageHandler = (event: any) => {
         const eventObj = JSON.parse(event.data)
         const parsed = messageSchema.safeParse(eventObj);

         if (parsed.success) {
            callback(parsed.data as IMessage);
         }

         const initial = initialSchema.safeParse(eventObj);
         if (initial.success) {
            setClientId(initial.data.clientId)
         }
      };

      websocket.addEventListener(`open`, openHandler);
      websocket.addEventListener(`message`, messageHandler);

      return () => {
         websocket.removeEventListener(`open`, openHandler);
         websocket.removeEventListener(`message`, messageHandler);
      };
   }, [clientId]);

   return { publish, websocket };
}