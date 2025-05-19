import React from 'react';
import { BiDownload, BiRocket } from 'react-icons/bi';


const AppDownload: React.FC = () => {
  return (
    <section className="mt-16 mb-8">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Download mobile
              <br />
              Application
            </h2>
            <p className="text-gray-300 mb-6 max-w-md">
              Download our next-gen gaming app for seamless experience on the go. 
              Enjoy awesome gameplay, access exclusive features, stay updated, and 
              level up your adventure anytime, anywhere.
            </p>
            <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition-colors">
              <BiDownload size={18} />
              Download App
            </button>
          </div>
          
          <div className="md:w-1/2 md:pl-8 flex justify-center">
            <div className="relative">
              {/* First phone mockup */}
              <div className="w-[180px] h-[360px] bg-gray-900 rounded-3xl border-4 border-gray-700 relative overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-b from-green-500/20 to-transparent"></div>
                <div className="absolute top-8 left-0 right-0 text-center">
                  <div className="text-green-500 font-bold">CASINO</div>
                  <div className="flex justify-center mt-3">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                      <BiRocket className="text-white" size={24} />
                    </div>
                  </div>
                  <div className="mt-3 text-green-500 font-bold">2.5x</div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs text-gray-400">Win Chance</span>
                    <span className="text-xs text-white">40%</span>
                  </div>
                  <div className="h-1 w-full bg-gray-700 mb-4">
                    <div className="h-full bg-green-500 w-[40%]"></div>
                  </div>
                  <button className="w-full bg-green-500 text-black text-sm font-bold py-2 rounded">
                    START
                  </button>
                </div>
              </div>
              
              {/* Second phone mockup (slightly behind) */}
              <div className="w-[180px] h-[360px] bg-gray-900 rounded-3xl border-4 border-gray-700 absolute -right-14 top-8 -z-10 overflow-hidden shadow-lg rotate-6">
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="absolute top-0 left-0 right-0 bg-gray-800 p-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-green-500">Casino Games</span>
                    <div className="w-6 h-6 rounded-full bg-gray-700"></div>
                  </div>
                </div>
                
                <div className="absolute top-20 left-0 right-0 flex justify-center">
                  <div className="grid grid-cols-3 gap-2 p-2">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div 
                        key={item} 
                        className="w-10 h-10 bg-gray-700 rounded"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;