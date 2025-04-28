import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";

const DashboardHeader = () => {
  return (
    <header className="fixed top-0 z-50 flex h-[100px] w-[440px] items-center justify-between bg-black px-[30px]">
      <nav className="relative flex w-full items-center justify-between">
        <Logo isDark={true} />
        <HamburgerMenu />
      </nav>
    </header>
  );
};

export default DashboardHeader;
