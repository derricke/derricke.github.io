import React from 'react';
import FeatureBlock from './FeatureBlock';
import {
  faTabletScreenButton,
  faGem,
  faFileLines,
  faGift,
  faPalette,
  faAtom,
  faFileCode,
  faWrench
} from '@fortawesome/free-solid-svg-icons';

const featuresData = [
  {
    category: 'main',
    icon: faTabletScreenButton,
    title: '100% Responsive Design',
    description: 'All of our projects use responsive design to make sure they work on as many devices as possible.',
  },
  {
    category: 'main',
    icon: faGem,
    title: 'Award Winning Quality',
    description: 'We only put our best effort into our work. And it shows.',
  },
  {
    category: 'main',
    icon: faFileLines,
    title: 'Extensive Documentation',
    description: 'We explain everything we do at every step of the way.',
  },
  {
    category: 'main',
    icon: faGift,
    title: 'Loaded With Goodies',
    description: 'We go above and beyond and give you as much as possible.',
  },
  {
    category: 'main2',
    icon: faPalette,
    title: 'Designs To Brag About',
    description: 'You want to show off your work, and we make sure your customers will notice.',
  },
  {
    category: 'main2',
    icon: faAtom,
    title: 'Loaded With Power',
    description: 'Get your point across with amazing styles and font faces.',
  },
  {
    category: 'main2',
    icon: faFileCode,
    title: 'Clean Modern Code',
    description: 'We use the latest technologies to ensure your project is fast, secure, and easy to maintain.',
  },
  {
    category: 'main2',
    icon: faWrench,
    title: 'Updates & Support',
    description: 'The end of the project is just the beginning. We are here to help you with any issues you may have.',
  }
];

interface FeaturesProps {
  category: 'main' | 'main2';
}

export default function Features({ category }: FeaturesProps) {

  // Filter features based on the category prop
  const filteredFeatures = featuresData.filter(feature => feature.category === category);

  // If no features match the category, return null or an empty array
  if (filteredFeatures.length === 0) {
    return null; // or return <div>No features available</div>;
  }

  const featureBlockProps = {
    bgColorClass: 'bg-gray-100',
    iconColorClass: 'text-orange-500',
    hoverBgColorClass: 'group-hover:bg-orange-500',
    hoverIconColorClass: 'group-hover:text-white',
    hoverBorderColorClass: 'group-hover:border-orange-500'
  };

  if (category === 'main2') {
    featureBlockProps.bgColorClass = 'bg-gray-100';
    featureBlockProps.iconColorClass = 'text-[#82D0AC]';
    featureBlockProps.hoverBgColorClass = 'group-hover:bg-[#82D0AC]';
    featureBlockProps.hoverIconColorClass = 'group-hover:text-white';
    featureBlockProps.hoverBorderColorClass = 'group-hover:border-[#82D0AC]';
  }

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {filteredFeatures.map((feature, index) => (
          <FeatureBlock
            key={index}
            iconClass={feature.icon}
            title={feature.title}
            description={feature.description}
            {...featureBlockProps}
          />
        ))}
      </div>
    </div>
  );
}
