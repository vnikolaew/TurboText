import { xprisma } from "@repo/db";
import * as http from "node:http";

export interface MyContext {
   prisma: typeof xprisma;
   req: http.IncomingMessage;
   headers?: http.IncomingHttpHeaders;
   complexity?: number
   userId?: string | null
}
