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
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className}`} cz-shortcut-listen="false">
        <div className="max-w-[390px] p-[30px]" style={{ margin: "0 auto" }}>
<<<<<<< HEAD
          {children}
=======
          <ThemeProvider attribute="class" defaultTheme="system">
            {children}
          </ThemeProvider>
>>>>>>> e80bbab (feat: integrate Logo and ModeTheme components into login and home pages)
        </div>
      </body>
    </html>
  );
}
