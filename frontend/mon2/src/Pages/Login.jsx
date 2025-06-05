import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const api = import.meta.env.VITE_BACKEND_URL;
const Login = () => {
  const [Input, setInput] = useState({
    // name: "",
    username: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...Input, [e.target.username]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const payload = {
        // name: Input.name,
        username: Input.username,
        password: Input.password,
      };
      const response = await axios.post(
        `${api}/login`,
        payload,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      );
      if (response.status !== 200) {
        throw new Error(response.data.message || "Login failed");
      }
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white shadow-md w-full">
        <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
          Welcome back to <span className="text-[#7747ff]">App</span>
        </div>
        <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
          Log in to your account
        </div>
        {error && <div className="text-red-500 text-center mb-2">{error}</div>}
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="block relative">
            <label
              htmlFor="name"
              className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={Input.username}
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
          <div>
            <a className="text-sm text-[#7747ff]" href="#">
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Submit"}
          </button>
        </form>
        <div className="text-sm text-center mt-[1.6rem]">
          Don’t have an account yet?{" "}
          <Link to={"/auth-signup"} className="text-sm text-[#7747ff]" href="#">
            Sign up for free!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
