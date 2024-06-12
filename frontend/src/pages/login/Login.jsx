import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className="w-full p-6 rounded-lg shadow-md bg-red-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
        <h1 className="text-3xl font-semibold text-center text-gray-200">
          Login
          <span className="text-red-400 text-opacity-90"> AnimeTalk</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text  text-gray-200">
                Username
              </span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10  bg-red-400 bg-opacity-80 custom-placeholder text-gray-200"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text  text-gray-200">
                Password
              </span>
            </label>
            <input
              type="password"
              className="w-full input input-bordered h-10  bg-red-400 bg-opacity-80 custom-placeholder text-gray-200"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            to="/signup"
            className="text-sm  hover:underline hover:text-red-600 mt-2  inline-block  text-gray-200">
            {"Don't"} have an account?
          </Link>

          <div>
            <button
              className="btn btn-block btn-sm mt-2  bg-red-400 bg-opacity-80  text-gray-200"
              disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
