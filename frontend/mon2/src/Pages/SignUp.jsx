import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const api = import.meta.env.VITE_BACKEND_URL;

const SignUp = () => {
  const [Input, setInput] = useState({
     name: "",
     email: "",
    password: ""
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setInput({ ...Input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      // Only send name and password as per backend requirements
      const payload = {
        name: Input.name,
        // username: Input.username,
        password: Input.password,
      };
      const response = await axios.post(
        // "/api/signup",
        // "http://65.2.10.18:31100/api/signup",
        `${api}/signup`,
        payload,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      );
      if (response.status !== 201) {
        throw new Error(response.data.message || "Signup failed");
      }
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white shadow-md w-full">
        <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
          Create your <span className="text-[#7747ff]">App</span> account
        </div>
        <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
          Sign up to get started
        </div>
        {error && <div className="text-red-500 text-center mb-2">{error}</div>}
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="block relative">
            <label
              htmlFor="name"
              className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={Input.name}
              onChange={handleChange}
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
              required
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
              value={Input.email}
              onChange={handleChange}
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
              required
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
              value={Input.password}
              onChange={handleChange}
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        <div className="text-sm text-center mt-[1.6rem]">
          Already have an account?{" "}
          <Link to={"/login"} className="text-sm text-[#7747ff]" href="#">
            Log in
          </Link>
        </div>
        <div className="text-center mt-4">
          <Link to="/" className="text-blue-600 underline">Go to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
