import Link from "next/link";
import { Button } from "../_lib/components/ui/button";
import Image from "next/image";

export function OAuthProviders() {
  return (
    <div className="flex w-full flex-col gap-12">
      <div className="flex w-full items-center text-xs uppercase">
        <div className="flex-grow border-t" />
        <span className="px-4">ou continue com</span>
        <div className="flex-grow border-t" />
      </div>

      <div className="flex justify-center space-x-4">
        <Button
          type="button"
          variant="outline"
          className="w-32 rounded-xl border-0 bg-gradient-to-b from-[#95daff] to-[#175bb3] p-0"
          asChild
        >
          <Link
            href={`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login/facebook`}
          >
            <Image
              src="/images/facebook.svg"
              alt="Facebook"
              width={26}
              height={26}
            />
            <span className="text-[#F3F3F3]">Facebook</span>
          </Link>
        </Button>

        <Button
          type="button"
          variant="outline"
          className="w-32 rounded-xl border-0 bg-gradient-to-b from-[#e7e7e7] to-[#e0e0e0] p-0"
          asChild
        >
          <Link
            href={`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login/google`}
          >
            <Image
              src="/images/google.svg"
              alt="Google"
              width={26}
              height={26}
            />
            <span className="text-[#3C3C3C]">Google</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
