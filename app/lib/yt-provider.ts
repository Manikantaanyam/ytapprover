import type { OAuthConfig, OAuthUserConfig } from "next-auth/providers/oauth";

export interface GoogleProfile extends Record<string, any> {
  aud: string;
  azp: string;
  email: string;
  email_verified: boolean;
  exp: number;
  family_name: string;
  given_name: string;
  hd: string;
  iat: number;
  iss: string;
  jti: string;
  name: string;
  nbf: number;
  picture: string;
  sub: string;
}

export default function YouTubeProvider<P>(
  options: OAuthUserConfig<P>
): OAuthConfig<P> {
  return {
    id: "youtube",
    name: "YouTube",
    type: "oauth",
    wellKnown: "https://accounts.google.com/.well-known/openid-configuration",
    authorization: {
      params: {
        scope:
          "openid profile email https://www.googleapis.com/auth/youtube.upload https://www.googleapis.com/auth/youtube.readonly",
      },
    },
    idToken: true,
    checks: ["pkce", "state"],
    profile(profile: any) {
      return {
        id: profile.sub,
        name: profile.name,
        email: profile.email,
        image: profile.picture,
      };
    },
    options,
  };
}
