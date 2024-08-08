import express from "express";
import { generateState, OAuth2RequestError } from "arctic";
import { github, lucia } from "@lib/auth";
import { parseCookies, serializeCookie } from "oslo/cookie";
import { db } from "@lib/db";
import { generateId } from "lucia";
import { xprisma } from "@repo/db";

export const githubLoginRouter = express.Router();

githubLoginRouter.get(`/`, async (_, res) => {
   const state = generateState();
   const url = await github.createAuthorizationURL(state);

   console.log({ headersSet: res.headersSent, url });

   res
      .appendHeader(
         "Set-Cookie",
         serializeCookie("github_oauth_state", state, {
            path: "/",
            domain: `.apollo-next.com`,
            secure: process.env.NODE_ENV === "production",
            httpOnly: true,
            maxAge: 60 * 10,
            sameSite: "lax",
         }),
      )
      .redirect(url.toString());
});

githubLoginRouter.get("/callback", async (req, res) => {
   const code = req.query.code?.toString() ?? null;
   const state = req.query.state?.toString() ?? null;
   const storedState = parseCookies(req.headers.cookie ?? "").get("github_oauth_state") ?? null;
   if (!code || !state || !storedState || state !== storedState) {
      console.log(code, state, storedState);
      res.status(400).end();
      return;
   }
   try {
      const tokens = await github.validateAuthorizationCode(code);
      const githubUserResponse = await fetch("https://api.github.com/user", {
         headers: {
            Authorization: `Bearer ${tokens.accessToken}`,
         },
      });
      const githubUser: GitHubUser = await githubUserResponse.json();
      console.log({ githubUser});
      return res.json({ ok: true })

      const existingUser = await xprisma.user.findFirst({
         where: {
            AND: [{
               name: githubUser.login,
            }, {
               account: {
                  provider: `github`,
               }
            }]
         }
      })

      if (existingUser) {
         const session = await lucia.createSession(existingUser.id, {});
         return res
            .appendHeader("Set-Cookie", lucia.createSessionCookie(session.id).serialize())
            .redirect("/");
      }

      const userId = generateId(15);
      db.prepare("INSERT INTO user (id, github_id, username) VALUES (?, ?, ?)").run(
         userId,
         githubUser.id,
         githubUser.login,
      );
      const session = await lucia.createSession(userId, {});
      return res
         .appendHeader("Set-Cookie", lucia.createSessionCookie(session.id).serialize())
         .redirect("/");
   } catch (e) {
      if (e instanceof OAuth2RequestError && e.message === "bad_verification_code") {
         // invalid code
         res.status(400).end();
         return;
      }
      res.status(500).end();
      return;
   }
});

interface GitHubUser {
   id: string;
   login: string;
}