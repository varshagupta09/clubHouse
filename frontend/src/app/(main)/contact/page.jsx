// ContactUsPage.js

import React from 'react';

const ContactUsPage = () => {
  return (
    <section className='bg-gray-50'>
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-gray-900">
        Contact Us
      </h2>
     
      <form action="#" className="space-y-8">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="name@reactuihub.com"
            required=""
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="block p-3 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Let us know how we can help you"
            required=""
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows={6}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-gra-500 dark:placeholder-gray-400 dark:text-gray-900  "
            placeholder="Leave a comment..."
            defaultValue={""}
          />
        </div>
        <button
          type="submit"
          className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-900 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-gray-300   "
        >
          Send message
        </button>
      </form>
    </div>
  </section>
  


  
  );
};



export default ContactUsPage;