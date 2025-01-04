import React from 'react';

interface SkillCardProps {
  name: string;
  icon: string;
}

export function SkillCard({ name, icon }: SkillCardProps) {
  return (
    <div className="flex items-center space-x-3 p-4 rounded-lg hover:bg-rose-50 transition-all duration-300 group transform hover:-translate-y-1">
      <img 
        src={icon} 
        alt={name} 
        className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" 
      />
      <p className="text-base font-medium text-gray-700">{name}</p>
    </div>
  );
}