import { Server } from "node:http";
import ExpressConfig from "./express.config";
import { wss } from "./websocket/websocket.config";

async function main() {
   const app = ExpressConfig();

   const server: Server = require("http").createServer(app);
   const ws = wss(server);

   const PORT = process.env.PORT || 5002;
   server.listen(PORT, () => console.log(`🚀 Server Running on port ${PORT} ... `));
}

main().catch(console.error)