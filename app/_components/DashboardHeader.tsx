import { EyeClosedIcon, EyeIcon } from "lucide-react";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";

interface DashboardHeaderProps {
  isShowAmmount: boolean;
  handleShowAmountAction: (showAmount: boolean) => void;
}

const DashboardHeader = ({
  isShowAmmount,
  handleShowAmountAction,
}: DashboardHeaderProps) => {
  return (
    <header className="fixed top-0 z-50 flex h-[100px] w-[440px] items-center justify-between bg-black px-[30px]">
      <nav className="relative flex w-full items-center justify-between">
        <Logo isDark={true} />
        <div>
          <div
            className="mr-11 cursor-pointer"
            onClick={() => handleShowAmountAction(!isShowAmmount)}
          >
            {isShowAmmount ? (
              <EyeIcon stroke={`var(--primary)`} size={22} />
            ) : (
              <EyeClosedIcon stroke={`var(--primary)`} size={22} />
            )}
          </div>
          <HamburgerMenu />
        </div>
      </nav>
    </header>
  );
};

export default DashboardHeader;
