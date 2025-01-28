"use client";
import { signIn, useSession } from "next-auth/react";
export default function page() {
  const { data: session } = useSession();

  return (
    <div>
      <button onClick={() => signIn("youtube")}>Link Gmail and YouTube</button>
      <p>hello</p>
      <p>{JSON.stringify(session?.user)}</p>
      <p>{session?.user?.email}</p>
    </div>
  );
}
