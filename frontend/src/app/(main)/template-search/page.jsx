'use client';
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
        if(templateList.length === 0){
            return <h2>No templates found</h2>
        }else{
            return templateList
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
        {/* ✅ Grid Section - Starts Here 👇 */}
        <section
          id="Projects"
          className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
        >
          {/*   ✅ Product card 1 - Starts Here 👇 */}
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="https://img.freepik.com/free-psd/body-building-landing-page-template_23-2149998774.jpg?t=st=1713073824~exp=1713077424~hmac=24110c65d634882a5694f2dc7f358b9d7db1b9caf4c0586aa47d2fd02fefd535&w=1800"
                alt="Product"
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">
                Gym Website Template
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                  Rs.0/-
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">
                      Rs.199/-
                    </p>
                  </del>
                  <div className="ml-auto">
                   Preview
                        
                   
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/*   🛑 Product card 1 - Ends Here  */}
          {/*   ✅ Product card 2 - Starts Here 👇 */}
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="https://img.freepik.com/free-vector/wild-nature-landing-page_23-2148747727.jpg?t=st=1713073862~exp=1713077462~hmac=39a01d1c9aa9e5a86cd80f49b958e14fc668ca47e87d9731122fa4550a050fbc&w=1800"
                alt="Product"
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Resort Template
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                   Rs.0/-
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">
                      Rs.199/-
                    </p>
                  </del>
                  <div className="ml-auto">
                Preview
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/*   🛑 Product card 2- Ends Here  */}
          {/*   ✅ Product card 3 - Starts Here 👇 */}
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="https://img.freepik.com/free-vector/technology-future-squared-flyer-template_23-2149004207.jpg?t=st=1713073929~exp=1713077529~hmac=8722e8a44e39d5b1eaffb31e2f98acc2227688374f0bf10a7349303cfdd66cfa&w=1380"
                alt="Product"
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">
                  IT Template
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    Rs.0/-
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">
                      Rs.190/-
                    </p>
                  </del>
                  <div className="ml-auto">
                    Preview
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/*   🛑 Product card 3 - Ends Here  */}
          {/*   ✅ Product card 4 - Starts Here 👇 */}
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="https://img.freepik.com/free-photo/programming-background-collage_23-2149901764.jpg?t=st=1713074063~exp=1713077663~hmac=9cc94e9aa2b430baa1e00075c713dab005e91eaca3a7157efae722aa0332dfbe&w=900"
                alt="Product"
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Gym Website Template
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    0
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">
                      Rs.199/-
                    </p>
                  </del>
                  <div className="ml-auto">
                    Preview
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/*   🛑 Product card 4 - Ends Here  */}
          {/*   ✅ Product card 5 - Starts Here 👇 */}
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="https://img.freepik.com/free-photo/nutritional-counter-app-composition-high-angle_23-2149880624.jpg?t=st=1713074198~exp=1713077798~hmac=5bcc6bb48408145404d6524b23f3fa6d0ab28fff53f7e3c0d5556dc8c6ef229f&w=900"
                alt="Product"
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Diet Template
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    Rs.0/-
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">
                      Rs.199/-
                    </p>
                  </del>
                  <div className="ml-auto">
                   Preview
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/*   🛑 Product card 5 - Ends Here  */}
          {/*   ✅ Product card 6 - Starts Here 👇 */}
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="https://img.freepik.com/free-photo/view-nutritional-counter-app-composition_23-2149880612.jpg?t=st=1713074241~exp=1713077841~hmac=49142aab307858c567876a6fc9387bcd1000074c252eff69f4e3cd8efa4fad3d&w=900"
                alt="Product"
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Product Template
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    Rs.0/-
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">
                      Rs.199/-
                    </p>
                  </del>
                  <div className="ml-auto">
                   Preview
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/*   🛑 Product card 6 - Ends Here  */}
        </section>
        {/* 🛑 Grid Section - Ends Here */}
        {/* credit */}
        <div className="text-center py-10 px-10">
        
        </div>
        {/* Support Me 🙏🥰 */}
      </>
    </div>
  );
};

export default templatesearch;
