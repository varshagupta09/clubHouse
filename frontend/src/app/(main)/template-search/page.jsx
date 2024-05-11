'use client';
import Link from "next/link";
import React, { useEffect, useState } from "react";

const templatesearch = () => {

  const [templateList, setTemplateList] = useState([]);
  const [masterList, setMasterList] = useState([]);

  const fetchTemplatesData = () => {
    fetch('http://localhost:5500/template/getall')
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
  }

  useEffect(() => {
    fetchTemplatesData();
  }, [])

  const searchTemplate = (e) => {
    const searchQuery = e.target.value;
    if (searchQuery === '') {
      setTemplateList(masterList);
    } else {
      const filteredList = masterList.filter((template) => template.title.toLowerCase().includes(searchQuery.toLowerCase()));
      setTemplateList(filteredList);
    }
  }

  const displayTemplates = () => {
    if (templateList.length === 0) {
      return <h2>No templates found</h2>
    } else {
      return templateList.map(template => (
      

        <div className=" py-8">
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
      ))
    }
  }


  return (
    <>

    <div className="bg-gray-900" >
      
      <div className="text-center p-10">
        <form className="max-w-lg mx-auto ">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-900"
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
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-gray-500 focus:border-gray-500  "
              placeholder="Search templates..."
              onChange={searchTemplate}
            />
            {/* <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button> */}
          </div>
        </form>
      </div>
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-10  pb-20"
      >
        {displayTemplates()}
      </section>
      </div>
    </>
  );
};

export default templatesearch;
