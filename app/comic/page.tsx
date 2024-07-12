"use server";
import Comic from "@/components/comic/Comic";
import arrow from "@/public/images/back-arrow.svg";
import Image from "next/image";
import Link from "next/link";

export default async function ComicPage() {
  return (
    <main className="justify-center">
      <Link
        href="/"
        target="_self"
        className="absolute top-0 left-0 rounded-br-2xl bg-stone-700 outline outline-1 outline-white w-max cursor-pointer"
      >
        <p className="m-4">
          Back
          <Image src={arrow} alt="🔙" className="size-8" />
        </p>
      </Link>
      <Comic />
    </main>
  );
}
