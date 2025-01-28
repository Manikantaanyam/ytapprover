import GoogleProvider from "next-auth/providers/google";
import YouTubeProvider from "./yt-provider";
import { Account, AuthOptions, User } from "next-auth";

import prisma from "./db";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "openid profile email",
          access_type: "offline",
          prompt: "consent",
        },
      },
    }),
    YouTubeProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          scope:
            "openid profile email https://www.googleapis.com/auth/youtube.upload https://www.googleapis.com/auth/youtube.readonly", // Initial minimal scopes
          access_type: "offline",
          prompt: "consent",
          redirect_uri: "http://localhost:3000/api/auth/callback/google",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ account, user }: { user: User; account: Account | null }) {
      console.log("account", account);
      console.log("user", user);
      if (!account || !user) {
        return false;
      }
      const data = await prisma?.user.upsert({
        where: { email: user.email! },
        update: {
          accessToken: account?.access_token,
          refreshToken: account?.refresh_token,
          scopes: account.scope,
          expiryDate: new Date(account?.expires_at || ""),
        },
        create: {
          name: user.name!,
          email: user.email!,
          image: user.image,
          accessToken: account?.access_token,
          refreshToken: account?.refresh_token,
          scopes: account.scope,
          expiryDate: new Date(account?.expires_at!),
        },
      });
      return true;
    },
    jwt: ({ token, user }) => {
      if (user) {
        token.userId = user.id;
        token.scopes = user.email;
      }
      return token;
    },
    session: ({ session, token }: any) => {
      if (session && session.user) {
        session.user.id = token.userId;
        session.user.email = token.email;
      }
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
};
