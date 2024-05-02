"use client";
import Footer from "@/components/footer";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import Navbar from "@/components/navbar";
import Link from "next/link";
export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <>
      <Navbar/>
      <div className="flex flex-col items-center justify-center h-[40rem]  ">
        <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Discover, customize, and integrate stunning React templates for your projects.        </p>
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          <Link href={"/template-search"}> Get Started</Link>
          </button>
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">

            <Link href={"/signup"}>Signup</Link>
            
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
