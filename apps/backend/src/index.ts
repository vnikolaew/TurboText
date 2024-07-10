import { WebSocketServer } from "ws";
import { Server } from "node:http";

const server: Server = require("http").createServer();

const wss = new WebSocketServer({
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


// const app = ExpressConfig();
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`🚀 Server Running on port ${PORT} ...`));
// app.listen(PORT, );