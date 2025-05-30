import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white shadow-md w-full">
        <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
          Create your <span className="text-[#7747ff]">App</span> account
        </div>
        <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
          Sign up to get started
        </div>
        <form className="flex flex-col gap-3">
          <div className="block relative">
            <label
              htmlFor="username"
              className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            />
          </div>
          <div className="block relative">
            <label
              htmlFor="email"
              className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            />
          </div>
          <div className="block relative">
            <label
              htmlFor="password"
              className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            />
          </div>
          <button
            type="submit"
            className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
          >
            Sign Up
          </button>
        </form>
        <div className="text-sm text-center mt-[1.6rem]">
          Already have an account?{" "}
          <Link to={"/login"} className="text-sm text-[#7747ff]" href="#">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
