import "reflect-metadata"
import 'dotenv/config'
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { xprisma } from "@repo/db";
import { buildSchema } from "type-graphql";
import { MyContext } from "./types";
import { UserResolver } from "./modules/user/UserResolver";

async function main() {
   const schema = await buildSchema({
      resolvers: [UserResolver],
      validate: true,
      emitSchemaFile: true,
   });
   const server = new ApolloServer<MyContext>({
      schema
   });

   const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
      context: async () => ({ prisma: xprisma })
   });

   console.log(`🚀 Server ready at: ${url}`);
}

main().catch(console.error);
