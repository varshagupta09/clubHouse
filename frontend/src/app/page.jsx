"use client";
import Footer from "@/components/footer";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import Navbar from "@/components/navbar";
import React, { useEffect, useState } from "react";

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
      className: "text-sky-300",
    },
  ];
  const [templateList, setTemplateList] = useState([]);
  const [masterList, setMasterList] = useState([]);

  const fetchTemplatesData = () => {
    fetch("http://localhost:5500/template/getall")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setTemplateList(data);
        setMasterList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchTemplatesData();
  }, []);

  const displayTemplates = () => {
    if (templateList.length === 0) {
      return <h2>No templates found</h2>;
    } else {
      return templateList.map((template) => (
        <div className=" p-6">
          <img
            src={`${process.env.NEXT_PUBLIC_API_URL}/${template.image}`}
            alt={template.title}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold text-white mb-2">
            {" "}
            {template.title}
          </h3>
          <p className="text-sm text-white mb-10">
            Brief description or summary of the template.
          </p>
          <div className="text-center ">
            <Link
              href={"/templateview/" + template._id}
              className="bg-blue-600 justify-center  text-white font-semibold hover:text-white hover:bg-blue-500 rounded-full w-48  py-3 px-5 "
            >
              View Details
            </Link>
          </div>
        </div>
      ));
    }
  };
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 ">
        <div className="w-96 h-96">
          <img src="ReactUIHub_Logo.png " alt="" />
        </div>
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

      <div className="bg-gray-900 ">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4 p-4 text-center rounded-lg">
            Template Categories
          </h2>
          <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-4">
            <div className="p-6">
              <img
                src="business.png"
                alt="Category"
                className="w-36 h-36 mx-auto "
              />
              <h3 className="text-lg font-semibold text-center text-white ">
                Business & Corporate
              </h3>

              <div className="text-center">
                <button className="bg-blue-600 justify-center  mt-5 text-white font-semibold hover:text-white hover:bg-blue-500 rounded-full w-48 py-2 ">
                  View
                </button>
              </div>
            </div>
            <div className="p-6">
              <img
                src="portfolioandresume.png"
                alt="Category"
                className="w-36 h-36 mx-auto "
              />
              <h3 className="text-lg font-semibold text-center text-white ">
                Portfolio & Resume
              </h3>

              <div className="text-center">
                <button className="bg-blue-600 justify-center  mt-5 text-white font-semibold hover:text-white hover:bg-blue-500 rounded-full w-48 py-2 ">
                  View
                </button>
              </div>
            </div>
            <div className=" p-6">
              <img
                src="ecommercestore.png"
                alt="Category"
                className="w-36 h-36 mx-auto "
              />
              <h3 className="text-lg font-semibold text-center text-white ">
                E-commerce Stores
              </h3>

              <div className="text-center">
                <button className="bg-blue-600 justify-center  mt-5 text-white font-semibold hover:text-white hover:bg-blue-500 rounded-full w-48 py-2 ">
                  View
                </button>
              </div>
            </div>
            <div className=" p-6">
              <img
                src="bloggingmanagement.png"
                alt="Category"
                className="w-36 h-36 mx-auto "
              />
              <h3 className="text-lg font-semibold text-center text-white">
                Blogging Management
              </h3>

              <div className="text-center">
                <button className="bg-blue-600 justify-center  mt-5 text-white font-semibold hover:text-white hover:bg-blue-500 rounded-full w-48 py-2 ">
                  View
                </button>
              </div>
            </div>
            <div className="p-6">
              <img
                src="landingpage.png"
                alt="Category"
                className="w-36 h-36 mx-auto "
              />
              <h3 className="text-lg font-semibold text-center text-white">
                Landing Page
              </h3>
              <div className="text-center">
                <div className="text-center">
                  <button className="bg-blue-600 justify-center  mt-5 text-white font-semibold hover:text-white hover:bg-blue-500 rounded-full w-48 py-2 ">
                    View
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6">
              <img
                src="dashboard.png"
                alt="Category"
                className="w-36 h-36 mx-auto "
              />
              <h3 className="text-lg font-semibold text-center text-white">
                Dashboard & Analytics
              </h3>

              <div className="text-center">
                <button className="bg-blue-600 justify-center  mt-5 text-white font-semibold hover:text-white hover:bg-blue-500 rounded-full w-48 py-2 ">
                  View
                </button>
              </div>
            </div>
            <div className="p-6">
              <img
                src="creativeagency.png"
                alt="Category"
                className="w-36 h-36 mx-auto "
              />
              <h3 className="text-lg font-semibold text-center text-white">
                Creative & Agency
              </h3>

              <div className="text-center">
                <button className="bg-blue-600 justify-center  mt-5 text-white font-semibold hover:text-white hover:bg-blue-500 rounded-full w-48 py-2 ">
                  View
                </button>
              </div>
            </div>
            <div className=" p-6">
              <img
                src="travel.png"
                alt="Category"
                className="w-36 h-36 mx-auto "
              />
              <h3 className="text-lg font-semibold text-center text-white">
                Travel & Tourism
              </h3>
              <div className="text-center">
                <button className="bg-blue-600 justify-center  mt-5 text-white font-semibold hover:text-white hover:bg-blue-500 rounded-full w-48 py-2 ">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-gray-900 py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-white mb-4 p-4 text-center ">
              Featured Templates
            </h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {displayTemplates()}
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div>
        <div className="bg-gray-900 py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-white mb-4  p-4 text-center ">
              How It Works
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className=" rounded-lg shadow-md p-6 flex flex-col items-center ">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {/* Icon goes here */}1
                </div>
                <h3 className="text-lg text-white   font-semibold mb-2">
                  Explore Templates
                </h3>
                <p className="text-center text-gray-300">
                  {" "}
                  Browse our curated collection of React templates covering
                  various categories.
                </p>
              </div>
              <div className="   p-6 flex flex-col items-center">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {/* Icon goes here */}2
                </div>
                <h3 className="text-lg text-white   font-semibold mb-2">
                  Customize Your Design
                </h3>

                <p className="text-center text-gray-300">
                  {" "}
                  Select and personalize a template to match your brand and
                  preferences.
                </p>
              </div>

              <div className="p-6 flex flex-col items-center">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {/* Icon goes here */}3
                </div>
                <h3 className="text-lg text-white   font-semibold mb-2">
                  Integrate Seamlessly
                </h3>

                <p className="text-center text-gray-300">
                  {" "}
                  Download and integrate the template files into your React
                  project effortlessly.
                </p>
              </div>

              <div className=" p-6 flex flex-col items-center">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {/* Icon goes here */}4
                </div>
                <h3 className="text-lg text-white   font-semibold mb-2">
                  Collaborate and Innovate
                </h3>
                <p className="text-center text-gray-300">
                  {" "}
                  Join our community to collaborate, learn, and access valuable
                  resources.
                </p>
              </div>
              <div className=" p-6 flex flex-col items-center">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {/* Icon goes here */}5
                </div>
                <h3 className="text-lg text-white   font-semibold mb-2">
                  Launch Your Project{" "}
                </h3>

                <p className="text-center text-gray-300">
                  {" "}
                  Build exceptional web experiences and launch your project with
                  confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
