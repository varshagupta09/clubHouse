"use client";
import { useFormik } from "formik";
import * as Yup from "yup";

import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";

import { MdLockOutline } from "react-icons/md";
import useAppContext from "@/context/AppContext";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Login = () => {
  const loginValidationScheme = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email in Invalid"),
    password: Yup.string().required("Password is required"),
  });

  const { setCurrentUser, setLoggedIn } = useAppContext();
  const router = useRouter();

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);

      fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/authenticate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            toast.success("Login Successful");
            response.json()
              .then((data) => {
                console.log(data);
                setCurrentUser(data);
                setLoggedIn(true);
                sessionStorage.setItem("user", JSON.stringify(data));
                resetForm();
                if (data.role === "admin") {
                  router.push("/admin/add-template");
                } else {
                  router.push("/");
                }
              })
          } else {
            toast.error("Login Failed");
          }
        })
        .catch((err) => {
          console.log(err);
        });

    },
    validationSchema: loginValidationScheme,
  });

  return (
    <>
      <div className="flex fle-col items-center justify-center min-h-screen py-2 " style={{ background: "#CADCFC" }}>
        <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="bg-white rounded-2xl shadow-2xl flex max-w-4xl">
            {/* form */}
            <form onSubmit={loginForm.handleSubmit}>
              <div className="p-10">
                <h2 className="text-3xl font-bold mb-2" style={{ color: "#00246B" }}>LOGIN</h2>
                <div className="border-2 w-10 border-cyan-950 inline-block mb-2" style={{ border: "2px solid #00246B" }}></div>
                {/* Social Icons */}
                <div className="flex justify-center my-2">
                  <a
                    href="#"
                    className="border-2 border-gray-200 rounded-full p-3 mx-1"
                  >
                    <FaFacebookF className="text-sm text-blue-700" />
                  </a>
                  <a
                    href="#"
                    className="border-2 border-gray-200 rounded-full p-3 mx-1"
                  >
                    <FaLinkedinIn className="text-sm text-blue-700" />
                  </a>
                  <a
                    href="#"
                    className="border-2 border-gray-200 rounded-full p-3 mx-1"
                  >
                    <FaGoogle className="text-sm text-blue-700" />
                  </a>
                </div>

                <p className="text-blue-500 my-3">or use your email account</p>

                <div className="flex flex-col items-center  ">
                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-2">
                    <FaRegEnvelope className="text-gray-400 mr-2" />
                    <input
                      type="email"
                      name="email"
                      onChange={loginForm.handleChange}
                      value={loginForm.values.email}
                      placeholder="Email"
                      className="bg-gray-100 outline-none text-sm flex-1"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center  ">
                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-2">
                    <MdLockOutline className="text-gray-400 mr-2" />
                    <input
                      type="password"
                      name="password"
                      onChange={loginForm.handleChange}
                      value={loginForm.values.password}
                      placeholder="Password"
                      className="bg-gray-100 outline-none text-sm flex-1"
                    />
                  </div>
                  <div className="flex justify-between w-64 mb-5">
                    <lable className="flex items-center text-xs text-blue-500">
                      <input
                        type="checkbox"
                        name="remember"
                        className=" mr-1 bg-white "
                      />{" "}
                      Remember me
                    </lable>
                    <a href="#" className="text-xs text-blue-500 ">
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <button
                  type="submit"
                  className="border-2 border-blue-950 text-blue-950 rounded-full  py-2 px-12 inline-block font-semibold hover:bg-blue-950 hover:text-white "
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
