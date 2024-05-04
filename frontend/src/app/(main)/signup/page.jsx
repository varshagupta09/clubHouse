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
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required")
    .matches(/[A-Z]/, "Password must contain uppercase letters")
    .matches(/\W/, "Password must contain special characters"),
  cpassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const Signup = () => {
  const router = useRouter();

  const SignupForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      cpassword: "",
    },
    onSubmit: async (values, action) => {
      console.log(values);

      try {
        const res = await fetch("http://localhost:5500/user/add", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log(res.status);

        if (res.status === 200) {
          alert("Signup successful");
          router.push("/seller/login");
        } else {
          alert("Error");
        }
      } catch (error) {
        console.error("Error:", error);
      }

      action.resetForm();
    },
    validationSchema: SignupSchema
  });

  return (
    <>
      <div className="flex fle-col items-center justify-center min-h-screen py-2 " style={{ background: "#CADCFC" }}>
        <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className=" rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
              {/* image */}
              <div className="w-1/2 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
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
                <form onSubmit={SignupForm.handleSubmit}>
                <div className="flex flex-col items-center  ">
                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-2">
                    <FaRegUser className="text-gray-400 mr-2" />
                    <input
                      type="name"
                      name="name"
                      placeholder="Name"
                      value={SignupForm.values.name}
                      onChange={SignupForm.handleChange}
                      onBlur={SignupForm.handleBlur}
                      className="bg-gray-100 outline-none text-sm flex-1"
                    />
                  </div>
                  {SignupForm.touched.name && SignupForm.errors.name ? (
                    <div className="text-red-500 text-sm">{SignupForm.errors.name}</div>
                  ) : null}
                </div>
                <div className="flex flex-col items-center  ">
                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-2">
                    <FaRegEnvelope className="text-gray-400 mr-2" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={SignupForm.values.email}
                      onChange={SignupForm.handleChange}
                      onBlur={SignupForm.handleBlur}
                      className="bg-gray-100 outline-none text-sm flex-1"
                    />
                  </div>
                  {SignupForm.touched.email && SignupForm.errors.email ? (
                    <div className="text-red-500 text-sm">{SignupForm.errors.email}</div>
                  ) : null}
                </div>

                <div className="flex flex-col items-center  ">
                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-2">
                    <MdLockOutline className="text-gray-400 mr-2" />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={SignupForm.values.password}
                      onChange={SignupForm.handleChange}
                      onBlur={SignupForm.handleBlur}
                      className="bg-gray-100 outline-none text-sm flex-1"
                    />
                  </div>
                  {SignupForm.touched.password && SignupForm.errors.password ? (
                    <div className="text-red-500 text-sm">{SignupForm.errors.password}</div>
                  ) : null}
                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-2">
                    <MdLockOutline className="text-gray-400 mr-2" />
                    <input
                      type="password"
                      name="cpassword"
                      placeholder="Confirm Password"
                      value={SignupForm.values.cpassword}
                      onChange={SignupForm.handleChange}
                      onBlur={SignupForm.handleBlur}
                      className="bg-gray-100 outline-none text-sm flex-1"
                    />
                  </div>
                  {SignupForm.touched.cpassword && SignupForm.errors.cpassword ? (
                    <div className="text-red-500 text-sm">{SignupForm.errors.cpassword}</div>
                  ) : null}
                  <div className="flex justify-between w-64 mb-5">
                    <label className="flex items-center text-xs text-blue-500">
                      <input
                        type="checkbox"
                        name="remember"
                        className=" mr-1 bg-white "
                      />{" "}
                      Remember me
                    </label>
                    <a href="#" className="text-xs text-blue-500 ">
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <button
                  type="submit"
                  className="border-2 border-cyan-950 text-blue-950 rounded-full  py-2 px-12 inline-block font-semibold hover:bg-blue-950 hover:text-white " 
                >
                  Sign Up
                </button> 
                {/* Todo : fix this signup button, it's not working */}
                </form>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
