import { Sun, Moon } from "lucide-react";
import Logo from "./Logo";
import { useTheme } from "../_contexts/ThemeProvider";

export default function ThemeToggleBar() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="relative mb-[50px] flex w-full items-center justify-between">
      <Logo isDark={isDark} />
      <button
        onClick={toggleTheme}
        className="absolute -top-5 right-2 cursor-pointer rounded-md p-1 transition"
        aria-label="Alternar tema"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
}
