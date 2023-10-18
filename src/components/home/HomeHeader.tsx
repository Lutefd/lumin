import { ArrowRight } from "lucide-react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { buttonVariants } from "../ui/button";
import Link from "next/link";

export default function HomeHeader() {
  return (
    <MaxWidthWrapper className="mb-12 mt-28 flex flex-col items-center justify-center text-center sm:mt-40">
      <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50 ">
        <p className="text-sm font-semibold text-gray-700">
          Lumin agora é público!
        </p>
      </div>
      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
        Converse com seus <span className="text-primary">documentos</span> em
        segundos.
      </h1>
      <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
        O Lumin permite que você converse com qualquer documento PDF. É só fazer
        o upload de seu arquivo e começar a conversar.
      </p>
      <Link
        className={buttonVariants({
          size: "lg",
          className: "mt-5",
        })}
        href={"/dashboard"}
        target="_blank"
      >
        Começe agora <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
    </MaxWidthWrapper>
  );
}
