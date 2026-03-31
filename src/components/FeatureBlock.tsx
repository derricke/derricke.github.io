import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';


// Define the props that this component will accept
interface FeatureBlockProps {
  iconClass: IconDefinition;
  title: string;
  description: string;
  bgColorClass?: string;
  iconColorClass?: string;
  hoverBgColorClass?: string;
  hoverIconColorClass?: string;
  hoverBorderColorClass?: string;
}

export default function FeatureBlock({
  iconClass,
  title,
  description,
  bgColorClass = 'bg-gray-100',
  iconColorClass = 'text-orange-500',
  hoverBgColorClass = 'group-hover:bg-orange-500',
  hoverIconColorClass = 'text-white',
  hoverBorderColorClass = 'group-hover:bg-orange-500'
}: FeatureBlockProps) {
  return (
    // Add "group" to this parent div to enable group-hover on child elements
    <div className="text-center p-4 group">
      {/* This div acts as the main icon container. 
        It's relative to allow absolute positioning of its children.
      */}
      <div className={`relative inline-flex items-center justify-center w-24 h-24 rounded-full ${bgColorClass} ${hoverBgColorClass} transition-colors duration-300 ease-in-out`}>

        {/* This is the outer border element, replicating the original .circle-border.
          It is positioned absolutely within the parent.
        */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92px] h-[92px] rounded-full border border-gray-200 ${hoverBorderColorClass} transition-all duration-300 ease-in-out group-hover:scale-[1.18]`}></div>

        {/* The icon itself, with a z-index to ensure it stays on top */}
        <FontAwesomeIcon
          icon={iconClass}
          className={`${iconColorClass} ${hoverIconColorClass} text-4xl w-[1em] h-[1em] transition-colors duration-300 ease-in-out relative z-10`}
        />
      </div>

      <h3 className="text-xl font-semibold mb-2 mt-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
