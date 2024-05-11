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
        <p className="text-gray-300  text-md sm:text-base  ">
          Discover, customize, and integrate stunning React templates for your
          projects.{" "}
        </p>
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <button className="w-40 h-10 rounded-xl bg-black border border-white hover:bg-white hover:border-black hover:text-black text-white text-sm">
            <Link href={"/template-search"}> Get Started</Link>
          </button>
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black hover:bg-black hover:border-white hover:text-white text-sm">
            <Link href={"/browse-category"}>Browse Category</Link>
          </button>
        </div>
      </div>

      <div className="bg-gray-700 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Template Categories
          </h2>
          <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <img
                src="business.png"
                alt="Category"
                className="w-36 h-36 mx-auto "
              />
              <h3 className="text-lg font-semibold text-center text-black ">
                Business & Corporate
              </h3>

              <div className="text-center">
                <button className="bg-blue-700 justify-center  mt-5 text-white hover:text-gray-900 hover:bg-gray-200 rounded-md w-48 py-2 ">
                  View
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <img
                src="portfolioandresume.png"
                alt="Category"
                className="w-36 h-36 mx-auto "
              />
              <h3 className="text-lg font-semibold text-center text-black ">
                Portfolio & Resume
              </h3>

              <div className="text-center">
                <button className="bg-blue-700 justify-center  mt-5 text-white hover:text-gray-900 hover:bg-gray-200 rounded-md w-48 py-2 ">
                  View
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <img
                src="ecommercestore.png"
                alt="Category"
                className="w-36 h-36 mx-auto "
              />
              <h3 className="text-lg font-semibold text-center text-black ">
                E-commerce Stores
              </h3>

              <div className="text-center">
                <button className="bg-blue-700 justify-center  mt-5 text-white hover:text-gray-900 hover:bg-gray-200 rounded-md w-48 py-2 ">
                  View
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <img
                src="bloggingmanagement.png"
                alt="Category"
                className="w-36 h-36 mx-auto "
              />
              <h3 className="text-lg font-semibold text-center text-black">
                Blogging Management
              </h3>

              <div className="text-center">
                <button className="bg-blue-700 justify-center  mt-5 text-white hover:text-gray-900 hover:bg-gray-200 rounded-md w-48 py-2 ">
                  View
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <img
                src="landingpage.png"
                alt="Category"
                className="w-36 h-36 mx-auto "
              />
              <h3 className="text-lg font-semibold text-center text-black">
                Landing Page
              </h3>
              <div className="text-center">
                <div className="text-center">
                  <button className="bg-blue-700 justify-center  mt-5 text-white hover:text-gray-900 hover:bg-gray-200 rounded-md w-48 py-2 ">
                    View
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 justify-center items-center">
              <img
                src="dashboard.png"
                alt="Category"
                className="w-36 h-36 mx-auto "
              />
              <h3 className="text-lg font-semibold text-center text-black">
                Dashboard & Analytics
              </h3>

              <div className="text-center">
                <button className="bg-blue-700 justify-center  mt-5 text-white hover:text-gray-900 hover:bg-gray-200 rounded-md w-48 py-2 ">
                  View
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <img
                src="creativeagency.png"
                alt="Category"
                className="w-36 h-36 mx-auto "
              />
              <h3 className="text-lg font-semibold text-center text-black">
                Creative & Agency
              </h3>

              <div className="text-center">
                <button className="bg-blue-700 justify-center  mt-5 text-white hover:text-gray-900 hover:bg-gray-200 rounded-md w-48 py-2 ">
                  View
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <img
                src="travel.png"
                alt="Category"
                className="w-36 h-36 mx-auto "
              />
              <h3 className="text-lg font-semibold text-center text-black">
                Travel & Tourism
              </h3>
              <div className="text-center">
                <button className="bg-blue-700 justify-center  mt-5 text-white hover:text-gray-900 hover:bg-gray-200 rounded-md w-48 py-2 ">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-gray-700 py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Featured Templates
            </h2>
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
        <div className="bg-gray-700 py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-black mb-4 bg-white p-4 text-center">How It Works</h2>
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
                    Browse our curated collection of React templates covering
                    various categories.
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {/* Icon goes here */}1
                </div>
                <h3 className="text-lg text-black   font-semibold mb-2">
                  Customize Your Design
                </h3>

                <ul className="text-sm list-disc text-gray-600 ">
                  <li>
                    Select and personalize a template to match your brand and
                    preferences.
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {/* Icon goes here */}1
                </div>
                <h3 className="text-lg text-black   font-semibold mb-2">
                Integrate Seamlessly
                </h3>

                <ul className="text-sm list-disc text-gray-600 ">
                  <li>
                  Download and integrate the template files into your React
                  project effortlessly.
                  </li>
                </ul>
              </div>


              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {/* Icon goes here */}1
                </div>
                <h3 className="text-lg text-black   font-semibold mb-2">
                  Collaborate and Innovate
                </h3>

                <ul className="text-sm list-disc text-gray-600 ">
                  <li>
                    Join our community to collaborate, learn, and access
                    valuable resources.
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {/* Icon goes here */}1
                </div>
                <h3 className="text-lg text-black   font-semibold mb-2">
                  Launch Your Project{" "}
                </h3>

                <ul className="text-sm list-disc text-gray-600 ">
                  <li>
                    Build exceptional web experiences and launch your project
                    with confidence.
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
