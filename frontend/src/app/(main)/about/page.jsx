// AboutUsPage.js

import React from "react";

const AboutUsPage = () => {
  return (
    <section style={{ background: "#CADCFC" }}>
      <div className=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-none">
                Welcome to ReactUIHub!
              </h2>
              <p className="text-base text-gray-600 tracking-wide ">
                We're dedicated to simplifying your React development journey.
                Our platform offers a curated selection of high-quality React
                templates, empowering developers of all levels to create
                stunning web applications effortlessly. Whether you're a
                seasoned pro or just getting started, ReactUIHub provides the
                tools, resources, and community support you need to succeed.
                Join our vibrant community and discover the perfect template for
                your project, collaborate with like-minded developers, and
                elevate your skills with valuable tutorials and insights. At
                ReactUIHub, we're committed to helping you unlock your full
                potential and build exceptional web experiences with React.
                Welcome to the future of React development!
              </p>
            </div>
            <p className="mb-4 text-lg font-bold tracking-widest uppercase text-gray-800  mt-5">
              Features
            </p>
            <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
              <ul className="space-y-3 text-gray-600 tracking-wide  ">
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth={4}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  User-Friendly Interface
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth={4}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Community Collaboration
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth={4}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Comprehensive Documentation
                </li>
              </ul>
              <ul className="space-y-3 text-gray-600 tracking-wide ">
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth={4}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Responsive Design
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth={4}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Continuous Updates{" "}
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth={4}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Feedback and Reviews{" "}
                </li>
              </ul>
            </div>
            <div className="max-w-xl mb-6 mt-5">
              <h2 className="mb-4 text-lg font-bold tracking-widest  text-gray-800 mt-5">
                Vision for the Future:
              </h2>

              <p className="text-base text-gray-600 tracking-wide ">
                Our vision for ReactUIHub is to become the premier platform for
                React developers worldwide, offering innovative tools,
                resources, and community support. We aim to empower developers
                of all levels to create exceptional web experiences
                effortlessly, driving forward the boundaries of what's possible
                with React.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="/aboutus.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
