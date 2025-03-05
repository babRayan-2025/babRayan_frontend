'use client';

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setLoading(true);
    // setError(null);

    // const mockEmail = "admin@babRayan.com";
    // const mockPassword = "password123";

    // if (formData.email === mockEmail && formData.password === mockPassword) {
    //   const user = {
    //     email: formData.email,
    //     role: "admin",
    //     loggedInAt: new Date().toISOString(),
    //   };
    //   localStorage.setItem("user", JSON.stringify(user));
    //   // Set a cookie for middleware
    //   document.cookie = "auth_token=logged-in; path=/; SameSite=Strict";
    //   router.push("/dashboard");
    // } else {
    //   setError("Invalid email or password");
    //   setLoading(false);
    // }
    localStorage.setItem("userID", "mouad zwine");
    router.push("/dashboard");

  };

  return (
    <div className="font-[sans-serif] bg-gradient-to-r from-[#000000] to-white dark:bg-gray-900 text-gray-800">
      <div className="min-h-screen flex flex-col items-center justify-center lg:p-6 p-4">
        <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl w-full">
          <div>
            <Link href="javascript:void(0)">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/Logo.png?alt=media&token=e5f5173e-6170-4f2f-9037-955c7c199481"
                alt="logo"
                className="w-52 mb-12 inline-block"
              />
            </Link>
            <h2 className="text-4xl font-extrabold lg:leading-[50px] text-white">
              Seamless Login for Exclusive Access
            </h2>
            <p className="text-sm mt-6 text-white">
              Immerse yourself in a hassle-free login journey with our intuitively designed login form. Effortlessly access your account.
            </p>
            <p className="text-sm mt-6 text-white">
              Don`t have an account{" "}
              <Link href="/register" className="text-white font-semibold underline ml-1">
                Register here
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl px-6 py-8 space-y-6 max-w-md md:ml-auto w-full">
            <h3 className="text-3xl font-extrabold mb-12">Sign in</h3>
            <div>
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-100 focus:bg-transparent w-full text-sm px-4 py-3.5 rounded-md outline-gray-800"
                placeholder="Email address"
              />
            </div>
            <div>
              <input
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="bg-gray-100 focus:bg-transparent w-full text-sm px-4 py-3.5 rounded-md outline-gray-800"
                placeholder="Password"
              />
            </div>
            <div className="text-sm text-right">
              <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline">
                Forgot your password?
              </a>
            </div>
            <div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full shadow-xl py-3 px-6 text-sm font-semibold rounded-md text-white bg-gray-800 hover:bg-[#222] focus:outline-none ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Logging in..." : "Log in"}
              </button>
            </div>
            {error && <p className="text-sm text-red-500 text-center">{error}</p>}
            <p className="my-6 text-sm text-gray-400 text-center">or continue with</p>
            <div className="space-x-6 flex justify-center">
              {/* Social login buttons unchanged */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}