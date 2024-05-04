import React from "react";
import Link from "next/link";

const adminDashboard = () => {
  return (
    <div>
      
<nav className="fixed top-0 z-50 w-full bg-gray-300 border-b border-gray-400" >
  <div className="px-3 py-3 lg:px-5 lg:pl-3">
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start rtl:justify-end">
        <button
          data-drawer-target="logo-sidebar"
          data-drawer-toggle="logo-sidebar"
          aria-controls="logo-sidebar"
          type="button"
          className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            />
          </svg>
        </button>
        <a href="#" className="flex ms-2 md:me-24">
          <img
            src="/ReactUIHub_Logo.png"
            className="h-14 me-3"
            alt="FlowBite Logo"
          />
          <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
            ReactUIHub
          </span>
        </a>
      </div>

      <div className="w-full">
        <form className="max-w-md mx-auto ">
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
              className="block w-full p-2 ps-8 text-sm text-gray-100 border border-gray-300 rounded-lg bg-gray-500 focus:ring-gray-500 focus:border-gray-500    dark:text-white "
              placeholder="Search Templates..."
              required=""
            />
          </div>
        </form>
      </div>
      <div className="flex items-center">
        <div className="flex items-center ms-3">
          <div>
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              aria-expanded="false"
              data-dropdown-toggle="dropdown-user"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="user photo"
              />
            </button>
          </div>
          <div
            className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
            id="dropdown-user"
          >
            <div className="px-4 py-3" role="none">
              <p className="text-sm text-gray-900 dark:text-white" role="none">
                User Name
              </p>
              <p
                className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                role="none"
              >
                usermainid@flowbite.com
              </p>
            </div>
            <ul className="py-1" role="none">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>



      <div className="flex w-full ">
        <div style={{ display: "flex", width: "100%" }}>
          <div
            id="logo-sidebar"
            className=" z-40 w-64 h-screen pt-20 transition-transform -translate-x-full border-r bg-gray-50 border-gray-200 sm:translate-x-0  "
            aria-label="Sidebar"
          >
            <div
              className="h-full p-4 overflow-y-auto  "
             
            >
              <ul className="space-y-2 font-medium">
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-600 hover:text-white group"
                  >
                    <svg
                      className="w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 21"
                    >
                      <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                      <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                    </svg>
                    <span className="ms-3">Dashboard</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-600 hover:text-white group"
                  >
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 18"
                    >
                      <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                    </svg>
                    <Link href="/admin/template-management">
                      <span className="flex-1 ms-3 whitespace-nowrap">
                        Templates Management
                      </span>
                    </Link>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-600 hover:text-white group"
                  >
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap">
                    <Link href={"/admin/analytics"}>Analytics</Link>
                      
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-600 hover:text-white group"
                  >
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap">
                    <Link href={"/admin/users"}>Users</Link>

                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-600 hover:text-white group"
                  >
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 20"
                    >
                      <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Log Out
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="p-4 w-full mt-14 bg-gray-50"
          >
            <div className="p-4 text-2xl font-semibold text-gray-700 ">
              <h1>Admin Dashboard</h1>
            </div>

            <div
              className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-10 p-3 "
             
            >
              <div
                className="flex items-center justify-center border-2  rounded border-gray-200 bg-gray-100 "
                
              >
                <div className=" flex items-center justify-center border-2 border-dashed border-gray-200 px-5 py-2 my-5">
                  <label className="flex flex-col group text-center ">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <div className="h-full w-full text-center flex flex-col items-center justify-center ">
                        <div className="flex flex-auto max-h-48 w-full mx-auto -mt-10 ">
                          <img
                            className="has-mask h-48 object-center"
                            src={"/upload.png"}
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="w-48 text-center flex flex-col items-center justify-center p-2 bg-white border border-gray-200 rounded-sm">
                        <p className="pointer-none text-gray-600 ">
                          <Link href={"/admin/add-template"}>  Upload Template</Link>
                        
                        </p>
                      </div>
                    </div>

                    <input
                      name="uploadtemplatefiles"
                      type="file"
                      className="hidden"
                    />
                  </label>
                </div>
                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 "></p>
                </div>
              </div>
              <div
                className=" p-10 border-2 text-gray-600 rounded border-gray-200 bg-gray-100   items-center justify-center "
              
              >
                <div className="block max-w-sm  ">
                  <h5 className=" text-xl font-bold tracking-tight ">
                    Analytics
                  </h5>
                  <p className="font-normal text-sm">
                    Current User <span className="text-xl">- 1000</span>
                  </p>
                </div>
                <hr className="h-px my-4 bg-gray-400 border-0  w-full" />

                <div className="block max-w-sm ">
                  <h5 className="font-bold tracking-tight text-gray-900 ">
                    Summury
                  </h5>
                  <div className="grid ">
                    <div class="col-start-1 col-end-3 mb-3">02</div>
                    <div class="col-end-7 col-span-2 mb-3">03</div>
                    <div class="col-start-1 col-end-3 mb-3">02</div>
                    <div class="col-end-7 col-span-2 ">03</div>
                  </div>
                </div>
                <hr className="h-px my-4 bg-gray-400 border-0  w-full" />
              </div>
              <div className=" p-10 border-2  text-gray-900 rounded border-gray-200 bg-gray-100 ">
                  <div className="block max-w-sm p-1 rounded-lg text-white  " >
                    <h2></h2>
                    <h5 className=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#" className=" underline text-blue-700">
                        Learn More
                      </a>
                    </h5>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>


 </div>
  );
};

export default adminDashboard;
