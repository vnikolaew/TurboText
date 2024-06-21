import { auth } from "@auth";
import { xprisma } from "@repo/db";
import { randomBytes } from "crypto";
import moment from "moment";
import { NextRequest, NextResponse } from "next/server";
import { EmailService } from "@repo/emails";
import AccountVerificationEmail from "@repo/emails/src/AccountVerificationEmail";
import { APP_NAME } from "@config/site";

/**
 * A route handler for sending a verification e-mail to the user.
 * @param req
 * @param ctx
 * @constructor
 */
export async function POST(req: NextRequest, ctx: any) {
   const session = await auth();
   if (!session) return new Response(null, { status: 401 });

   const token = randomBytes(32).toString(`hex`);
   const verificationToken = await xprisma.verificationToken.create({
      data: {
         identifier: crypto.randomUUID(), expires: moment(new Date()).add(1, `day`).toDate(),
         token,
      },
   });

   let user = await xprisma.user.findUnique({ where: { id: session.user!.id } });
   await xprisma.user.update({
      where: { id: user!.id },
      data: {
         metadata: { ...(user?.metadata || {}), verificationToken: verificationToken.identifier },
      },
   });

   const emailService = new EmailService();

   // Send the actual confirmation e-mail
   const response = await emailService.sendMail({
      to: user!.email,
      react: AccountVerificationEmail({
         verificationToken: verificationToken.token,
         confirmationUrl: `${process.env.BASE_URL}/api/email/verification/verify?token=${verificationToken.token}`,
         appName: APP_NAME,
         username: user!.name!,
      }),
      subject: `${APP_NAME} | Verify your e-mail address`,
   });

   if(response.success) {
      return NextResponse.json({ ok: true }, { status: 200 });
   } else {
      return NextResponse.json({ ok: false, error: response.error }, { status: 500 });
   }
}