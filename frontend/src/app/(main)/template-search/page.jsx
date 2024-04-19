'use client';
import Link from "next/link";
import React, { useEffect, useState } from "react";

const templatesearch = () => {

  const [templateList, setTemplateList] = useState([]);

  const fetchTemplatesData = () => {
    fetch('http://localhost:5500/template/getall')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setTemplateList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchTemplatesData();
  }, [])

  const displayTemplates = () => {
    if (templateList.length === 0) {
      return <h2>No templates found</h2>
    } else {
      return templateList.map(template => (
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src={'http://localhost:5500/'+template.image}
              alt="Product"
              className="h-40 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <p className="text-lg font-bold text-black truncate block capitalize">
                {template.title}
              </p>
              <div className="flex items-center">
                <div className="ml-auto">
                  <Link href={'/templateview/'+template._id} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </a>
        </div>
      ))
    }
  }


  return (
    <div>
      <>
        {/* source: https://github.com/mfg888/Responsive-Tailwind-CSS-Grid/blob/main/index.html */}
        <div className="text-center p-10">
          <form className="max-w-lg mx-auto ">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search templates..."
                required=""
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <section
          id="Projects"
          className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
        >
          {displayTemplates()}
        </section>
        <div className="text-center py-10 px-10">

        </div>
      </>
    </div>
  );
};

export default templatesearch;
