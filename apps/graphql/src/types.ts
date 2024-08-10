import { xprisma } from "@repo/db";
import express from "express";
import * as http from "node:http";

export interface MyContext {
   prisma: typeof xprisma;
   req: http.IncomingMessage;
   res: express.Response,
   headers?: http.IncomingHttpHeaders;
   complexity?: number
   userId?: string | null
   sessionId?: string | null
}

export type Nullable<T> = T | null
