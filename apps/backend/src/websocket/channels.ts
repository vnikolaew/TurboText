import { RawData, WebSocketServer, WebSocket } from "ws";
import { z } from "zod";

export enum MessageType {
   SEND = 0,
   SUBSCRIBE = 1,
   UNSUBSCRIBE = 2,
   PING = 3
}

const messageSchema = z.object({
   clientId: z.string(),
   channelName: z.string(),
   messageName: z.string(),
   // @ts-ignore
   messageType: z.union(Object.entries(MessageType).map(([x, y]) => z.literal(x)) as const),
   timestamp: z.number().optional(),
   extras: z.record(z.string(), z.any()).nullable(),
   data: z.record(z.string(), z.any()).nullable(),
});

/**
 * A map of channel name to a set of unique client IDs currently subscribed to it.
 */
const WEBSOCKET_CHANNELS: Map<string, Set<string>> = new Map<string, Set<string>>();

export const messageHandler = (wss: WebSocketServer, ws: WebSocket, data: RawData, isBinary: boolean) => {
   console.log(WEBSOCKET_CHANNELS, [...wss.clients].map(c => c["clientId"]));

   const body = messageSchema.safeParse(JSON.parse(data.toString()));
   if (!body.success) {
      ws.send(JSON.stringify({ error: body.error }));
      console.log({ errors: body.error });
      return;
   }

   const dataParsed = body.data;
   switch (dataParsed.messageType) {
      case `SEND`:
         if (!WEBSOCKET_CHANNELS.has(dataParsed.channelName)) {
            WEBSOCKET_CHANNELS.set(dataParsed.channelName, new Set<string>());
         }

         WEBSOCKET_CHANNELS.get(dataParsed.channelName)?.add(dataParsed.clientId);
         const broadcastTo = WEBSOCKET_CHANNELS.get(dataParsed.channelName);

         const clients = Array
            .from(wss.clients)
            .filter(c => {
               return broadcastTo.has(c["clientId"]);
            });

         console.log({ clients });
         clients
            .forEach(client => {
               const data = Buffer.from(JSON.stringify({ ...dataParsed }))
               client.send(data, { binary: isBinary });
            });

         break;
      case `SUBSCRIBE`:
         if (!WEBSOCKET_CHANNELS.has(dataParsed.channelName)) {
            WEBSOCKET_CHANNELS.set(dataParsed.channelName, new Set<string>());
         }

         WEBSOCKET_CHANNELS.get(dataParsed.channelName)?.add(dataParsed.clientId);
         break
      case `UNSUBSCRIBE`:
         if (!WEBSOCKET_CHANNELS.has(dataParsed.channelName)) return

         WEBSOCKET_CHANNELS.get(dataParsed.channelName)?.delete(dataParsed.clientId);
         break
      case `PING`:
         break;
      default:
         break;
   }
};