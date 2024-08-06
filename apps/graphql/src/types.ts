import { xprisma } from "@repo/db";

export interface MyContext {
   prisma: typeof xprisma;
}
