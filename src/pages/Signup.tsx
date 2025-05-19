"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import LoginHeader from "../components/LoginHeader"
import InputBox from "../components/Input"

export default function SignUp() {
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-[#121212] bg-opacity-95 relative">
      <LoginHeader />
      {/* Add padding-top to push content below header (80px height assumed) */}
      <div className="w-full max-w-[800px] px-4 relative z-10 mt-[80px] mx-auto">
        <div className="bg-[#1a1a1a] bg-opacity-80 rounded-lg border border-gray-800 p-8 md:p-10">
          <div className="mb-8 text-center">
            <h1 className="text-[#4ecdc4] text-2xl font-medium mb-1">Sign Up for New Account</h1>
            <p className="text-gray-400 text-sm">Please enter the details & create account here.</p>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputBox name={"fullName"} value={null} onChange={() => {}} label={"Full Name"} />
              <InputBox name={"username"} value={null} onChange={() => {}} label={"Username"} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputBox name={"email"} value={null} onChange={() => {}} label={"Email Address"} />
              <div className="space-y-2">
                <InputBox name={"password"} value={null} onChange={() => {}} label={"Enter Password"} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="block text-gray-300 text-sm mb-1">
                  Confirm Password<span className="text-[#ff6b6b]">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    required
                    className="w-full bg-[#121212] border border-gray-700 rounded px-4 py-2.5 text-white focus:outline-none focus:ring-1 focus:ring-[#4ecdc4] focus:border-[#4ecdc4]"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {/* You can add an eye icon here */}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="mobile" className="block text-gray-300 text-sm mb-1">
                  Mobile Number
                </label>
                <div className="flex">
                  <div className="flex items-center bg-[#121212] border border-gray-700 border-r-0 rounded-l px-3">
                    <span className="flex items-center">
                      <span className="text-gray-300 text-sm">+91</span>
                    </span>
                  </div>
                  <input
                    type="tel"
                    id="mobile"
                    className="flex-1 bg-[#121212] border border-gray-700 rounded-r px-4 py-2.5 text-white focus:outline-none focus:ring-1 focus:ring-[#4ecdc4] focus:border-[#4ecdc4]"
                  />
                </div>
              </div>
            </div>

            <div className="pt-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-600 text-[#4ecdc4] focus:ring-[#4ecdc4] bg-[#121212]"
                />
                <span className="ml-2 text-gray-300 text-sm">I have a referral code</span>
              </label>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#5bc0de] hover:bg-[#46b8da] text-white font-medium py-3 px-4 rounded transition duration-200"
              >
                SIGN UP
              </button>
            </div>

            <div className="text-center text-sm text-gray-400 pt-2">
              Already have an account?
              <Link to="/login" className="text-[#5bc0de] hover:text-[#46b8da] ml-1">
                Login Now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
