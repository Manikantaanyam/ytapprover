// app/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Page() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.push("/dashboard");
  }

  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh]">
      <div>
        <Button
          onClick={() => signIn("google")}
          className="bg-[#ff0000] font-bold text-white"
        >
          Sigin with Google
        </Button>
      </div>
    </div>
  );
}
