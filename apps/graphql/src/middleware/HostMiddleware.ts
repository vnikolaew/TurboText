import express, { Request } from "express";

export const WHITELISTED_DOMAINS = [`localhost`, `127.0.0.1`, `apollo-next.com`, `api.apollo-next.com`];

export function hostMiddleware(req: express.Request, res: express.Response, next: express.NextFunction) {
   let host = req.hostname

   if (!WHITELISTED_DOMAINS.includes(host)) {
      res.status(503)
      return
   }

   next();
}