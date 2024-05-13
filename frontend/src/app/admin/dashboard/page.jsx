"use client";
import Link from "next/link";
import React, { useEffect } from "react";

const Dashboard = () => {
  return (
    <div>
      <div className=" w-full ">
        <div style={{ display: "flex", width: "100%" }}>
          <div className="p-4 w-full h-screen bg-gray-800">
            <div className="p-4 text-2xl font-semibold text-white  ">
              <h1>Template Dashboard</h1>
            </div>

            <div className="grid xl:grid-cols-4 md:grid-cols-2  gap-5 p-3 ">
              <div className="flex  border-2 justify-center rounded border-gray-200 bg-gray-100  ">
                <label className="flex flex-col group  ">
                  <div className="flex flex-col items-center justify-center ">
                    <div className="text-center flex flex-col  ">
                      <img className=" h-24 w-24" src={"/user.png"} alt="" />
                      <p className="font-bold text-black"> 1232453</p>
                    </div>

                    <div className="text-center flex flex-col items-center justify-center p-2  border-gray-200 rounded-sm">
                      <p className="pointer-none text-gray-900 text-sm ">
                        Total User
                      </p>
                    </div>
                  </div>

                  <input
                    name="uploadtemplatefiles"
                    type="file"
                    className="hidden"
                  />
                </label>

                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 "></p>
                </div>
              </div>

              <div className="flex  border-2 justify-center rounded border-gray-200 bg-gray-100  ">
                <label className="flex flex-col group  ">
                  <div className="flex flex-col items-center justify-center ">
                    <div className="text-center flex flex-col  ">
                      <img
                        className=" h-24 w-24"
                        src={"/download.png"}
                        alt=""
                      />
                      <p className="font-bold text-black"> 1232453</p>
                    </div>

                    <div className="text-center flex flex-col items-center justify-center p-2  border-gray-200 rounded-sm">
                      <p className="pointer-none text-gray-900 text-sm ">
                        Total Download
                      </p>
                    </div>
                  </div>

                  <input
                    name="uploadtemplatefiles"
                    type="file"
                    className="hidden"
                  />
                </label>

                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 "></p>
                </div>
              </div>

              <div className="flex  border-2 justify-center rounded border-gray-200 bg-gray-100 ">
                <label className="flex flex-col group  ">
                  <div className="flex flex-col items-center justify-center ">
                    <div className="text-center flex flex-col  ">
                      <img className=" h-24 w-24" src={"/view.png"} alt="" />
                      <p className="font-bold text-black"> 1232453</p>
                    </div>

                    <div className="text-center flex flex-col items-center justify-center p-2  border-gray-200 rounded-sm">
                      <p className="pointer-none text-gray-900 text-sm ">
                        Total View
                      </p>
                    </div>
                  </div>

                  <input
                    name="uploadtemplatefiles"
                    type="file"
                    className="hidden"
                  />
                </label>

                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 "></p>
                </div>
              </div>

              <div className="flex  border-2 justify-center rounded border-gray-200 bg-gray-100 ">
                <label className="flex flex-col group  ">
                  <div className="flex flex-col items-center justify-center ">
                    <div className="text-center flex flex-col  ">
                      <img
                        className=" h-24 w-24"
                        src={"/totaltemplate.png"}
                        alt=""
                      />
                      <p className="font-bold text-black"> 1232453</p>
                    </div>

                    <div className="text-center flex flex-col items-center justify-center p-2  border-gray-200 rounded-sm">
                      <p className="pointer-none text-gray-900 text-sm ">
                        Total Templates
                      </p>
                    </div>
                  </div>

                  <input
                    name="uploadtemplatefiles"
                    type="file"
                    className="hidden"
                  />
                </label>

                <div className="flex items-center justify-center rounded  h-28 bg-gray-800">
                  <p className="text-2xl text-gray-400 "></p>
                </div>
              </div>
            </div>

            <div className=" grid p-5 border-2 text-gray-600 rounded border-gray-200 bg-white m-3 h-full ">
              <div>
                <div className="flex  h-auto justify-between">
                  <div>
                    <h5 className=" text-xl font-bold tracking-tight ">
                      Total new visitor
                    </h5>
                  </div>
                  <div className="">
                    <button className="mx-4 text-white bg-gray-400 border-gray-500 rounded-md hover:bg-white  hover:text-black px-2">
                      Day
                    </button>
                    <button className="mx-4 text-white bg-gray-400 border-gray-500 rounded-md hover:bg-white  hover:text-black  px-2">
                      Week
                    </button>
                    <button className="mx-4 text-white bg-gray-400 border-gray-500 rounded-md hover:bg-white  hover:text-black  px-2">
                      Month
                    </button>
                  </div>
                </div>
                <hr className="h-px my-4 bg-gray-400 border-0  w-full" />
              </div>

              <div className="">
              <iframe
  style={{
    background: "transparent",
    border: "none",
    borderRadius: 2,
    boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
    width: "50vw",
    height: "70vh"
  }}
  src="https://charts.mongodb.com/charts-project-0-ggenymo/embed/dashboards?id=6641afb1-dc15-4e3c-8098-e161bf672dc8&theme=light&autoRefresh=true&maxDataAge=3600&showTitleAndDesc=false&scalingWidth=scale&scalingHeight=scale"
/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
