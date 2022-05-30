import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface FormInput {
  email: string;
}

type errorState = {
  error: {
    status: number
    message: string
  }
}
const INITIAL_STATE: errorState = {
  error: {
    status: 0,
    message: ""
  }
}

const Login = () => {
  const navigate = useNavigate();
  const [Error, setError] = useState<errorState>(INITIAL_STATE);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const checkEmail = (email: string) => {
     const credentials = {
      email: email,
      password: "123456",
     }
    return fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
}

  const onSubmit = (data: FormInput) => {
    const response = checkEmail(data.email);
    response.then(res => {
      if (res.status === 200) {
        setError({
          error: {
            status: 200,
            message: "Success"
        }});
        return res.json();
      } else {
        setError({
          error: {
            status: res.status,
            message: res.statusText
        }});
      }
    }).then(res => {
      localStorage.setItem("token", res.accessToken);
      localStorage.setItem("user", JSON.stringify(res.user));
      navigate("/", { replace: true });
    })
    // if (data.username === "bill") {
    //   alert(JSON.stringify(data));
    // } else {
    //   alert("There is an error");
    // }
  };

  return (
    <div className="flex justify-center mt-40 fm:mt-10 justify-items-center content-center justify-self-center place-content-center">
      <div className="rounded-xl bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6 sm:w-1/2 fm:w-full dark:bg-gray-800">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email address
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              placeholder="pedro@kantar0.dev"
            />
            {errors.email && errors.email.type === "required" && (
              <div
                className="p-4 mb-4 mt-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                role="alert"
              >
                <span className="font-medium">Error!</span> You must enter your email.
              </div>
            )}
            {Error.error.status === 400 && (<div
                className="p-4 mb-4 mt-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                role="alert"
              >
                <span className="font-medium">Error {Error.error.status} {Error.error.message}!</span> Email not found.
              </div>)}
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
