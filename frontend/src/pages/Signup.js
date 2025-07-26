import { axiosInstance } from "../libs/axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("api/users/signup", {
        name,
        email,
        password,
      });
      toast.success("User created successfully");
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      toast.error(error.response?.data?.message || "SignUp Failed");
    }
  };

  return (
    <section className="bg">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full glass-card rounded-lg shadow  sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign up for an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-50 border border-gray-300 placeholder-gray-300 rounded-lg block w-full p-2.5 focus:outline-none bg-transparent text-white"
                  placeholder="Sahil"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 placeholder-gray-300 rounded-lg block w-full p-2.5 focus:outline-none bg-transparent text-white"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="*********"
                  className="bg-gray-50 border border-gray-300 placeholder-gray-300 rounded-lg block w-full p-2.5 focus:outline-none bg-transparent text-white"
                  required=""
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign up
              </button>
            </form>
            <p className="text-sm font-light text-white">
              Already have an account?
              <a
                href="/login"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-2"
              >
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
