import { Lucia } from "lucia";
import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";
import { Models } from "@repo/db";
import { db } from "./db";

import type { DatabaseUser } from "./db";
import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { xprisma } from "@repo/db";
import crypto from "crypto";
import moment from "moment/moment";
import { GitHub } from "arctic";
import * as process from "node:process";

// import { webcrypto } from "crypto";
// globalThis.crypto = webcrypto as Crypto;

export const github = new GitHub(process.env.GH_CLIENT_ID!, process.env.GH_CLIENT_SECRET!);
const adapter = new BetterSqlite3Adapter(db, {
   user: "user",
   session: "session",
});
const prismaAdapter = new PrismaAdapter(xprisma.session, xprisma.user);

export const lucia = new Lucia(prismaAdapter, {
   sessionCookie: {
      attributes: {
         secure: false,
         sameSite: `lax`,
      },
   },
   getUserAttributes: (attributes) => {
      return {
         username: attributes.username ?? attributes.name,
         id: attributes.id,
      };
   },
});

declare module "lucia" {
   interface Register {
      Lucia: typeof lucia;
      DatabaseUserAttributes: DatabaseUser;
   }
}

export async function getUserCookie(user: Partial<Models.User>) {
   const session = await lucia.createSession(user!.id!, { sessionToken: crypto.randomUUID() });

   const cookie = lucia.createSessionCookie(session.id);
   cookie.attributes.httpOnly = false;
   cookie.attributes.sameSite = `lax`;

   const serializedCookie = `${cookie.name}=${encodeURIComponent(cookie.value)}; Max-Age=${cookie.attributes.maxAge}; Domain=.apollo-next.com; Expires=${moment().add(cookie.attributes.maxAge, `seconds`).format(`ddd, DD MMM YYYY HH:mm:ss [GMT]`)}; Path=${cookie.attributes.path!}; SameSite=${cookie.attributes.sameSite} ${cookie.attributes.httpOnly ? `;HttpOnly` : ``}`;
   return serializedCookie;
}