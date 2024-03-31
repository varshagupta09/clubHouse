import React from "react";

const Login = () => {
  return (
    <div
      className="flex items-center justify-center "
      style={{
        backgroundSize: "cover",
        height: "100vh",
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
          <h3>Login</h3>
          <div className="mt-8">
            <form className="space-y-6" action="">
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
                  className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div class="flex items-start mb-6">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  for="remember"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  I agree with the terms and conditions.
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
