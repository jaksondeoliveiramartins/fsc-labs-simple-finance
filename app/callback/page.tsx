"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "../_contexts/auth";

export default function Callback() {
  const router = useRouter();
  const { signInFromCallback } = useAuthContext();

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const accessToken = params.get("access_token");

    if (accessToken) {
      console.log("Access Token:", accessToken);
      window.location.hash = "";
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/callback?access_token=${accessToken}`,
      )
        .then((res) => res.json())
        .then(async (data) => {
          await signInFromCallback({
            accessToken: data.tokens.accessToken,
            refreshToken: data.tokens.refreshToken,
          });
          router.push("/dashboard");
          router.push("/dashboard");
        })
        .catch((err) => {
          console.error("Erro ao autenticar com backend:", err);
          router.push("/signin");
        });
    } else {
      router.push("/");
    }
  }, [router, signInFromCallback]);

  return <p>Autenticando...</p>;
}
