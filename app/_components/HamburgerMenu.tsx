import { AlignJustify, LogOut, Sun, User2, X } from "lucide-react";
import { useState } from "react";
import { useAuthContext } from "../_contexts/auth";
import { useRouter } from "next/navigation";

const HamburgerMenu = () => {
  const router = useRouter();
  const { signOut } = useAuthContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = () => {
    signOut();
    router.push("/signin");
  };

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
        <div className="absolute top-8 right-0 flex w-full scale-z-95 flex-col gap-0.5 rounded-lg bg-black/20 shadow-lg backdrop-blur-md transition-all duration-300 ease-in-out">
          <div className="flex h-9 cursor-pointer items-center justify-end gap-3 rounded-t-lg bg-[#424242]/50 px-4 text-sm text-white backdrop-blur-md hover:bg-[#535353]">
            <span className="opacity-85">Minha conta</span>
            <User2 size={16} className="text-[var(--primary)]" />
          </div>
          <div className="flex h-9 cursor-pointer items-center justify-end gap-3 bg-[#424242]/50 px-4 text-sm text-white backdrop-blur-md hover:bg-[#535353]">
            <span className="opacity-85">Alterar tema</span>
            <Sun size={16} className="text-[var(--primary)]" />
          </div>
          <div
            className="flex h-9 cursor-pointer items-center justify-end gap-3 rounded-b-lg bg-[#424242]/50 px-4 text-sm text-white backdrop-blur-md hover:bg-[#535353]"
            onClick={handleSignOut}
          >
            <span className="opacity-85">Desconectar</span>
            <LogOut size={16} className="text-[var(--primary)]" />
          </div>
        </div>
      )}
    </div>
  );
};
export default HamburgerMenu;
