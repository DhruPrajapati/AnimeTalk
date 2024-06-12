import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = async (gender) => {
    console.log(gender);
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className="w-full p-6 rounded-lg shadow-md bg-red-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-red-400 text-opacity-80"> AnimeTalk</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <label htmlFor="" className="label p-2">
                <span className="text-base label-text text-slate-200">
                  Full Name
                </span>
              </label>
              <input
                type="text"
                className="w-full input input-bordered h-10  bg-red-400 bg-opacity-80 custom-placeholder text-gray-200"
                placeholder="Jackie Chan"
                value={inputs.fullName}
                onChange={(e) =>
                  setInputs({ ...inputs, fullName: e.target.value })
                }
              />
            </div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text text-slate-200">
                Username
              </span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10  bg-red-400 bg-opacity-80 custom-placeholder text-gray-200"
              placeholder="Enter Username"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text text-slate-200">
                Password
              </span>
            </label>
            <input
              type="password"
              className="w-full input input-bordered h-10  bg-red-400 bg-opacity-80 custom-placeholder text-gray-200"
              placeholder="Enter Password"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text text-slate-200">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              className="w-full input input-bordered h-10  bg-red-400 bg-opacity-80 custom-placeholder text-gray-200"
              placeholder="Confirm Password "
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>
          <GenderCheckbox
            onCheckBoxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />
          <Link
            to="/login"
            className="text-sm  hover:underline hover:text-red-600 mt-2  inline-block  text-gray-200">
            Already have an account?
          </Link>

          <div>
            <button
              className="btn btn-block btn-sm mt-2 bg-red-400 bg-opacity-80 text-gray-200"
              disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign UP"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
