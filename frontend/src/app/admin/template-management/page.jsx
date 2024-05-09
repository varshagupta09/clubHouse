"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IconTrash } from "@tabler/icons-react";
import toast from "react-hot-toast";

const templateManagement = () => {
  const [templateList, setTemplateList] = useState([]);
  const [masterList, setMasterList] = useState([]);

  const fetchTemplates = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/template/getall`)
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
    fetchTemplates();
  }, []);


  const searchCategory = (category) => {
    const filteredList = masterList.filter((template) => template.framework.toLowerCase().includes(category.toLowerCase()));
    setTemplateList(filteredList);
  }

  const deleteTemplate = (id) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/template/delete/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Template deleted successfully");
          fetchTemplates();
        } else {
          toast.error("Failed to delete template");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to delete template");
      });
  };

  const displayTemplates = () => {
    if (templateList.length === 0) {
      return <h2>No templates found</h2>;
    } else {
      return templateList.map((template) => {
        return <li className="py-3 sm:py-4">
          <div className="grid grid-cols-5 gap-4 items-center ">
            <div className="flex-shrink-0">
              <img
                className="w-36 h-24 rounded-md border-white border-2"
                src={`${process.env.NEXT_PUBLIC_API_URL}/${template.image}`}
                alt={template.title}
              />
            </div>

            <div className="flex-1 min-w-0 ms-4">
              <p className="text-sm font-medium text-gray-900 ">
                {template.title}
              </p>
            </div>
            <div className="flex-1 min-w-0 ms-4">
              <p className="text-sm  text-gray-900  ">
                {template.category}
              </p>
            </div>
            <div className=" min-w-0 ms-4">
              <p className="text-sm  text-gray-900  ">
                {template.framework}
              </p>
            </div>

            <div className="min-w-0 ms-4">
              <p className="text-sm  text-gray-900  ">
                <IconTrash
                  size={24}
                  color="red"
                  className="cursor-pointer"
                  onClick={() => deleteTemplate(template._id)}
                />
              </p>
            </div>
          </div>
        </li>;
      });
    }
  };

  return (
    <>
      <div className="bg-gray-50">

        <div className="p-4 w-full h-screen bg-gray-800">
        <div className="p-4 text-2xl font-semibold text-white  ">
              <h1>Template Management</h1>
            </div>

            <div className="w-full p-4 bg-gray-100 border border-gray-200 rounded-lg shadow sm:p-8">
              <div className="flex items-center justify-start gap-4 mb-4">
                <a
                  onClick={() => searchCategory('React Native')}
                  href="#"
                  className="text-sm font-medium text-gray-400 hover:underline hover:text-gray-900 "
                >
                  React Native
                </a>
                <a
                  onClick={() => searchCategory('Next.js')}
                  href="#"
                  className="text-sm font-medium text-gray-400 hover:underline hover:text-gray-900"
                >
                  Next.js
                </a>
                <a
                                  onClick={() => searchCategory('Gastsby')}

                  href="#"
                  className="text-sm font-medium text-gray-400 hover:underline hover:text-gray-900"
                >
                  Gatsby
                </a>
                <a
                onClick={() => searchCategory('Remix')}
                  href="#"
                  className="text-sm font-medium text-gray-400 hover:underline hover:text-gray-900"
                >
                  Remix
                </a>
                <a
                                onClick={() => searchCategory('Vite')}
                  href="#"
                  className="text-sm font-medium text-gray-400 hover:underline hover:text-gray-900 "
                >
                  Vite
                </a>
              </div>
              <div className="flow-root">
                <ul
                  role="list"
                  className="divide-y divide-gray-200 dark:divide-gray-700"
                >
                  <li className="py-3 sm:py-4">
                    <div className="grid grid-cols-5 gap-4 ">
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900  ">
                          Preview
                        </p>
                      </div>

                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 ">
                          Title Name
                        </p>
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900  ">
                          Category
                        </p>
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900  ">
                          Framwork
                        </p>
                      </div>

                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900  ">
                          Delete
                        </p>
                      </div>
                    </div>
                  </li>
                  {displayTemplates()}
                </ul>
              </div>
            </div>
          
        </div>
      </div>
    </>
  );
};

export default templateManagement;
