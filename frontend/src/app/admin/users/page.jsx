"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ManageUser = () => {
  const [Data, setData] = useState([]);

  //fetch user

  const fetchUserData = async () => {
    const res = await fetch("http://localhost:5500/user/getall");

    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setData(data);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  //delete funnction

  const deleteFunction = async (id) => {
    console.log(id);

    const res = await fetch("http://localhost:5500/user/getall" + id, {
      method: "DELETE",
    });

    if (res.status === 200) {
      fetchUserData();
    }
  };

  //display user function

  const displayUser = () => {
    return Data.map((obj) => (
      <>
        <tr>
          <td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
            {obj._id}
          </td>
          <td className="text-dark border-b border-[#E8E8E8] bg-white border-dark bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
            {obj.name}
          </td>
          <td className="text-dark border-b border-[#E8E8E8] bg-[#F3F6FF] bg-dark-3 border-dark text-dark-7 py-5 px-2 text-center text-base font-medium">
            {obj.email}
          </td>
          <td className="text-dark border-b border-[#E8E8E8] bg-white border-dark bg-dark-2 text-dark-7 py-5 px-2 text-center text-base font-medium">
            {obj.password}
          </td>

          <td className="text-dark border-b border-r border-[#E8E8E8] bg-[#F3F6FF] border-dark bg-dark-2 text-dark-7 py-5 px-2 text-center text-base font-medium">
            <button
              className="btn btn-danger text-white"
              onClick={() => {
                deleteFuction(obj._id);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      </>
    ));
  };
  return (
    <>
      <div>
        <div className="flex w-full ">
          <div style={{ display: "flex", width: "100%" }}>
            <div className="p-4 w-full  bg-gray-900 text-gray-50">
              <div className="p-4 text-2xl font-semibold text-gray-50 text-center ">
                <h1>User Dashboard</h1>
              </div>

              <div className="bg-gray-900 ">
                <div className="container mx-auto">
                  <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                      <div className="max-w-full overflow-x-auto">
                        <table className="w-full table-auto rounded">
                          <thead>
                            <tr className="text-center bg-gray-900 text-gray-50">
                              <th className="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-medium  lg:py-7 lg:px-4">
                                User ID
                              </th>
                              <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-medium lg:py-7 lg:px-4">
                                User Name
                              </th>
                              <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-medium  lg:py-7 lg:px-4">
                                Email Id
                              </th>
                              <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-medium lg:py-7 lg:px-4">
                                Password
                              </th>

                            
                            
                              <th className="w-1/6 min-w-[160px] border-r border-transparent py-4 px-3 text-lg font-medium  lg:py-7 lg:px-4">
                                Delete
                              </th>
                            </tr>
                          </thead>
                          <tbody className="text-center bg-gray-50 text-gray-900">
                    
                       

                            {displayUser()}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageUser;
