import React, { useRef } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

interface Game {
  id: number;
  name: string;
  color?: string;
  type?: string;
  time?: string;
  odds?: Record<string, number>;
}

interface FeaturedGamesProps {
  title: string;
  games: Game[];
  variant?: 'default' | 'sports';
}

const FeaturedGames: React.FC<FeaturedGamesProps> = ({ 
  title, 
  games,
  variant = 'default'
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300; // Adjust scroll amount as needed
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="p-1 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
            aria-label="Scroll left"
          >
            <BiChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-1 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
            aria-label="Scroll right"
          >
            <BiChevronRight size={20} />
          </button>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar snap-x"
      >
        {variant === 'default' ? (
          // Default game cards
          games.map((game) => (
            <div 
              key={game.id}
              className={`${game.color || 'bg-purple-900'} rounded-lg p-4 min-w-[140px] h-[140px] flex flex-col justify-center items-center snap-start cursor-pointer transition-transform hover:scale-105`}
            >
              <div className="w-12 h-12 rounded-full bg-black/20 mb-3 flex items-center justify-center">
                {/* Game icon placeholder */}
              </div>
              <span className="text-center font-medium">{game.name}</span>
            </div>
          ))
        ) : (
          // Sports event cards
          games.map((game) => (
            <div 
              key={game.id}
              className="bg-gray-800 rounded-lg p-4 min-w-[280px] snap-start cursor-pointer hover:bg-gray-700 transition-colors"
            >
              <div className="mb-2">
                <span className="text-xs text-gray-400">{game.type}</span>
                <h3 className="font-medium">{game.name}</h3>
                <span className="text-xs text-green-500">{game.time}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-2 mt-3">
                {game.odds && Object.entries(game.odds).map(([key, value], i) => (
                  <button 
                    key={i}
                    className="bg-gray-700 hover:bg-gray-600 rounded p-2 text-sm flex justify-between transition-colors"
                  >
                    <span>{key}</span>
                    <span className="font-medium text-amber-400">{value.toFixed(2)}</span>
                  </button>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default FeaturedGames;