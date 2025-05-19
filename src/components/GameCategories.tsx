import React from 'react';
import { BiTargetLock, BiTrendingUp, BiTrophy } from 'react-icons/bi';
import { CgAddR } from 'react-icons/cg';
import { DiCelluloid } from 'react-icons/di';
import { TiTicket } from 'react-icons/ti';


interface GameCategoryProps {
  title: string;
  icon: React.ReactNode;
  bgColor: string;
}

const GameCategory: React.FC<GameCategoryProps> = ({ title, icon, bgColor }) => {
  return (
    <div className={`relative overflow-hidden rounded-lg ${bgColor} aspect-square cursor-pointer transition-transform hover:scale-105`}>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="mb-2 text-white">
          {icon}
        </div>
        <h3 className="text-white font-medium text-lg">{title}</h3>
      </div>
    </div>
  );
};

const GameCategories: React.FC = () => {
  const categories = [
    { title: 'Sports', icon: <BiTrophy size={32} />, bgColor: 'bg-amber-700' },
    { title: 'Casino', icon: <BiTargetLock size={32} />, bgColor: 'bg-indigo-900' },
    { title: 'Lottery', icon: <TiTicket size={32} />, bgColor: 'bg-green-800' },
    { title: 'Up Down', icon: <BiTrendingUp size={32} />, bgColor: 'bg-green-700' },
    { title: 'Bingo', icon: <DiCelluloid size={32} />, bgColor: 'bg-purple-900' },
    { title: 'Racing', icon: <CgAddR  />, bgColor: 'bg-amber-800' },
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Game Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <GameCategory 
            key={index}
            title={category.title}
            icon={category.icon}
            bgColor={category.bgColor}
          />
        ))}
      </div>
    </section>
  );
};

export default GameCategories;