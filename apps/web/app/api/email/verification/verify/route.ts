import { NextRequest, NextResponse } from "next/server";
import { auth } from "@auth";
import { xprisma } from "@repo/db";
import moment from "moment";
import { permanentRedirect } from "next/navigation";

/**
 * A route handler for verifying the user's e-mail.
 * @param req The request object
 * @param ctx
 * @constructor
 */
export async function GET(req: NextRequest, ctx: any) {
   const session = await auth();
   if (!session) return new Response(null, { status: 401 });

   const params = req.nextUrl.searchParams;

   const token = params.get(`token`);
   if (!token) return new Response(null, { status: 400 });

   const dbToken = await xprisma.verificationToken.findFirst({
      where: {
         token,
         expires: {
            gte: moment(new Date()).toDate(),
         },
      },
   });
   if (!dbToken) return NextResponse.json({ success: false, error: `Token does not exist.` }, { status: 400 });

   let user = await xprisma.user.findUnique({ where: { id: session.user!.id } });
   if (!user || user.metadata?.verificationToken !== dbToken.identifier) {
      return NextResponse.json({ success: false, error: `Invalid token.` }, { status: 400 });
   }

   let [newUser, newToken] = await xprisma.$transaction(
      [
         xprisma.user.update({
            where: { id: user.id },
            data: {
               metadata: { ...(user.metadata || {}), verificationToken: null },
               emailVerified: new Date(),
            },
         }),
         xprisma.verificationToken.delete({
            where: {
               identifier_token: {
                  identifier: dbToken.identifier, token: dbToken.token,
               },
            },
         }),
      ],
   );

   permanentRedirect(`${process.env.BASE_URL}/account?verified=true`);
}
