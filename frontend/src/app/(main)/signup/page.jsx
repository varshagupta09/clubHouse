'use client'
import React from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'Yup';

const Signup = () => {

  const passwordRegex = new RegExp (
    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
  );

const signUpValidationSchema = Yup.object().shape({
  name: Yup.string().min(5).required("Full name is requireds"),
  email : Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string().min(8, 'too short')
  .matches(passwordRegex, "Please enter valid password")
  .required("Please enter your password"),
  confirmPassword : Yup.string()
  .oneOf([Yup.ref("password")], "Password do Not maatch")
  .required("Please enter confirm password."),
});

  const signupForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      fetch("http://localhost:5500/post/add", {
        method: "POST",
        body: JSON.stringify(values),
        header: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          console.log(response.status);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(values);
    },
    validationSchema : signUpValidationSchema

  });


  return (
    <>
      <div
        className="flex items-center justify-center "
        style={{
          backgroundSize: "cover",
          height: "100%",
        }}
      >
        <div className="flex border rounded-xl ">
          <div
            className="bg-white w-96"
            style={{
              backgroundSize: "cover",
              height: "80vh",
              width: "100%",
              backgroundImage: `url("https://img.freepik.com/free-vector/employer-meeting-job-applicant-pre-employment-assessment-employee-evaluation-assessment-form-report-performance-review-concept-illustration_335657-2058.jpg?t=st=1711729606~exp=1711733206~hmac=43ff0a2d0c6404d9b9de438f8e3ffda78fb3f1e0d89f58a485b784ebc518c8aa&w=1800")`,
            }}
          ></div>
          <div className="  w-96  bg-white p-5 rounded-xl  " style={{}}>
            <h3>Signup</h3>
            <div className="mt-8">
              <form className="space-y-6" action="">
                <div>
                  <label
                    htmlFor=""
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    id="name"
                    onChange={signupForm.handleChange}
                    value={signupForm.values.name}
                    className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email Id
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    onChange={signupForm.handleChange}
                    value={signupForm.values.email}
                    className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    onChange={signupForm.handleChange}
                    value={signupForm.values.password}
                    className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    id="cpassword"
                    onChange={signupForm.handleChange}
                    value={signupForm.values.cpassword}
                    className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>

                <div>
                  <div className="d-flex justify-content-end pt-3">
                    <button type="submit" className="btn btn-primary ms-2">
                      Submit form
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
