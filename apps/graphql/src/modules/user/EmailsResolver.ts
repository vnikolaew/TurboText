import { Authorized, Ctx, Field, Mutation, ObjectType, Resolver } from "type-graphql";
import { randomBytes } from "crypto";
import { EmailService } from "@repo/emails";
import AccountVerificationEmail from "@repo/emails/src/AccountVerificationEmail";
import { MyContext } from "@types";
import { APP_NAME } from "@consts";
import { xprisma } from "@repo/db";
import moment from "moment";

@ObjectType()
export class SendVerificationEmailResponse {
   @Field(() => Boolean)
   success: boolean = false;

   @Field(() => String, { nullable: true })
   error?: string;
}

@ObjectType()
export class VerifyEmailResponse extends SendVerificationEmailResponse {
}

@Resolver()
@Authorized()
export class EmailsResolver {

   @Mutation(() => SendVerificationEmailResponse)
   async sendVerificationEmail(@Ctx() { prisma, userId }: MyContext): Promise<SendVerificationEmailResponse> {
      if (!userId) return { success: false };

      const token = randomBytes(32).toString(`hex`);
      const verificationToken = await prisma.verificationToken.create({
         data: {
            identifier: crypto.randomUUID(),
            expires: moment(new Date()).add(1, `day`).toDate(),
            token,
         },
      });

      let user = await prisma.user.findUnique({
         where: { id: userId },
      });

      await prisma.user.update({
         where: { id: user!.id },
         data: {
            metadata: {
               ...(user?.metadata || {}),
               verificationToken: verificationToken.identifier,
            },
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

      if (response.success) {
         return {success: true}
      } else {
         return {success: false, error: response.error}
      }
   }

   @Mutation(() => VerifyEmailResponse)
   async verifyEmail(@Ctx() { prisma, userId, req }: MyContext): Promise<VerifyEmailResponse> {
      if (!userId) return {success: false};

      const params = new URL(req.url!).searchParams;

      const token = params.get(`token`);
      if (!token) return { success: false, error: `Token does not exist.` };

      const dbToken = await prisma.verificationToken.findFirst({
         where: {
            token,
            expires: {
               gte: moment(new Date()).toDate(),
            },
         },
      });
      if (!dbToken) return { success: false, error: `Token does not exist.` }

      let user = await prisma.user.findUnique({
         where: { id: userId },
      });

      if (!user || user.metadata?.verificationToken !== dbToken.identifier) {
         return { success: false, error: `Invalid token.` }
      }

      let [newUser, newToken] = await xprisma.$transaction([
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
                  identifier: dbToken.identifier,
                  token: dbToken.token,
               },
            },
         }),
      ]);

      return { success: true }
   }
}