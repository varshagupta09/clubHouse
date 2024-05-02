'use client';
import React, { useState } from 'react'

const AdminProfile = () => {
  const [rating, setRating] = useState(0)


  return (
    <>
      {/* component */}
      <section >
        <div className=" text-white pb-20 pt-11" style={{ background: "#CADCFC" }}>
         
          <div className="container mx-auto flex flex-col md:flex-row my md:my">
            <div className="flex flex-col w-full lg:w-1/3 p-8">
              {/* <p className="text-3xl text-black md:text-5xl my-4 leading-relaxed md:leading-snug">
              Leave us a feedback!
            </p> */}

              {/* <p className="text-sm text-black md:text-base leading-snug  text-opacity-100">
              Please provide your valuable feedback and something something ...
            </p> */}
              <img src="/feedback.png" alt="" />
            </div>
            <div className="flex flex-col w-full lg:w-2/3 justify-center">
              <div className="container w-full px-4">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                      <div className="flex-auto p-5 lg:p-10">
                        <h4 className="text-2xl mb-4 text-black font-semibold">
                          Have a suggestion?
                        </h4>
                        <form id="feedbackForm" action="" method="">
                          {/* <Rating /> */}
                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-gray-700 text-xs font-bold mb-2"
                              htmlFor="email"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              className="border-0 px-3 py-3 rounded text-sm shadow w-full
                bg-blue-50 placeholder-black text-gray-800 outline-none focus:bg-gray-400"
                              placeholder=" "
                              style={{ transition: "all 0.15s ease 0s" }}
                              required=""
                            />
                          </div>
                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-gray-700 text-xs font-bold mb-2"
                              htmlFor="message"
                            >
                              Message
                            </label>
                            <textarea
                              maxLength={300}
                              name="feedback"
                              id="feedback"
                              rows={4}
                              cols={80}
                              className="border-0 px-3 py-3 bg-blue-50 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                              placeholder=""
                              required=""
                              defaultValue={""}
                            />
                          </div>
                          <div className="text-center mt-6">
                            <button
                              id="feedbackBtn"
                              className="bg-blue-300 text-black text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                              type="submit"
                              style={{ transition: "all 0.15s ease 0s" }}
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>


  )
}

export default AdminProfile;