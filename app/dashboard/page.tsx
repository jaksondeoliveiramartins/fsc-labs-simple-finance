"use client";

import { useAuthContext } from "../_contexts/auth";
import { Button } from "../_lib/components/ui/button";
import { useRouter } from "next/navigation";
export default function Dashboard() {
  const { signOut } = useAuthContext();
  const router = useRouter();

  const handleSignOut = () => {
    signOut();
    router.push("/signin");
  };

  return (
    <div className="flex flex-col items-center">
      <h1>Dashboard</h1>
      <span>Página em construção!</span>
      <Button onClick={handleSignOut}>Sair</Button>
    </div>
  );
}
