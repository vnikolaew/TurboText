import "reflect-metadata";
import "dotenv/config";

import { xprisma } from "@repo/db";
import { getServer } from "@server";
import * as process from "node:process";
import cors from "cors";
import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import { hostMiddleware } from "@middleware/HostMiddleware";

async function main() {
   const PORT = isNaN(Number.parseInt(process.env.PORT ?? ``)) ? 4000 : +process.env.PORT!;

   const { server, app, httpServer } = await getServer();
   await server.start();

   app.use(`/`, hostMiddleware, cors<cors.CorsRequest>({
      origin: [`http://apollo-next.com:3000`, `http://localhost:3000`, `https://apollo-next.com:3000`],
      credentials: true
   }), express.json(), expressMiddleware(server, {
      context: async ({ req, res }) => ({
         prisma: xprisma,
         headers: req.headers,
         res,
         userId: req.headers?.[`X-User-Id`] as string ?? undefined,
         req,
      }),
   }));
   await new Promise<void>(res => httpServer.listen({ port: PORT }, res));

   console.log(`🚀 Server ready and listening on port ${PORT} at: http://api.apollo-next.com:${PORT}`);
}

main().catch(console.error);
