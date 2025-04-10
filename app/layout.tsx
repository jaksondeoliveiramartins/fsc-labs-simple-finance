import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body
        className={`${inter.className} ${inter.className} antialiased`}
        cz-shortcut-listen="false"
      >
        {children}
      </body>
    </html>
  );
}
