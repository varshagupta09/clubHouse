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
import toast from "react-hot-toast";

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
  const signupForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      cpassword: "",
    },
    onSubmit: async (values, action) => {
      console.log(values);

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/add`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.status);
      action.resetForm();

      if (res.status === 200) {
        toast.success("User Registered Successfully");
        router.push("/login");
      } else {
        toast.error("User Registration Failed");
        console.log("User Registration Failed");
      }
    },
    // validationSchema: SignupSchema
  });

  return (
    <>
      <div className="flex fle-col items-center justify-center min-h-screen py-2 bg-gray-100">
        <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
            {/* form */}
            <form onSubmit={signupForm.handleSubmit}>
              <div className="w-1/2 p-5 ">
                <div className="text-left font bold">ReactUIHub</div>

                <div className="py-10 ">
                  <h2 className="text-3xl font-bold text-cyan-950 mb-2">
                    Sign In Account
                  </h2>
                  <div className="border-2 w-10 border-cyan-950 inline-block mb-2"></div>
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
                        onChange={signupForm.handleChange}
                        value={signupForm.values.name}
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
                        onChange={signupForm.handleChange}
                        value={signupForm.values.email}
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
                        onChange={signupForm.handleChange}
                        value={signupForm.values.password}
                        placeholder="Password"
                        className="bg-gray-100 outline-none text-sm flex-1"
                      />
                    </div>
                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-2">
                      <MdLockOutline className="text-gray-400 mr-2" />
                      <input
                        type="password"
                        name="cpassword"
                        onChange={signupForm.handleChange}
                        value={signupForm.values.cpassword}
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
                  <button
                    type="submit"
                    className="border-2 border-cyan-950 text-cyan-950 rounded-full  py-2 px-12 inline-block font-semibold hover:bg-cyan-950 hover:text-white "
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
            {/* image */}
            <div className="w-1/2 bg-cyan-950 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12> "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
