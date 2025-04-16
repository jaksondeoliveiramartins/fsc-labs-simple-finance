import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

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
  children: ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="pt-BR">
      <body className={`${inter.className}`} cz-shortcut-listen="false">
        <QueryClientProvider client={queryClient}>
          <div className="max-w-[390px] p-[30px]" style={{ margin: "0 auto" }}>
            {children}
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
