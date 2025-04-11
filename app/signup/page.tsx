"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Label } from "../components/ui/Label";

export default function SignUp() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#141414] px-4 pt-8">
      <div className="w-[330px]">
        {/* Header com Logo */}
        <div className="relative h-[120px]">
          <Image
            src="/logo.png"
            alt="Logo"
            width={300}
            height={26}
            priority
            className="absolute -top-15 left-0"
          />

          <div className="mt-16 space-y-6">
            <h1 className="h-[26px] text-[24px] leading-none font-semibold text-white">
              Criar sua conta
            </h1>
            <p className="text-[14px] text-gray-400">
              Se já possui uma conta, você consegue fazer
              <Link
                href="/login"
                className="font-semibold text-green-500 underline decoration-green-500 decoration-2 underline-offset-4 hover:text-green-400"
              >
                Login aqui!
              </Link>
            </p>
          </div>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6">
          <div className="relative">
            <Input
              id="name"
              type="text"
              required
              className="h-[62px] w-full rounded-[12px] border-0 bg-white px-[22px] text-black placeholder:text-transparent focus:border-0 focus:ring-0 focus:outline-none"
              placeholder="Nome"
            />
            <Label
              htmlFor="name"
              className="absolute top-1/2 left-[22px] -translate-y-1/2 text-gray-500 transition-all peer-focus:-translate-y-8 peer-focus:text-xs peer-focus:text-black"
            >
              Nome
            </Label>
          </div>

          <div className="relative">
            <Input
              id="email"
              type="email"
              required
              className="h-[62px] w-full rounded-[12px] border-0 bg-white px-[22px] text-black placeholder:text-transparent focus:border-0 focus:ring-0 focus:outline-none"
              placeholder="Email"
            />
            <Label
              htmlFor="email"
              className="absolute top-1/2 left-[22px] -translate-y-1/2 text-gray-500 transition-all peer-focus:-translate-y-8 peer-focus:text-xs peer-focus:text-black"
            >
              Email
            </Label>
          </div>

          <div className="relative">
            <Input
              id="password"
              type="password"
              required
              className="h-[62px] w-full rounded-[12px] border-0 bg-white px-[22px] text-black placeholder:text-transparent focus:border-0 focus:ring-0 focus:outline-none"
              placeholder="Senha"
            />
            <Label
              htmlFor="password"
              className="absolute top-1/2 left-[22px] -translate-y-1/2 text-gray-500 transition-all peer-focus:-translate-y-8 peer-focus:text-xs peer-focus:text-black"
            >
              Senha
            </Label>
          </div>

          <div className="relative">
            <Input
              id="confirmPassword"
              type="password"
              required
              className="h-[62px] w-full rounded-[12px] border-0 bg-white px-[22px] text-black placeholder:text-transparent focus:border-0 focus:ring-0 focus:outline-none"
              placeholder="Confirme a senha"
            />
            <Label
              htmlFor="confirmPassword"
              className="absolute top-1/2 left-[22px] -translate-y-1/2 text-gray-500 transition-all peer-focus:-translate-y-8 peer-focus:text-xs peer-focus:text-black"
            >
              Confirme a senha
            </Label>
          </div>

          <Button
            type="submit"
            className="h-[62px] w-full rounded-[12px] bg-green-600 text-white hover:bg-green-700"
          >
            Sign Up
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-700" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#141414] px-2 text-gray-400">
                ou continue com
              </span>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <Button
              type="button"
              variant="outline"
              className="h-12 w-12 rounded-full bg-white p-0"
              asChild
            >
              <Link href="/auth/facebook">
                <Image
                  src="/facebook.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </Link>
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-12 w-12 rounded-full bg-white p-0"
              asChild
            >
              <Link href="/auth/apple">
                <Image src="/apple.png" alt="Apple" width={24} height={24} />
              </Link>
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-12 w-12 rounded-full bg-white p-0"
              asChild
            >
              <Link href="/auth/google">
                <Image src="/google.png" alt="Google" width={24} height={24} />
              </Link>
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
