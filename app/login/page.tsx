"use client";
import Image from "next/image";
import * as React from "react";

import { Button } from "../_lib/components/ui/button";
const loginPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden">
      <div className="mx-[30px] mb-[88px] mt-[30px] flex w-[330px] flex-col items-center justify-center">
        <div className="mb-10 flex h-[26px] w-[330px] flex-row space-x-2">
          <Image src="/images/logo.svg" alt="logo" width={330} height={26} />
          <h2 className="text-lg font-semibold">Simple Finance</h2>
        </div>
        <div className="mb-[50px] flex h-[285px] w-[330px] flex-col items-center justify-center">
          <Image
            src="./images/simple-finance-home.svg"
            alt="ilustração"
            width={330}
            height={285}
          />
        </div>
        <h2 className="mb-[20px] text-[27px] font-semibold landing-10 text-[#242424]">
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
        </div>
      
    </main>
  );
};

export default loginPage;
