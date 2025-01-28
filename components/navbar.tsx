"use client";

import { signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { ThemeSwitch } from "./theme-switch";

const Navbar = () => {
  const { data: session } = useSession();

  if (!session) {
    console.log("ehlo");
  }

  return (
    <div className="flex justify-between px-16 sticky top-0 backdrop-filter p-4 shadow-sm items-center border-b border-b-white/40">
      <div className="font-bold text-2xl">ytapprover</div>
      <div className="flex gap-5">
        <ThemeSwitch />
        <Button onClick={() => signOut()}>Sign out</Button>

        <div>
          <img
            className="rounded-full"
            src={session?.user?.image || ""}
            alt=""
            width={35}
            height={35}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
