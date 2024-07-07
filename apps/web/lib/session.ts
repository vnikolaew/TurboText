import { Session } from "next-auth";
import { AdapterSession, AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";

export const session = async ({
   session,
   token,
   user,
   ...rest
}: ({
   session: { user: AdapterUser } & AdapterSession;
   user: AdapterUser;
} & {
   session: Session;
   token: JWT;
}) & {
   newSession: any;
   trigger?: "update";
}) => {
   if (session && session.user) {
      //@ts-ignore
      (session.user as any).id = token.id;
   }
   //@ts-ignore
   session.accessToken = token.accessToken;
   //@ts-ignore
   session.idToken = token.idToken;
   //@ts-ignore
   session.refreshToken = token.refreshToken;
   //@ts-ignore
   session.provider = token.provider;

   return session;
};
