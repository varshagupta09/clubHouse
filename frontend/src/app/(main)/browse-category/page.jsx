'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";


const BrowseCategory = () => {

  const [templateList, setTemplateList] = useState([]);
  const [masterList, setMasterList] = useState([]);

  const router = useRouter();

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



  return (
    <div className="h-full">


  <div className="bg-gray-900 py-8">

    
        <div className="container mx-auto px-4">

          <h2 className="text-2xl font-bold mb-4 text-center text-white">
             Categories
          </h2>
          <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3">
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <img
                src="business.png"
                alt="Category"
                className="w-36 h-36 mx-auto "
              />
              <h3 className="text-lg font-semibold text-center text-white ">
                Business & Corporate
              </h3>

              <div className="text-center">
                <button onClick={e => router.push('/template-search/')} className="bg-blue-700 justify-center  mt-5 text-white hover:text-gray-900 hover:bg-gray-200 rounded-md w-48 py-2 ">
                  View
                </button>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <img
                src="portfolioandresume.png"
                alt="Category"
                className="w-36 h-36 mx-auto "
              />
              <h3 className="text-lg font-semibold text-center text-white ">
                Portfolio & Resume
              </h3>

              <div className="text-center">
                <button className="bg-blue-700 justify-center  mt-5 text-white hover:text-gray-900 hover:bg-gray-200 rounded-md w-48 py-2 ">
                  View
                </button>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <img
                src="ecommercestore.png"
                alt="Category"
                className="w-36 h-36 mx-auto "
              />
              <h3 className="text-lg font-semibold text-center text-white ">
                E-commerce Stores
              </h3>

              <div className="text-center">
                <button className="bg-blue-700 justify-center  mt-5 text-white hover:text-gray-900 hover:bg-gray-200 rounded-md w-48 py-2 ">
                  View
                </button>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <img
                src="bloggingmanagement.png"
                alt="Category"
                className="w-36 h-36 mx-auto "
              />
              <h3 className="text-lg font-semibold text-center text-white">
                Blogging Management
              </h3>

              <div className="text-center">
                <button className="bg-blue-700 justify-center  mt-5 text-white hover:text-gray-900 hover:bg-gray-200 rounded-md w-48 py-2 ">
                  View
                </button>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
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
                  <button className="bg-blue-700 justify-center  mt-5 text-white hover:text-gray-900 hover:bg-gray-200 rounded-md w-48 py-2 ">
                    View
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-md p-6 justify-center items-center">
              <img
                src="dashboard.png"
                alt="Category"
                className="w-36 h-36 mx-auto "
              />
              <h3 className="text-lg font-semibold text-center text-white">
                Dashboard & Analytics
              </h3>

              <div className="text-center">
                <button onClick={e => router.push('/template-search/dashboard')} className="bg-blue-700 justify-center  mt-5 text-white hover:text-gray-900 hover:bg-gray-200 rounded-md w-48 py-2 ">
                  View
                </button>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <img
                src="creativeagency.png"
                alt="Category"
                className="w-36 h-36 mx-auto "
              />
              <h3 className="text-lg font-semibold text-center text-white">
                Creative & Agency
              </h3>

              <div className="text-center">
                <button className="bg-blue-700 justify-center  mt-5 text-white hover:text-gray-900 hover:bg-gray-200 rounded-md w-48 py-2 ">
                  View
                </button>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <img
                src="travel.png"
                alt="Category"
                className="w-36 h-36 mx-auto "
              />
              <h3 className="text-lg font-semibold text-center text-white">
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


  
    </div>
  );
};

export default BrowseCategory;
