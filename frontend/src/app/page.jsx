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
      className: "text-blue-500",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-[40rem] bg-gray-900 ">
        <p className="text-gray-600  text-md sm:text-base  ">
          Discover, customize, and integrate stunning React templates for your
          projects.{" "}
        </p>
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <button className="w-40 h-10 rounded-xl bg-black border border-white hover:bg-white hover:border-black hover:text-black text-white text-sm">
            <Link href={"/template-search"}> Get Started</Link>
          </button>
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black hover:bg-black hover:border-white hover:text-white text-sm">
            <Link href={"/signup"}>Sign Up</Link>
          </button>
        </div>
      </div>

      <div className="bg-gray-400">
        <div className="bg-gray-700 py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Template Categories
            </h2>
            <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <img
                  src="blogging.png"
                  alt="Category"
                  className="w-12 h-12 mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-center text-black mb-2">
                  Business & Corporate
                </h3>

                <button className="bg-gray-900 justify-center  mt-10 text-white hover:text-gray-900 hover:bg-gray-200 rounded-md px-3 py-1 ">
                  View
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <img
                  src="blogging.png"
                  alt="Category"
                  className="w-12 h-12 mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-center mb-2">
                  Portfolio & Resume
                </h3>

                <button className="bg-gray-900 justify-center  mt-10 text-white hover:text-gray-900 hover:bg-gray-200 rounded-md px-3 py-1 ">
                  View
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <img
                  src="blogging.png"
                  alt="Category"
                  className="w-12 h-12 mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-center mb-2">
                  E-commerce & Online Stores
                </h3>

                <button className="bg-gray-900 justify-center  mt-10 text-white hover:text-gray-900 hover:bg-gray-200 rounded-md px-3 py-1 ">
                  View
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <img
                  src="blogging.png"
                  alt="Category"
                  className="w-12 h-12 mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-center mb-2">
                  Blogging & Content Management
                </h3>

                <button className="bg-gray-900 justify-center  mt-10 text-white hover:text-gray-900 hover:bg-gray-200 rounded-md px-3 py-1 ">
                  View
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <img
                  src="blogging.png"
                  alt="Category"
                  className="w-12 h-12 mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-center mb-2">
                  Landing Page & Product Showcase
                </h3>

                <button className="bg-gray-900 justify-center  mt-10 text-white hover:text-gray-900 hover:bg-gray-200 rounded-md px-3 py-1 ">
                  View
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 justify-center items-center">
                <img
                  src="blogging.png"
                  alt="Category"
                  className="w-12 h-12 mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-center mb-2">
                  Dashboard & Analytics
                </h3>

                <button className="bg-gray-900  mt-10 text-white hover:text-gray-900 hover:bg-gray-200 rounded-md px-3 py-1 ">
                  View
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <img
                  src="blogging.png"
                  alt="Category"
                  className="w-12 h-12 mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-center mb-2">
                  Creative & Agency
                </h3>

                <button className="bg-gray-900 justify-center  mt-10 text-white hover:text-gray-900 hover:bg-gray-200 rounded-md px-3 py-1 ">
                  View
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <img
                  src="blogging.png"
                  alt="Category"
                  className="w-12 h-12 mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-center mb-2">
                  Travel & Tourism
                </h3>

                <button className="bg-gray-900 justify-center  mt-10 text-white hover:text-gray-900 hover:bg-gray-200 rounded-md px-3 py-1 ">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Featured Templates</h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="bg-white rounded-lg shadow-md p-6">
                <img
                  src="template-preview.jpg"
                  alt="Template Preview"
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">Template Title</h3>
                <p className="text-sm text-gray-600">
                  Brief description or summary of the template.
                </p>
                <a
                  href="#"
                  className="block mt-4 text-blue-600 hover:underline"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div>
        <div className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">How It Works</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {/* Icon goes here */}1
                </div>
                <h3 className="text-lg text-black   font-semibold mb-2">
                  Explore Templates
                </h3>

                <ul className="text-sm list-disc text-gray-600 ">
                  <li>
                    Browse our curated collection of high-quality React
                    templates covering various categories and styles.
                  </li>
                  <li>
                    Find the perfect template for your project, whether it's for
                    business, portfolio, e-commerce, or other purposes.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
