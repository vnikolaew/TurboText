"use server";

import bcrypt from "bcryptjs";
import { authorizedAction, publicAction } from "@lib/actions";
import { z } from "zod";
import { xprisma } from "@repo/db";
import moment from "moment";
import { EmailService } from "@repo/emails";
import ResetPasswordWithCodeEmail from "@repo/emails/src/ResetPasswordWithCodeEmail";
import { APP_NAME } from "@config/site";
import { MAGIC_SIGNIN, signIn } from "@auth";
import { revalidatePath } from "next/cache";

// Function to generate a 4-digit reset code
function generateResetCode() {
   return Math.floor(1000 + Math.random() * 9000);
}

export const sendEmailResetCode = publicAction
   .schema(z.object({ email: z.string() }))
   .action(async ({ ctx: { userId }, parsedInput: { email } }) => {
      const user = await xprisma.user.findUnique({
         where: {
            id: userId,
            email,
         },
      });
      if (!user) return { success: false, error: "User not found or email is incorrect" };

      const resetCode = {
         code: generateResetCode(),
         expirationDate: moment(new Date()).add(1, `hour`).toDate().toISOString(),
      };

      // Send actual email:
      const res = await new EmailService().sendMail({
         to: user.email,
         subject: `Reset your password`,
         react: ResetPasswordWithCodeEmail({
            code: resetCode.code.toString()!,
            username: user.name,
            appName: APP_NAME,
         }),
      });
      if (!res.success) return { success: false, error: res.error };

      await xprisma.user.update({
         where: { id: user.id },
         data: {
            metadata: {
               ...(user.metadata ?? {}),
               resetCode,
            },
         },
      });

      return { success: true, resetCode };
   });

export const submitEmailResetCode = publicAction
   .schema(z.object({ code: z.number(), email: z.string() }))
   .action(async ({ parsedInput: { code, email } }) => {
      const user = await xprisma.user.findUnique({
         where: {
            email,
            metadata: {
               path: ["resetCode", "code"],
               equals: code,
            },
         },
      });
      if (!user) return { success: false, error: "User not found or code is incorrect" };

      if (user.metadata?.resetCode?.code !== code
         || moment(user.metadata?.resetCode?.expirationDate).toDate().getTime() < new Date().getTime()) return {
         success: false,
         error: "Invalid code or code has expired.",
      };

      return { success: true, resetCode: user.metadata?.resetCode };
   });


export const resendEmailResetCode = publicAction
   .schema(z.object({}))
   .action(async ({ parsedInput: {} }) => {
      const user = await xprisma.user.findUnique({
         where: {
            id: ``,
         },
      });
      if (!user) return { success: false, error: "User not found." };

      // Send actual email:
      const res = await new EmailService().sendMail({
         to: user.email,
         subject: `Reset your password`,
         react: ResetPasswordWithCodeEmail({
            code: user.metadata?.resetCode?.code?.toString(),
            username: user.name,
            appName: APP_NAME,
         }),
      });
      if (!res.success) return { success: false, error: res.error };

      return { success: true, resetCode: user.metadata?.resetCode };
   });

export const resetPassword = publicAction
   .schema(z.object({
      newPassword: z.string(),
      confirmPassword: z.string(),
      code: z.number(),
      email: z.string(),
   }))
   .action(async ({ parsedInput: { newPassword, confirmPassword, code, email } }) => {
      let user = await xprisma.user.findUnique({
         where: {
            email,
         },
      });
      if (!user) return { success: false, error: "User not found." };

      if (user.metadata?.resetCode?.code !== code
         || moment(user.metadata?.resetCode?.expirationDate).toDate().getTime() < new Date().getTime()) return {
         success: false,
         error: "Invalid code or code has expired.",
      };

      if (newPassword !== confirmPassword) return {
         success: false,
         error: "Passwords do not match.",
      };

      const passwordHash = bcrypt.hashSync(newPassword, 10);
      user = await xprisma.user.update({
         where: { id: user.id },
         data: {
            password: passwordHash, metadata: {
               ...(user.metadata ?? {}),
               resetCode: null,
            },
         },
      });

      const { updatePassword, verifyPassword, ...rest } = user;
      return { success: true, user: rest };
   });


export const magicSignIn = publicAction
   .schema(z.object({
      email: z.string(),
   }))
   .action(async ({ parsedInput: { email } }) => {
      let user = await xprisma.user.findUnique({
         where: {
            email,
         },
      });
      if (!user) return { success: false, error: "User not found." };

      try {
         await signIn(`credentials`, {
            email,
            password: user.password,
            type: MAGIC_SIGNIN,
            username: user.name,
            redirect: false,
            rememberMe: true,
            callbackUrl: `/`,
         });

         revalidatePath(`/`)
         return { success: true };
      } catch (err) {
         console.error({ err });
         return { success: false, error: `Something went wrong: ${err}` };
      }
   });

