import { createSafeActionClient, DEFAULT_SERVER_ERROR_MESSAGE } from "next-safe-action";
import { auth } from "@auth";

export class AuthError extends Error {
}

/**
 * An authorized action that checks if the current user session is defined.
 */
export const authorizedAction = createSafeActionClient({
   handleReturnedServerError: (e) => {
      return e instanceof Error ? e?.message : DEFAULT_SERVER_ERROR_MESSAGE;
   },
}).use(async ({ next, ctx }) => {
   const session = await auth();
   if (!session || !session.user) throw new AuthError(`Unauthorized.`);

   return await next({ ctx: { userId: session?.user?.id! } });
});

/**
 * A public action that is accessible by any user / page.
 */
export const publicAction = createSafeActionClient().use(async ({ next }) => {
   const session = await auth();
   return next({
      ctx: {
         userId: session?.user?.id,
      },
   });
});

export type SafeExecuteResponse<T> = {
   success: true; result: T
} | { success: false, error: any }

/**
 * A helper method for wrapping actions in a try / catch.
 */
export const safeExecute = async <T>(action: <T>() => Promise<T>): Promise<SafeExecuteResponse<T>> => {
   try {
      const result: T = await action();
      return { success: true, result };
   } catch (error) {
      return { success: false, error };
   }
};
