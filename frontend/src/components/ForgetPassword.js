import React, { useState } from "react";
import { axiosInstance } from "../libs/axios";
import { useNavigate } from "react-router-dom";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    if (!email || !oldPassword || !newPassword || !confirmPassword) {
      setError("All fields are required");
      setMessage("");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("New passwords do not match");
      setMessage("");
      return;
    }

    try {
      const res = await axiosInstance.post("/api/users/forgetpass", {
        email,
        oldPassword,
        newPassword,
      });

      setMessage(res.data.message);
      setError("");
      setEmail("");
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");

      setTimeout(() => {
        navigate("/login");
      }, 1500); // Redirect after 1.5 seconds
    } catch (err) {
      setError(err.response?.data?.message || "Password update failed");
      setMessage("");
    }
  };

  return (
    <section className="bg">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full glass-card rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Reset Password
            </h1>

            {message && <p className="text-green-400 text-sm">{message}</p>}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <form
              onSubmit={handlePasswordReset}
              className="space-y-4 md:space-y-6"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gray-50 border border-gray-300 placeholder-gray-300 rounded-lg block w-full p-2.5 focus:outline-none bg-transparent text-white"
                  placeholder="name@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="oldPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Old Password
                </label>
                <input
                  type="password"
                  id="oldPassword"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  required
                  className="bg-gray-50 border border-gray-300 placeholder-gray-300 rounded-lg block w-full p-2.5 focus:outline-none bg-transparent text-white"
                  placeholder="••••••••"
                />
              </div>

              <div>
                <label
                  htmlFor="newPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  className="bg-gray-50 border border-gray-300 placeholder-gray-300 rounded-lg block w-full p-2.5 focus:outline-none bg-transparent text-white"
                  placeholder="••••••••"
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="bg-gray-50 border border-gray-300 placeholder-gray-300 rounded-lg block w-full p-2.5 focus:outline-none bg-transparent text-white"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForgetPassword;
