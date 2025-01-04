import React from 'react';
import { SkillCard } from './SkillCard';
import { LucideIcon } from 'lucide-react';

interface Skill {
  name: string;
  icon: string;
  level: number;
}

interface SkillCategoryProps {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

export function SkillCategory({ title, icon: Icon, skills }: SkillCategoryProps) {
  return (
    <div className="card hover:shadow-xl transition-all duration-300">
      <div className="flex items-center space-x-3 mb-4">
        <Icon className="w-6 h-6 text-rose-600" />
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </div>
  );
}