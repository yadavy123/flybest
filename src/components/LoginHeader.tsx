const LoginHeader = () => {
  return (
    <div
      className="w-full   border-b-[2px]"
      style={{ borderColor: "#FFFFFF33", boxShadow: "0 2px 1px 0 #000" }}
    >
      <div
        className="
          h-[80px] 
          flex  
          py-[20px] 
          px-[100px] 
          sm:px-6 sm:py-4
        "
      >
        <div className="w-full max-w-[600px] h-[45px] flex items-center justify-center">
          <img
            src="https://blr1.digitaloceanspaces.com/kripabet/merchant-logo/1734954882720Flybets Logo.png"
            alt="Logo"
            style={{ height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginHeader;
