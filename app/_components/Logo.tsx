
import Image from "next/image";
import Link from "next/link";

import React from "react";

interface LogoProps {
  className?: string;
}
  const Logo = ({ className }: LogoProps) => {
    return (
      <Link href="/">
        <Image
          src="/images/logo.svg"
          width={330}
          height={26}
          alt="Logo Simple Finance"
          priority
          className={className}
        />
      </Link>
    );
  };
  
  export default Logo;
