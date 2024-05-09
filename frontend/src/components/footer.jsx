import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 shadow">
  <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <a
        href="https://flowbite.com/"
        className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
      >
        <img
          src="/ReactUIHub_Logo.png"
          className="h-16 mr-3"
          alt="ReactUIHub Logo"
        />
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
          ReactUIHub
        </span>
      </a>
      <ul className="flex flex-wrap items-center mb-6 font-medium  sm:mb-0 text-white">
        <li>
          <Link href={"/about"} className="md:hover:text-blue-500 me-4 md:me-6 ">
            About
          </Link>
        </li>
        <li>
          <a href="/terms-and-conditions" className="md:hover:text-blue-500 me-4 md:me-6">
            Terms & Conditions
          </a>
        </li>
        <li>
          <a href="/template-search" className="md:hover:text-blue-500 me-4 md:me-6">
            Templates
          </a>
        </li>
        <li>
          <a href={"/contact"} className="md:hover:text-blue-500">
            Contact
          </a>
        </li>
      </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm  sm:text-center text-white">
      © 2023{" "}
      <a href="https://flowbite.com/" className="hover:underline">
        Flowbite™
      </a>
      . All Rights Reserved.
    </span>
  </div>
</footer>

  );
};

export default Footer;
