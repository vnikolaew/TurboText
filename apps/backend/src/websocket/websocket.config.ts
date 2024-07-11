import { WebSocketServer } from "ws";
import { Server } from "node:http";
import { messageHandler } from "./channels";

export function wss(server: Server) {
   let wss = new WebSocketServer({
      server,
      perMessageDeflate: {
         zlibDeflateOptions: {
            // See zlib defaults.
            chunkSize: 1024,
            memLevel: 7,
            level: 3,
         },
         zlibInflateOptions: {
            chunkSize: 10 * 1024,
         },
         // Other options settable:
         clientNoContextTakeover: true, // Defaults to negotiated value.
         serverNoContextTakeover: true, // Defaults to negotiated value.
         serverMaxWindowBits: 10, // Defaults to negotiated value.
         // Below options specified as default values.
         concurrencyLimit: 10, // Limits zlib concurrency for perf.
         threshold: 1024, // Size (in bytes) below which messages
         // should not be compressed if context takeover is disabled.
      },
   });

   wss = setupListeners(wss);
   return wss;
}

function setupListeners(wss: WebSocketServer) {
   wss.on(`error`, (error) => {
      console.error(error);
   });
   wss.on(`open`, () => {

      console.log(`New connection`);
   });

   wss.on(`connection`, (ws, message) => {
      const clientId = crypto.randomUUID();
      Object.assign(ws, { clientId });

      ws.send(JSON.stringify({ clientId, initial: true }));

      ws.on(`error`, console.error);

      ws.on(`message`, (data, isBinary) => {
         console.log(`New message: `, data.toString());

         messageHandler(wss, ws, data, isBinary);
      });

      const interval = setInterval(function ping() {
         wss.clients.forEach(function each(ws) {
            if (ws.readyState !== WebSocket.OPEN) return ws.terminate();

            ws.ping();
         });
      }, 30000);

      wss.on(`close`, _ => clearInterval(interval));

   })

   return wss;
}
