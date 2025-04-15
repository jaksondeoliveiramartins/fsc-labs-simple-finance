"use client";

import Link from "next/link";
import Logo from "../_components/Logo";
import { OAuthProviders } from "../_components/OAuthProviders";
import { PasswordInput } from "../_components/PasswordInput";
import { Button } from "../_lib/components/ui/button";
import { Input } from "../_lib/components/ui/input";

export default function SignUp() {
  return (
    <main className="flex h-full flex-col items-center space-y-12">
      <div className="relative space-y-12">
        <Logo className="mb-[50px]" />

        <h1 className="mb-[30px] h-7 text-2xl font-semibold text-white">
          Entrar na sua conta
        </h1>
        <p className="text-sm font-normal">
          Se não possui uma conta, você consegue{" "}
          <Link
            href="/signup"
            className="font-semibold text-green-500 underline decoration-green-500 underline-offset-4 hover:text-green-400"
          >
            criar uma!
          </Link>
        </p>
      </div>

      <div className="flex flex-col justify-between space-y-[50px]">
        <form className="w-full space-y-5">
          <div className="relative">
            <Input
              id="email"
              type="email"
              required
              className="h-[62px] w-full rounded-[12px] border-0 bg-white px-[22px] text-black focus:border-0 focus:ring-0 focus:outline-none"
              placeholder="Email"
            />
          </div>

          <PasswordInput />

          <Button
            type="submit"
            className="h-[62px] w-full cursor-pointer rounded-[12px] bg-[#55D462] text-white transition-colors duration-200 hover:bg-green-700"
          >
            Entrar
          </Button>
        </form>

        <OAuthProviders />
      </div>
    </main>
  );
}
