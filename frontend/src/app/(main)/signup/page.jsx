"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
  FaRegUser,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Too short")
    .max(20, "Too long")
    .required("Password is required")
    .matches(/[A-Z]/, "password must contain uppercase letters")
    .matches(/\W/, "Password must contain special characters"),
  cpassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const Signup = () => {
  const router = useRouter();
  //step1 : formik initialization
  const SignupForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      cpassword: "",
    },
    onSubmit: async (values, action) => {
      console.log(values);

      const res = await fetch("http://localhost:5500/user/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.status);
      action.resetForm();

      if (res.status === 200) {
        alert("Signup successful");
        router.push("/seller/login");
      } else {
        alert("Error");
      }
    },
    // validationSchema: SignupSchema
  });

  return (
    <>
      <div className="flex fle-col items-center justify-center min-h-screen py-2 " style={{ background: "#CADCFC" }}>
        <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className=" rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
              {/* image */}
              <div className="w-1/2 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12 > ">
              <img src="/Untitled design.gif" alt="" className="h-fit w-fit" />
            </div>
            {/* form */}
            
            <div className="w-1/2 p-5  justify-center items-center ">
              

              <div className="pt-20 my-auto ">
                <h2 className="text-3xl font-bold mb-2" style={{color:"#00246B"}}>
                  Sign In Account
                </h2>
                <div className=" w-10  inline-block mb-2" style={{border:"2px solid #00246B"}}></div>
                {/* Social Icons */}
                <div className="flex justify-center my-2">
                  <a
                    href="#"
                    className="border-2 border-gray-200 rounded-full p-3 mx-1"
                  >
                    <FaFacebookF className="text-sm" />
                  </a>
                  <a
                    href="#"
                    className="border-2 border-gray-200 rounded-full p-3 mx-1"
                  >
                    <FaLinkedinIn className="text-sm" />
                  </a>
                  <a
                    href="#"
                    className="border-2 border-gray-200 rounded-full p-3 mx-1"
                  >
                    <FaGoogle className="text-sm" />
                  </a>
                </div>

                <p className="text-gray-400 my-3">or use your email account</p>
                <div className="flex flex-col items-center  ">
                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-2">
                    <FaRegUser className="text-gray-400 mr-2" />
                    <input
                      type="name"
                      name="name"
                      placeholder="Name"
                      className="bg-gray-100 outline-none text-sm flex-1"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center  ">
                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-2">
                    <FaRegEnvelope className="text-gray-400 mr-2" />
                    <input
                      type="email"
                      name="email"
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
                      placeholder="Password"
                      className="bg-gray-100 outline-none text-sm flex-1"
                    />
                  </div>
                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-2">
                    <MdLockOutline className="text-gray-400 mr-2" />
                    <input
                      type="password"
                      name="password"
                      placeholder="Confirm Password"
                      className="bg-gray-100 outline-none text-sm flex-1"
                    />
                  </div>
                  <div className="flex justify-between w-64 mb-5">
                    <lable className="flex items-center text-xs">
                      <input
                        type="checkbox"
                        name="remember"
                        className=" mr-1 bg-white"
                      />{" "}
                      Remember me
                    </lable>
                    <a href="#" className="text-xs ">
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <a
                  href="#"
                  className="border-2 border-cyan-950 text-blue-950 rounded-full  py-2 px-12 inline-block font-semibold hover:bg-blue-950 hover:text-white " 
                >
                  Sign Up
                </a>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
