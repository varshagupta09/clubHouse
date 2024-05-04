import React from "react";

const BrowseCategory = () => {
  return (
    <div className="h-full">


      <div className="grid  lg:grid-cols-4   md:grid-cols-2 p-8 justify-center gap-3 ">
        <div className="  rounded-md bg-gray-100 p-4 mt-4">
          <div>
            <h2>Business & Corporate</h2>
            <img src="/blogging.png" alt=""  className="w-60 h-60 justify-center"/>
            <button className="bg-gray-900 taxt-white hover:text-gray-900 hover:bg-gray-200 rounded-md px-3 py-1 justify-start">View</button>

          </div>
          
        </div>
         
        
        <div className="rounded-md bg-gray-100 p-4 mt-4">
        <div>
            <h2>Portfolio & Resume</h2>
            <img src="" alt="" />
          </div>
        </div>
        <div className="rounded-md bg-gray-100 p-4 mt-4">
        <div>
            <h2>E-commerce & Online Stores</h2>
            <img src="" alt="" />
          </div>
        </div>
        <div className="rounded-md bg-gray-100 p-4 mt-4 justify-center">
        <div className="justify-center items-center">
            <h2>Blogging & Content Management</h2>
            <img src="/blogging.png" alt=""  className="w-60 h-60 justify-center"/>
            <button className="bg-gray-900 taxt-white hover:text-gray-900 hover:bg-gray-200 rounded-md px-3 py-1">View</button>
          </div>
        </div>
      </div>
      <div className="grid   lg:grid-cols-4   md:grid-cols-2 p-8 justify-center gap-3">
      <div className="  rounded-md bg-gray-100 p-4">
          <div>
            <h2>Landing Page & Product Showcase</h2>
            <img src="/blogging.png" alt=""  className="w-60 h-60 justify-center"/>
            <button className="bg-gray-900 taxt-white hover:text-gray-900 hover:bg-gray-200 rounded-md px-3 py-1 justify-start">View</button>

          </div>
          
        </div>
        <div className="rounded-md bg-gray-100 p-4">
        <div>

            <h2>Dashboard & Analytics</h2>
            <img src="" alt="" />
          </div>
        </div>
        <div className="rounded-md bg-gray-100 p-4">
        <div>
            <h2>Creative & Agency</h2>
            <img src="" alt="" />
          </div>
        </div>
        <div className="rounded-md bg-gray-100 p-4 ">
        <div>
            <h2>Travel & Tourism</h2>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseCategory;
