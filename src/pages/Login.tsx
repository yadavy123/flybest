import { Link } from "react-router-dom";
import LoginHeader from "../components/LoginHeader";
import InputBox from "../components/Input";

export default function Login() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] bg-[url('/background.png')] bg-cover bg-center flex flex-col overflow-hidden">

      <div className="flex-shrink-0">
        <LoginHeader />
      </div>


      <div className="flex-1 overflow-y-auto py-[70px] px-[50px] pb-[20px] ms-[12%] w-[32%] max-w-full
                      sm:ms-0 sm:w-full sm:px-6 md:ms-[12%] md:w-[32%]">
        <div className="bg-[#1e1e1e] rounded-lg p-8 border border-[#333333] shadow-md">
          <div className="text-center mb-6">
            <h1 className="text-[28px] font-bold text-[#5ecbde] mb-1">Welcome Back Gamer!</h1>
            <p className="text-[#cccccc] text-sm">Log in to Unleash Adventure!</p>
          </div>

          <form className="space-y-5">
            <InputBox
              name={"email"}
              value={null}
              onChange={() => {}}
              label={"Enter Username Or Email Address"}
            />

            <InputBox
              name={"password"}
              value={null}
              onChange={() => {}}
              label={"Enter Password"}
            />

            <div className="text-right">
              <Link to="/forgot-password" className="text-[#5ecbde] text-sm hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-[#5ecbde] text-black font-bold py-3 px-4 rounded transition-colors hover:bg-[#4bb8cb] focus:outline-none"
            >
              LOG IN
            </button>

            <div className="text-center text-sm text-[#999999] mt-4">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#5ecbde] hover:underline">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
