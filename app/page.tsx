"use client";
import React from "react";
import Image from "next/image";
import { Button } from "./_lib/components/ui/button";
import Logo from "./_components/Logo";
import Link from "next/link";
import { ModeTheme } from "./_components/modeTheme";

const Home = () => {
  return (
    <main className="flex w-full flex-col">
      <div className="flex flex-row">
<<<<<<< HEAD
        <Logo className="mb-[50px] " />
        <span>
=======
        <Logo className="mb-[50px] rounded-full	bg-slate-500 font-semibold" />
        <span className="ml-2">
>>>>>>> e80bbab (feat: integrate Logo and ModeTheme components into login and home pages)
          <ModeTheme />
        </span>
      </div>

      <Image
        src="/images/simple-finance-home.svg"
        width={330}
        height={285}
        alt="Simple Finance Home"
        className="mb-[50px]"
      />
      <h2 className="mb-[20px] text-[27px] leading-10 font-semibold text-[#242424]">
        Controle suas finanças pessoais de maneira{" "}
        <span className="text-[#55D462]">fácil e inteligente!</span>
      </h2>
      <p className="mb-[20px] leading-5 font-light text-[#A8A8A8]">
        Organize e planeje suas metas financeiras com nossa plataforma
        simplificada.
      </p>
      <Link href="/signup" passHref>
        <Button
          className="mb-5 min-h-[62px] cursor-pointer bg-[#55D462] py-[22px] hover:bg-green-700"
          asChild
        >
          <span className="block h-full w-full text-center">
            Experimente agora mesmo!
          </span>
        </Button>
      </Link>
      <Link href="/signin" passHref>
        <Button
          className="mb-5 min-h-[62px] cursor-pointer bg-[#242424] py-[22px] hover:bg-stone-900"
          asChild
        >
          <span className="block h-full w-full text-center">
            Entrar na minha conta
          </span>
        </Button>
      </Link>
    </main>
  );
  
};

export default Home;
