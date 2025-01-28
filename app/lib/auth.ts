import GoogleProvider from "next-auth/providers/google";
import YouTubeProvider from "./yt-provider";
import { AuthOptions } from "next-auth";

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
