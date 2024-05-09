"use client";
import Footer from "@/components/footer";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { color } from "framer-motion";
export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Simplify",
    },
    {
      text: "your",
    },
    {
      text: "React",
    },
    {
      text: "projects",
    },
    {
      text: "with",
    },
    {
      text: "ReactUIHub.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <>
      <Navbar/>
      <div className="flex flex-col items-center justify-center h-[40rem] bg-gray-900 " >
        <p className="text-gray-600  text-md sm:text-base  ">
        Discover, customize, and integrate stunning React templates for your projects.        </p>
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          <Link href={"/template-search"}> Get Started</Link>
          </button>
          <button className="w-40 h-10 rounded-xl bg-white text-black border dark:border-black border-transparent text-sm">

            <Link href={"/signup"}>Sign Up</Link>
            
          </button>
        </div>
      </div>
     
      <Footer />
    </>
  );
}
