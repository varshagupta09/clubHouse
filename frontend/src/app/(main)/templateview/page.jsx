import React from 'react'

const templateview = () => {
  return (
    <div>
      <div className="font-[sans-serif]  ">
        <div className="p-10 lg:max-w-full max-w-2xl max-lg:mx-auto items-center justify-center">
          <div className="grid  grid-cols-1 lg:grid-cols-2 gap-10 p-5   ">
            <div className="w-full lg:sticky top-0 text-center ">
              <div className="lg:h-[350px]">
                <img
                  src="https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2022/04/React-Portfolio-Template.png"
                  alt="Product"
                  className=" w-md rounded-xl object-cover object-top "
                />
              </div>
              <div className=''>
                <div className="flex flex-wrap items-start gap-4 ">
                  <div>
                    <h2 className="text-2xl font-extrabold text-white">
                      Template Name
                    </h2>
                    <p className="text-sm text-white mt-2">Description</p>
                  </div>

                </div>

                <hr className="my-8" />
                <div>
                  <h3 className="text-lg font-bold text-white">Choose a framework</h3>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <button
                      type="button"
                      className="p-2 border-2 hover:border-gray-800 font-bold text-sm rounded-lg flex items-center justify-center shrink-0"
                    >
                      React Native
                    </button>
                    <button
                      type="button"
                      className="p-2 border-2 hover:border-gray-800 font-bold text-sm rounded-lg flex items-center justify-center shrink-0"
                    >
                      Next.js
                    </button>
                    <button
                      type="button"
                      className="p-2 border-2 hover:border-gray-800 font-bold text-sm rounded-lg flex items-center justify-center shrink-0"
                    >
                      Gatsby
                    </button>
                    <button
                      type="button"
                      className="p-2 border-2 hover:border-gray-800 font-bold text-sm rounded-lg flex items-center justify-center shrink-0"
                    >
                      Vite
                    </button>
                    <button
                      type="button"
                      className="p-2 border-2 hover:border-gray-800 font-bold text-sm rounded-lg flex items-center justify-center shrink-0"
                    >
                      Remix
                    </button>
                  </div>
                </div>
                <hr className="my-8" />

                <div className="flex flex-wrap gap-4">

                  <button
                    type="button"
                    className=" px-4 py-2.5 border border-white bg-transparent text-white text-sm font-bold rounded"
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
            <div className=" max-w-4xl">
              <ul className="flex border-b">
                <li className="text-gray-800 font-bold text-sm bg-gray-100 py-3 px-8 border-b-2 border-gray-800 cursor-pointer transition-all">
                  Description
                </li>
                <li className="text-gray-400 font-bold text-sm hover:bg-gray-100 py-3 px-8 cursor-pointer transition-all">
                  Reviews
                </li>
              </ul>
              <div className="mt-8">
                <h3 className="text-lg font-bold text-white">Product Description</h3>
                <p className="text-sm text-gray-400 mt-4">
                  Elevate your casual style with our premium men's t-shirt. Crafted for
                  comfort and designed with a modern fit, this versatile shirt is an
                  essential addition to your wardrobe. The soft and breathable fabric
                  ensures all-day comfort, making it perfect for everyday wear. Its
                  classic crew neck and short sleeves offer a timeless look.
                </p>
              </div>
              <ul className="space-y-3 list-disc mt-6 pl-4 text-sm text-gray-400">
                <li>
                  A gray t-shirt is a wardrobe essential because it is so versatile.
                </li>
                <li>
                  Available in a wide range of sizes, from extra small to extra large,
                  and even in tall and petite sizes.
                </li>
                <li>
                  This is easy to care for. They can usually be machine-washed and dried
                  on low heat.
                </li>
                <li>
                  You can add your own designs, paintings, or embroidery to make it your
                  own.
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default templateview