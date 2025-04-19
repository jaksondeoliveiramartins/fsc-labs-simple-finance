"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function ThemeToggleBar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const hasDark = document.body.classList.contains("dark");
    setIsDark(hasDark);
  }, []);

  const toggleTheme = () => {
    const body = document.body;
    if (isDark) {
      body.classList.remove("dark");
    } else {
      body.classList.add("dark");
    }
    setIsDark(!isDark);
  };

  return (
    <div className="mb-[50px] flex w-full items-center justify-between">
      <Logo isDark={isDark} />

      <button
        onClick={toggleTheme}
        className="fixed top-2 right-2 cursor-pointer rounded-md p-1 transition"
        aria-label="Alternar tema"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
}
