import React from 'react';

const BonusBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-purple-900 to-indigo-800 h-48 md:h-60">
      <div className="absolute -right-8 top-0 w-48 h-48 opacity-70 animate-float">
        <div className="absolute top-4 right-8 w-12 h-12 rounded bg-yellow-400 rotate-12"></div>
        <div className="absolute top-12 right-24 w-8 h-8 rounded bg-red-500 rotate-45"></div>
        <div className="absolute top-24 right-12 w-10 h-10 rounded-full bg-green-400"></div>
      </div>
      
      <div className="absolute z-10 flex flex-col justify-center h-full p-6 md:p-10 w-full md:w-3/5">
        <h2 className="text-yellow-300 font-bold text-3xl md:text-4xl mb-1">15% FIRST DEPOSIT</h2>
        <h3 className="text-yellow-300 font-bold text-2xl md:text-3xl mb-2">BONUS, LIMITED PERIOD OFFER</h3>
        <p className="text-white text-sm mb-4">Biggest Bonus Offer Now Live</p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300 w-max">
          DEPOSIT NOW
        </button>
      </div>
      

      <div className="absolute -right-20 md:right-0 -bottom-8 md:bottom-auto md:top-1/2 md:transform md:-translate-y-1/2 opacity-80">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-yellow-500 relative animate-slow-spin">
          <div className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-yellow-500"></div>
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-3 h-10 bg-red-500"
              style={{
                left: 'calc(50% - 1.5px)',
                top: '0',
                transformOrigin: 'bottom center',
                transform: `rotate(${i * 30}deg)`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BonusBanner;