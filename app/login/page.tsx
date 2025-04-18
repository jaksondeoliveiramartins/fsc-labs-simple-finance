"use client";
import Image from "next/image";
import * as React from "react";

import { Button } from "../_lib/components/ui/button";
import { ModeTheme } from "../_components/modeTheme";
import Logo from "../_components/Logo";
const loginPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <header>
      <div className="flex flex-row">
        <Logo className="mb-[50px] rounded-full font-semibold" />
        <span><ModeTheme/></span>
      </div>
        </header>
      
      
        
      <div className="mb-[50px] flex h-[285px] w-[330px] flex-col items-center justify-center">
        <Image
          src="./images/simple-finance-home.svg"
          alt="ilustração"
          width={330}
          height={285}
        />
      </div>
      <h2 className="landing-10 mb-[20px] text-[27px] font-semibold text-[#242424]">
        Controle suas finanças pessoais de maneira{" "}
        <span className="text-[#55D462]">fácil e inteligente!</span>
      </h2>
      <p className="mb-[20px] leading-5 font-light text-[#A8A8A8]">
        Organize e planeje suas metas financeiras com nossa plataforma
        simplificada.
      </p>
      <Button
        type="submit"
        className="mt-[20px] h-[62px] w-full rounded-[12px] bg-green-600 text-white hover:bg-green-700"
      >
        Experimente agora mesmo!
      </Button>
      <Button
        type="submit"
        className="mt-[20px] h-[62px] w-full rounded-[12px] bg-gray-600 text-white hover:bg-gray-700"
      >
        Entrar na minha conta
      </Button>
    </main>
  );
};

export default loginPage;
