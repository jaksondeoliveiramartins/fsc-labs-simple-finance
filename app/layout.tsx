import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientProvider from "./ClientProvider";
import React from "react";
import { Toaster } from "sonner";
import { AuthContextProvider } from "./contexts/auth";

const inter = Inter({
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Simple Finance",
  description: "FSC - Labs - Simple Finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className}`} cz-shortcut-listen="false">
        <ClientProvider>
          <AuthContextProvider>
            <Toaster />
            <div
              className="max-w-[390px] p-[30px]"
              style={{ margin: "0 auto" }}
            >
              {children}
            </div>
          </AuthContextProvider>
        </ClientProvider>
      </body>
    </html>
  );
}
