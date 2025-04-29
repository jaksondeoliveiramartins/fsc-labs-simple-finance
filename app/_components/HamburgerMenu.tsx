import { AlignJustify, LogOut, Sun, X } from "lucide-react";
import { useState } from "react";

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuIcon = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div onClick={menuIcon} className="flex cursor-pointer justify-end">
        <div
          className={`absolute top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "scale-100 rotate-0 opacity-100"
              : "scale-0 -rotate-90 opacity-0"
          }`}
        >
          <X size={28} className="text-[var(--primary)]" />
        </div>
        <div
          className={`absolute top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "scale-0 rotate-90 opacity-0"
              : "scale-100 rotate-0 opacity-100"
          }`}
        >
          <AlignJustify size={28} className="text-[var(--primary)]" />
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-8 right-0 flex w-full scale-z-95 flex-col gap-0.5 rounded-lg bg-black shadow-lg transition-all duration-300 ease-in-out">
          <div className="flex h-[26px] cursor-pointer items-center justify-end gap-3 rounded-t-lg bg-[#424242] px-4 text-xs text-white hover:bg-[#535353]">
            <span className="opacity-85">Alterar tema</span>
            <Sun size={14} className="text-[var(--primary)]" />
          </div>
          <div className="flex h-[26px] cursor-pointer items-center justify-end gap-3 rounded-b-lg bg-[#424242] px-4 text-xs text-white hover:bg-[#535353]">
            <span className="opacity-85">Desconectar</span>
            <LogOut size={14} className="text-[var(--primary)]" />
          </div>
        </div>
      )}
    </div>
  );
};
export default HamburgerMenu;
