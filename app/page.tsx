// app/page.tsx
"use client";

import { signIn, useSession } from "next-auth/react";

export default function Page() {
  const { data: session } = useSession();
  return (
    <div>
      <button onClick={() => signIn("google")}>Sign In</button>
      <p>hello</p>
      <p>{JSON.stringify(session?.user)}</p>
    </div>
  );
}
