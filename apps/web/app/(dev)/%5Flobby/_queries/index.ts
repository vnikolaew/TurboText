import { User } from "@repo/db";

export async function getUserDetails(userId: string) {
   const res = await fetch(`/api/user/${userId}/details`, {
      credentials: `include`,
   }).then(r => r.json());

   return res?.user as User;
}