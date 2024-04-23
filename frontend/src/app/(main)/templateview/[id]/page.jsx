'use client';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const templateview = () => {

  const { id } = useParams();
  const [templateDetails, setTemplateDetails] = useState(null);

  const [selSection, setSelSection] = useState("description");

  const fetchTemplatesData = () => {
    fetch('http://localhost:5500/template/getbyid/' + id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setTemplateDetails(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchTemplatesData();
  }, [])

  const ratingForm = (rating) => {
    return 
  }

  const displayTemplate = () => {
    if (templateDetails !== null) {
      return <div className="font-[sans-serif]">
        <div className="p-10 lg:max-w-full max-w-2xl max-lg:mx-auto items-center">
          <div className="grid  grid-cols-1 lg:grid-cols-2 gap-10 p-5   ">
            <div className="w-full lg:sticky top-0 ">
              <div className="">
                <img
                  src={`${process.env.NEXT_PUBLIC_API_URL}/${templateDetails.image}`}
                  alt={templateDetails.title}
                  className="w-full rounded-xl object-cover object-top "
                />
              </div>
              <div className='mt-8'>
                <div>
                  <h2 className="text-3xl font-extrabold text-white">
                    {templateDetails.title}
                  </h2>
                  <p className="text-sm text-white mt-2">
                    {templateDetails.category}
                  </p>
                </div>

                <hr className="my-4" />
                <div>
                  <div className="flex flex-wrap gap-4 mt-4">
                    {
                      'react nextjs'.split(' ').map((tag, index) => (
                        <button
                          key={index}
                          type="button"
                          className="p-2 border-2 hover:border-gray-800 font-bold text-sm rounded-lg flex items-center justify-center shrink-0"
                        >
                          {tag}
                        </button>
                      ))
                    }
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
                <li onClick={e => setSelSection('description')} className={`${selSection === 'description' && 'border-gray-800 text-gray-800 bg-gray-100'} border-b-2 font-bold text-sm  py-3 px-8 cursor-pointer transition-all`}>
                  Description
                </li>
                <li onClick={e => setSelSection('reviews')} className={`${selSection === 'reviews' && 'border-gray-800 text-gray-800 bg-gray-100'} border-b-2 font-bold text-sm  py-3 px-8 cursor-pointer transition-all`}>
                  Reviews
                </li>
              </ul>
              {
                selSection === 'description' ? (
                  <div>
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

                ) : (
                  <div>
                    <div className="mt-8">
                      <h3 className="text-lg font-bold text-white">Reviews</h3>


                    </div>
                  </div>
                )
              }
            </div>
          </div>

        </div>
      </div>
    } else {
      return <h2>Loading...</h2>
    }
  }

  return (
    <div>
      {displayTemplate()}
    </div>
  )
}

export default templateview