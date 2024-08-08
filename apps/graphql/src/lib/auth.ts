import { Lucia } from "lucia";
import { BetterSqlite3Adapter } from '@lucia-auth/adapter-sqlite';
import { db } from "./db";

import type { DatabaseUser } from "./db";
import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { xprisma } from "@repo/db";

// import { webcrypto } from "crypto";
// globalThis.crypto = webcrypto as Crypto;

const adapter = new BetterSqlite3Adapter(db, {
   user: "user",
   session: "session"
});
const prismaAdapter = new PrismaAdapter(xprisma.session, xprisma.user)

export const lucia = new Lucia(prismaAdapter, {
   sessionCookie: {
      attributes: {
         secure: false,
         sameSite: `lax`,
      },
   },
   getUserAttributes: (attributes) => {
      return {
         username: attributes.username,
         id: attributes.id
      };
   }
});

declare module "lucia" {
   interface Register {
      Lucia: typeof lucia;
      DatabaseUserAttributes: DatabaseUser;
   }
}