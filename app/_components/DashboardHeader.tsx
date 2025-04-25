import { AlignJustify, X, Sun, LogOut } from "lucide-react";
import Logo from "./Logo";
import { useState } from "react";

const DashboardHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuIcon = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`fixed top-0 z-50 flex h-[100px] w-[440px] justify-between bg-black px-7.5 py-3.5 ${isMenuOpen ? "flex-col" : "items-center"}`}
    >
      <div className="flex h-[25px] w-full items-center justify-between">
        <Logo isDark={true} />
        <div onClick={menuIcon} className="relative h-[28px] w-[28px]">
          <div
            className={`absolute top-0 left-0 transition-all duration-200 ease-in-out ${
              isMenuOpen
                ? "scale-100 rotate-0 opacity-100"
                : "scale-0 rotate-[-90deg] opacity-0"
            }`}
          >
            <X size={28} className="text-[var(--primary)]" />
          </div>

          <div
            className={`absolute top-0 left-0 transition-all duration-200 ease-in-out ${
              isMenuOpen
                ? "scale-0 rotate-[90deg] opacity-0"
                : "scale-100 rotate-0 opacity-100"
            }`}
          >
            <AlignJustify size={28} className="text-[var(--primary)]" />
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="flex h-[100px] w-[100%] flex-col justify-center overflow-hidden px-3 py-2">
          <div className="flex flex-col gap-0.5">
            <div className="flex h-5 w-[100%] items-center justify-end gap-3 rounded-t-lg bg-[#424242] px-4 text-xs text-white">
              <span className="opacity-85">Alterar tema</span>
              <Sun size={14} className="text-[var(--primary)]" />
            </div>
            <div className="flex h-5 items-center justify-end gap-3 rounded-b-lg bg-[#424242] px-4 text-xs text-white">
              <span className="opacity-85">Desconectar</span>
              <LogOut size={14} className="text-[var(--primary)]" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardHeader;
