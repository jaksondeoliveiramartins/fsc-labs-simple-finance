"use client";

import Link from "next/link";
import { OAuthProviders } from "../_components/OAuthProviders";
import { Button } from "../_lib/components/ui/button";
import { Input } from "../_lib/components/ui/input";
import { useAuthContext } from "../_contexts/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "../_forms/schemas/user";
import { z } from "zod";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import ThemeToggleBar from "../_components/ThemeToggle";

type LoginFormData = z.infer<typeof loginFormSchema>;

export default function SignIn() {
  const { login, isInitializing } = useAuthContext();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema), // Integração com o zod
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data);
    } catch (error) {
      console.error("Erro ao realizar o login:", error);
    }
  };

  if (isInitializing) {
    return <div>Carregando...</div>;
  }

  return (
    <main className="flex h-full flex-col items-center space-y-12">
      <div className="relative space-y-12">
        <ThemeToggleBar />

        <h1 className="mb-[30px] h-7 text-2xl font-semibold">
          Entrar na sua conta
        </h1>
        <p className="text-sm font-normal">
          Se não possui uma conta, você consegue{" "}
          <Link
            href="/signup"
            className="font-semibold text-[var(--primary)] underline decoration-[var(--primary)] underline-offset-4"
          >
            criar uma!
          </Link>
        </p>
      </div>

      <div className="flex w-full flex-col justify-between space-y-[50px]">
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="relative">
            <Input
              id="email"
              type="email"
              {...register("email")}
              className="h-[62px] w-full rounded-[12px] border-0 bg-[var(--input)] px-[22px] text-[var(--input-foreground)] focus:border-0 focus:ring-0 focus:outline-none"
              placeholder="Email"
            />
            {errors.email && (
              <p className="p-1 text-sm text-[var(--danger)]">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password")}
                className="h-[62px] w-full rounded-[12px] border-0 bg-[var(--input)] px-[22px] text-[var(--input-foreground)] focus:border-0 focus:ring-0 focus:outline-none"
                placeholder="Senha"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-[22px] -translate-y-1/2 text-[var(--muted-foreground)]"
              >
                {showPassword ? (
                  <Eye className="h-4 w-4" />
                ) : (
                  <EyeOff className="h-4 w-4" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="p-1 text-sm text-[var(--danger)]">
                {errors.password.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="min-h-[62px] w-full cursor-pointer rounded-[12px] bg-[var(--primary-button)] py-[22px] hover:bg-[var(--primary-button-hover)]"
          >
            Entrar
          </Button>
        </form>

        <OAuthProviders />
      </div>
    </main>
  );
}
