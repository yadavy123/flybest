import React from 'react';
import { MdCasino } from 'react-icons/md';
import FeaturedGames from '../components/FeaturedGames';
import GameCategories from '../components/GameCategories';
import BonusBanner from '../components/BounsBanner';
import AppDownload from '../components/AppDownload';


function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white"> 
      <main className="container mx-auto px-4 py-6 space-y-8">
        <BonusBanner />
        <GameCategories />
        <FeaturedGames 
          title="FlyBets Originals" 
          games={originals} 
        />
        <FeaturedGames 
          title="Live Sports" 
          games={liveEvents} 
          variant="sports"
        />
        <AppDownload />
      </main>
      
      <footer className="bg-gray-800 py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <MdCasino className="text-green-500" size={28} />
              <span className="text-xl font-bold">FlyBet</span>
            </div>
            <div className="flex gap-4">
              <span className="text-green-500 font-medium">15% Deposit Bonus</span>
              <div className="flex items-center gap-2">
                <div className="w-8 h-5 bg-gray-500 rounded"></div>
                <div className="w-8 h-5 bg-gray-500 rounded"></div>
                <div className="w-8 h-5 bg-gray-500 rounded"></div>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-400 text-sm">
            &copy; 2025 FlyBet. All rights reserved. Play responsibly.
          </div>
        </div>
      </footer>
    </div>
  );
}


const originals = [
  { id: 1, name: 'Baccarat', color: 'bg-emerald-700' },
  { id: 2, name: 'Mines', color: 'bg-purple-700' },
  { id: 3, name: 'Ring of Fortune', color: 'bg-blue-700' },
  { id: 4, name: 'Hash Dice', color: 'bg-rose-700' },
  { id: 5, name: 'Hi-Lo', color: 'bg-amber-700' },
  { id: 6, name: 'Limbo', color: 'bg-orange-700' },
  { id: 7, name: 'Coin Flip', color: 'bg-yellow-700' },
];

const liveEvents = [
  { id: 1, name: 'Premier League', type: 'Football', time: 'Live', odds: { home: 2.10, draw: 3.25, away: 2.80 } },
  { id: 2, name: 'NBA Finals', type: 'Basketball', time: '19:30', odds: { home: 1.95, away: 1.85 } },
  { id: 3, name: 'Formula 1', type: 'Racing', time: 'Tomorrow', odds: { first: 2.50, second: 3.00, third: 3.75 } },
  { id: 4, name: 'UFC 305', type: 'MMA', time: 'Sunday', odds: { fighter1: 1.65, fighter2: 2.20 } },
];

export default Home;