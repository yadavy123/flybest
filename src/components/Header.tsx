import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full border-b-[2px] flex flex-wrap lg:flex-nowrap" style={{ borderColor: "#FFFFFF33" }}>
      <div
        className="w-full lg:w-[280px] border-b-[1px] lg:border-b-0 lg:border-r-[1px] flex items-center justify-center lg:justify-start h-[80px] px-[10px]"
        style={{
          borderColor: "#ffffff40",
          boxShadow: "inset #000 0 -2px 1px 0",
        }}
      >
        <div className="h-[80px] w-[200px] flex items-center p-[10px]">
          <img
            src="https://blr1.digitaloceanspaces.com/kripabet/merchant-logo/1734954882720Flybets Logo.png"
            alt="Flybets Logo"
          />
        </div>
      </div>

      <div className="flex-1 w-full flex flex-col lg:flex-row items-center justify-between pl-[40px] pr-[20px] py-[15px] text-white gap-y-4">
        <div className="w-full lg:w-auto flex justify-center lg:justify-start">
          <div
            className="border-[1px] border-[#ffffff40] py-[10px] px-[20px] text-center rounded-md cursor-pointer"
            onClick={() => navigate("/signin")}
          >
            <BsSearch />
          </div>
        </div>

        <div className="flex gap-6">
          <button
            className="bg-[#000] border-[1px] border-[#ffffff40] rounded-md h-[43px] w-[89px] text-[14px] text-white font-semibold"
            onClick={() => navigate("/login")}
          >
            Sign in
          </button>
          <button
            className="bg-[#56b4d3] rounded-md h-[43px] w-[89px] text-[14px] text-black font-semibold"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
