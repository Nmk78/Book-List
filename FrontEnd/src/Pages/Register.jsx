import React, { useState } from "react";
import { useRegister } from "../Hooks/useRegister";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, isLoading, error } = useRegister();

  const submitHandler = async (e) => {
    e.preventDefault();
    await register(email, password);
  };

  return (
    <form
      className="h-full w-3/4 lg:w-2/6 flex flex-col items-center justify-center lg:justify-self-start mx-auto "
      onSubmit={submitHandler}
    >
      <div className="text-xl md:text-3xl my-5 text-sky-600 font-bold text-start">
        Uplaod your own reviews.
      </div>
      <div className="h-auto pb-40">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="email"
            id="email"
            className="block py-1.5 px-0 w-full text-2xl text-blue-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-blue-700 font-bold dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required={true}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label
            htmlFor="email"
            className="peer-focus:font-xl absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="password"
            name="password"
            id="password"
            className="block py-1.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-blue-700 font-bold dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required={true}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <label
            htmlFor="password"
            className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        {error && (
          <p
            className="bg-red-100 border-t border-b border-red-500 text-blue-700 px-4 py-3"
            role="alert"
          >
            {error}
          </p>
        )}
        <button
          type="submit"
          className=" mt-2 text-white bg-gray-400 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-blue-800"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default Register;
