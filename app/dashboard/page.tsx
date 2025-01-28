"use client";
import Navbar from "@/components/navbar";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function page() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push("http://localhost:3000/");
  }
  return <div className="">dashboard</div>;
}
