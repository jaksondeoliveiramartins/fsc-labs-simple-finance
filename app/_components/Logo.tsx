import Image from "next/image";
import Link from "next/link";

interface LogoTheme {
  isDark: boolean;
}

const Logo = ({ isDark }: LogoTheme) => {
  return (
    <Link href="/">
      <Image
        src={`/images/logo-${isDark ? "dark" : "light"}.svg`}
        width={166}
        height={26}
        alt="Logo Simple Finance"
        priority
      />
    </Link>
  );
};

export default Logo;
