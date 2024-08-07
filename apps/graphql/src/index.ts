import "reflect-metadata";
import "dotenv/config";

import { startStandaloneServer } from "@apollo/server/standalone";
import { xprisma } from "@repo/db";
import { getServer } from "@server";
import * as process from "node:process";

async function main() {
   const PORT = isNaN(Number.parseInt(process.env.PORT ?? ``)) ? 4000 : +process.env.PORT!;

   const server = await getServer()
   const { url } = await startStandaloneServer(server, {
      listen: { port: PORT },
      context: async ({ req, res }) => ({ prisma: xprisma, headers: req.headers, userId: req.headers?.[`X-User-Id`] as string ?? undefined, req  }),
   });

   console.log(`🚀 Server ready and listening on port ${PORT} at: ${url}`);
}

main().catch(console.error);
