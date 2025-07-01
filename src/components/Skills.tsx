import React from 'react';
import SkillBar from './SkillBar';

const skillsData = [
  { name: 'HTML/CSS', percentage: 100 },
  { name: 'PHP', percentage: 95 },
  { name: 'MySQL', percentage: 85 },
  { name: 'Javascript', percentage: 95 },
  { name: 'jQuery', percentage: 85 },
  { name: 'Ext JS', percentage: 70 },
  { name: 'WordPress', percentage: 70 },
];

export default function Skills() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">My Skills</h2>
      {skillsData.map((skill, index) => (
        <SkillBar key={index} skill={skill.name} percentage={skill.percentage} />
      ))}
    </div>
  );
}
