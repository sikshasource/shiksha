import React from "react";
import { Lock } from "lucide-react";

export default function SignUpPassword() {
  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="hidden md:flex w-1/2 bg-black items-center justify-center">
        <h1 className="text-5xl font-serif text-white">
          Shiksha <span className="text-blue-600">Source</span>
        </h1>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md px-6">
          <h2 className="text-3xl font-serif text-center mb-10">
            Sign Up
          </h2>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="enter-Password"
                className="w-full px-4 py-2 border rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Lock className="absolute right-3 top-2.5 h-5 w-5 text-black" />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-8">
            <label className="block text-sm font-medium mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="confirm your password"
                className="w-full px-4 py-2 border rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Lock className="absolute right-3 top-2.5 h-5 w-5 text-black" />
            </div>
          </div>

          {/* Sign Up Button */}
          <button className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
