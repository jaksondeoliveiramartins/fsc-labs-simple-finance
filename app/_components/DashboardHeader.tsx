import Logo from "./Logo";
import { LuAlignJustify } from "react-icons/lu";

const DashboardHeader = () => {
  return (
    <div className="fixed top-0 left-0 z-50 flex h-[100px] w-screen items-center justify-between bg-black p-7.5">
      <div className="">
        <Logo isDark={true} />
      </div>
      <div>
        <LuAlignJustify size={26} style={{ color: "#55D462" }} />
      </div>
    </div>
  );
};

export default DashboardHeader;
