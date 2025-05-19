const Footer = () => {
  return (
    <>
      <div className="w-full mb-8">
 
        <div className="w-full border-t border-b border-[#ffffff33] py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap max-w-[1200px] mx-auto gap-y-10 justify-between">
  
            <div className="w-full sm:w-1/2 lg:w-2/5 flex flex-col">
              <div className="text-2xl font-bold mb-4 text-white">Thrilling Casino Games at Flybets</div>
              <div className="text-xs leading-6 text-start text-[#ffffff40]">
                <span>
                  At Thrilling Casino Games at Flybets, we strive to elevate your gaming experience with
                  innovative features and user-friendly design. Our goal is to let
                  you immerse yourself fully in the excitement of the casino, enjoying
                  the thrill of the games without distractions.
                </span>
                <br /><br />
                <span>
                  We are dedicated to providing a seamless and enjoyable platform that keeps the fun and excitement at the forefront.
                  Discover the future of online gaming with Thrilling Casino Games at Flybets,
                  where every game brings new opportunities for adventure and entertainment.
                </span>
              </div>
            </div>

    
            <div className="w-full sm:w-1/2 lg:w-1/5 flex flex-col items-start">
              <div className="text-2xl font-bold mb-4 text-white">Casino</div>
              <div className="text-xs leading-6 text-[#ffffff40] flex flex-col gap-1">
                <span>Crash</span>
                <span>Plinko</span>
                <span>Keno</span>
                <span>Limbo</span>
                <span>Classic Dice</span>
                <span>Baccarat</span>
                <span>Coin Flip</span>
                <span>Wheel</span>
              </div>
            </div>


            <div className="w-full sm:w-full lg:w-1/4 flex flex-col items-start">
              <div className="text-2xl font-bold mb-4 text-white">Help Support</div>
              <div className="text-xs leading-6 text-[#ffffff40] flex flex-col gap-1">
                <span>Live Support</span>
                <span>Aware Fairness (soon)</span>
                <span>FAQs</span>
                <span>Privacy Policy</span>
                <span>Terms & Conditions</span>
                <span>About Us</span>
              </div>
            </div>
          </div>
        </div>


        <div className="flex items-center justify-center w-full pt-6 px-4 text-center">
          <div className="text-[#cccccc] text-sm">
            Copyright © 2024 Thrilling Casino Games at Flybets. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
