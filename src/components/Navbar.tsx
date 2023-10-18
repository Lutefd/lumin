import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import LoginButton from "./ui/LoginButton";
import { ArrowRight } from "lucide-react";
import { getServerAuthSession } from "@/server/auth";
import SignOutButton from "./ui/SignOutButton";
interface IGuestLinks {
  href: string;
  title: string;
  login?: boolean;
}

const GuestLinks: IGuestLinks[] = [
  {
    href: "/pricing",
    title: "Preços",
  },
];

export default async function Navbar() {
  const session = await getServerAuthSession();

  return (
    <nav className="sticky inset-x-0 top-0 z-30 h-14 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="z-40 flex font-semibold">
            Lumin.
          </Link>
          {/* todo: add mobile nav */}

          <div className="hidden items-center space-x-4 sm:flex">
            <>
              {GuestLinks.map((link, index) => {
                return (
                  <Link
                    key={index}
                    href={link.href}
                    className={buttonVariants({
                      variant: "ghost",
                      size: "sm",
                    })}
                  >
                    {link.title}
                  </Link>
                );
              })}
              {!session && (
                <LoginButton provider="google">
                  Converse <ArrowRight className="ml-1.5 h-5 w-5" />
                </LoginButton>
              )}
              {session && <SignOutButton>Logout</SignOutButton>}
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
