"use client";
import useAppContext from "@/context/AppContext";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import StarRatings from "react-star-ratings";
import staricon from "./star.svg";
import Navbar from "@/components/navbar";
import Link from "next/link";

const templateview = () => {
  const { id } = useParams();
  const [templateDetails, setTemplateDetails] = useState(null);

  const [selSection, setSelSection] = useState("description");
  const [rating, setRating] = useState(5);
  const [reviewList, setReviewList] = useState([]);
  const { currentUser } = useAppContext();
  const reviewRef = useRef();

  const fetchTemplatesData = () => {
    fetch("http://localhost:5500/template/getbyid/" + id)
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
  };

  const fetchReviews = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/review/getbytemplate/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setReviewList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchTemplatesData();
    fetchReviews();
  }, []);

  const submitReview = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/review/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        "x-auth-token": currentUser.token,
      },
      body: JSON.stringify({
        template: id,
        rating: rating,
        review: reviewRef.current.value,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Review Added Successfully");
          response.json().then((data) => {
            console.log(data);
            fetchReviews();
          });
        } else {
          toast.error("Failed to add review");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const ratingForm = () => {
    if (currentUser !== null) {
      return (
        <div>
          <StarRatings
            rating={rating}
            starRatedColor="#00fff2"
            changeRating={setRating}
            numberOfStars={5}
            name="rating"
          />

          <textarea
            className="mt-10 text-slate-700 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 bg-white"
            rows={5}
            ref={reviewRef}
            placeholder="Write a Review..."
          ></textarea>

          <button
            type="button"
            onClick={submitReview}
            className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
          >
            Submit Review
          </button>
        </div>
      );
    } else
      return (
        <h3 className="text-gray-700">
          Please{" "}
          <span className="text-gray-700 hover:text-blue-700 hover:underline">
            {" "}
            <Link href={"/login"}>Login</Link>{" "}
          </span>{" "}
          to leave review
        </h3>
      );
  };

  const displayReviews = () => {
    return (
      <>
        <section className="text-white body-font">
          <div className="container  py-8 mx-auto">
            {reviewList.map((review) => (
              <div className="py-4 px-4   ">
                <div className=" flex items-start bg-gray-100 rounded-sm ">
                  <div className="flex-grow p-5  ">
                    <h2 className="tracking-widest text-md title-font font-medium text-gray-500 mb-1">
                      {/* {review.user.name} */}
                      username
                    </h2>
                    <div className="flex">
                      <img src={staricon} alt="" />
                      <img src={staricon} alt="" />
                      <img src={staricon} alt="" />
                      <img src={staricon} alt="" />
                      <img src={staricon} alt="" />
                    </div>
                    <p className="leading-relaxed mb-5 text-gray-900">
                      {review.review}
                    </p>
                  </div>
                  <div className="flex flex-col text-center text-gray-900 leading-none p-5">
                    <span className="font-medium text-lg text-gray-900title-font leading-none w-full">
                      {new Date(review.createdAt).toISOString().split("T")[0]}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </>
    );
  };

  const displayTemplate = () => {
    if (templateDetails !== null) {
      return (
        <div className="font-[sans-serif] bg-gray-900">
          <div className="p-10 lg:max-w-full max-w-2xl max-lg:mx-auto items-center">
            <div className="grid  grid-cols-1 lg:grid-cols-2 gap-5 p-5   ">
              <div className="w-full lg:sticky top-0 ">
                <div className="">
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}/${templateDetails.image}`}
                    alt={templateDetails.title}
                    className="w-full rounded-xl object-cover object-top"
                  />
                </div>
                <div className="mt-8">
                  <div>
                    <h2 className="text-3xl font-extrabold text-white">
                      {templateDetails.title}
                    </h2>
                    <p className="text-sm text-white mt-2">
                      {templateDetails.category}
                    </p>
                  </div>

                  <div className=" max-w-4xl mt-10">
                    <ul className="flex border-b">
                      <li
                        onClick={(e) => setSelSection("description")}
                        className={`${
                          selSection === "description" &&
                          "border-gray-800 text-gray-800 bg-gray-100 "
                        } border-b-2 font-bold text-sm  py-3 px-8 cursor-pointer transition-all`}
                      >
                        Description
                      </li>
                      <li
                        onClick={(e) => setSelSection("reviews")}
                        className={`${
                          selSection === "reviews" &&
                          "border-gray-800 text-gray-800 bg-gray-100"
                        } border-b-2 font-bold text-sm  py-3 px-8 cursor-pointer transition-all`}
                      >
                        Reviews
                      </li>
                    </ul>
                    {selSection === "description" ? (
                      <div>
                        <div className="mt-8">
                          <h3 className="text-lg font-bold text-white">
                            Product Description
                          </h3>
                          <p className="text-sm text-gray-400 mt-4">
                            {templateDetails.description}
                          </p>
                        </div>
                        <hr className="my-4" />
                      </div>
                    ) : (
                      <div>
                        <div className="mt-8">
                          <h3 className="text-lg font-bold text-white">
                            Reviews
                          </h3>

                          {ratingForm()}

                          {displayReviews()}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="  mt-40 ">
                <div className="">
                  <div className="flex flex-wrap gap-4 justify-center text-white">
                    <p>Available in:</p>
                    {"React Nextjs".split(" ").map((tag, index) => (
                      <button
                        key={index}
                        type="button"
                        className="px-3 py-1  text-white hover:border-gray-800 font-bold text-sm rounded-lg flex items-center justify-center "
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 justify-center mt-10">
                  <button
                    type="button"
                    className=" px-4 py-3 w-72 border border-gray-200 bg-white rounded text-black text-xl  font-bold "
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <h2>Loading...</h2>;
    }
  };

  return <div>{displayTemplate()}</div>;
};

export default templateview;
