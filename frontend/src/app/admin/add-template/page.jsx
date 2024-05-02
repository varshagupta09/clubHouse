"use client";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Link from "next/link";
const addtemplateSchema = Yup.object().shape({});

import toast from "react-hot-toast";

const TEMPLATE_CATEGORIES = [
  "E-commerce",
  "Portfolio",
  "Dashboard",
  "Blog",
  "Form",
  "Landing Page",
  "Others"
]

const TEMPLATE_FRAMEWORKS = [
  "React Native",
  "Next.js",
  "Gatsby",
  "Remix",
  "Vite"
]

const Addtemplate = () => {
  const router = useRouter();
  const [selFile, setSelFile] = useState("");
  const [selImage, setSelImage] = useState("");

  const addtemplateForm = useFormik({
    initialValues: {
      template: "",
      description: "",
      category: "E-commerce",
      framework: "Next.js",
      tags: "",
      purpose: "",
      feature: "",
    },

    onSubmit: async (values, action) => {
      values.image = selImage;
      values.template = selFile;
      console.log(values);
      const res = await fetch("http://localhost:5500/template/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });
      console.log(res.status);
      if (res.status === 200) {
        toast.success("Template added successfully!");
        action.resetForm();
      } else {
        toast.error("Something went wrong");
      }
    },
    validationSchema: addtemplateSchema,
  });

  const uploadTemplateFile = async (e) => {
    let file = e.target.files[0];
    const fd = new FormData();
    fd.append('myfile', file);

    const res = await fetch('http://localhost:5500/util/uploadfile', {
      method: 'POST',
      body: fd
    })
    const { savedFile } = await res.json();
    setSelFile(savedFile);
    console.log(res.status);
  }

  const uploadPreviewImage = async (e) => {
    let file = e.target.files[0];
    const fd = new FormData();
    fd.append('myfile', file);

    const res = await fetch('http://localhost:5500/util/uploadfile', {
      method: 'POST',
      body: fd
    })
    const { savedFile } = await res.json();
    setSelImage(savedFile);
    console.log(res.status);
  }

  return (
    <>
      {/* component */}

      <div
        className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 "
      style={{ background: "#CADCFC" }}
      >
        <div className="absolute  " />
        <div className="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
          <div className="text-center">
            <h2 className="mt-5 text-3xl font-bold text-gray-900">
              Template Upload!
            </h2>
            <p className="mt-3 pt-3 text-sm text-gray-400">
              Lorem ipsum is placeholder text.
            </p>
          </div>
          <form
            className="mt-8 space-y-3"
            onSubmit={addtemplateForm.handleSubmit}
          >
            <div className="grid grid-cols-1 space-y-2">
              <label className="text-sm font-bold text-gray-500 tracking-wide">
                Template Name
              </label>
              <input
                name="title"
                onChange={addtemplateForm.handleChange}
                value={addtemplateForm.values.title}
                className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 bg-white"
                type="text"
                placeholder="Add Title that describes your template"
              />
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <label className="text-sm font-bold text-gray-500 tracking-wide">
                Description
              </label>
              <textarea
                className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 bg-white"
                cols={4}
                name="description"
                onChange={addtemplateForm.handleChange}
                value={addtemplateForm.values.description}
                placeholder="Template Description"
              ></textarea>
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <label className="text-sm font-bold text-gray-500 tracking-wide">
                Category
              </label>
              <select
                name="category"
                onChange={addtemplateForm.handleChange}
                value={addtemplateForm.values.category}
                className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 bg-white"
              >
                {TEMPLATE_CATEGORIES.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <label className="text-sm font-bold text-gray-500 tracking-wide">
                Tags
              </label>
              <input
                name="tags"
                onChange={addtemplateForm.handleChange}
                value={addtemplateForm.values.tags}
                className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 bg-white"
                type="text"
                placeholder="Add related tags"
              />
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <label className="text-sm font-bold text-gray-500 tracking-wide">
                Upload Template File
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                  <div className="h-full w-full text-center flex flex-col items-center justify-center ">
                    <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                      <img
                        className="has-mask h-36 object-center"
                        src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                        alt="freepik image"
                      />
                    </div>
                    <p className="pointer-none text-gray-500 ">
                      <span className="text-sm">Drag and drop</span> files here{" "}
                      <br /> or{" "}
                      <span
                        href="#"
                        id=""
                        className="text-blue-600 hover:underline"
                      >
                        select a file
                      </span>{" "}
                      from your computer
                    </p>
                  </div>
                  <input type="file" className="hidden" onChange={uploadTemplateFile} />
                </label>
              </div>
              <p className="text-sm text-gray-300">
                <span>File type: doc,pdf,types of images</span>
              </p>
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <label className="text-sm font-bold text-gray-500 tracking-wide">
                Upload Preview Image
              </label>

              <p className="text-xs">
                Upload a picture that shows what's in your template. A good
                template stands out and draws viewers' attention
              </p>
              <div>
                <div className="flex w-full">
                  <div
                    className=" file_upload pt-3 relative border-4 border-dotted border-gray-300 rounded-lg"
                    style={{ width: 200, height: 200 }}
                  >
                    <svg
                      className="text-blue-500 w-24 mx-auto mb-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <div className="input_field flex flex-col w-max mx-auto text-center">
                      <div>

                        <div className="text bg-blue-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-blue-500">
                          Select
                          <input
                            className="text-sm cursor-pointer w-36"
                            type="file"
                            onChange={uploadPreviewImage}
                          />
                        </div>
                      </div>
                      <div className="title text-blue-500 uppercase">
                        or drop files here

                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <label className="text-sm font-bold text-gray-500 tracking-wide">
                Framework Compatibility:
              </label>
              <select
                name="framework"
                onChange={addtemplateForm.handleChange}
                value={addtemplateForm.values.framework}
                className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 bg-white"
              >
                {TEMPLATE_FRAMEWORKS.map((framework) => (
                  <option key={framework} value={framework}>
                    {framework}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 space-y-2">
              <label className="text-sm font-bold text-gray-500 tracking-wide">
                Instructions
              </label>
              <input
                name="instruction"
                onChange={addtemplateForm.handleChange}
                value={addtemplateForm.values.instruction}
                className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-white"
                type="textarea"
                placeholder=""
              />
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <Link href="/termsAndConditions"><label className="text-sm  text-blue-500 tracking-wide hover:underline">
                Terms and Conditions
              </label></Link>

            </div>
            <div>
              <button
                type="submit"
                className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
                              font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
              >
                Upload Template
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Addtemplate;
