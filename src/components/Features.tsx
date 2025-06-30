import React from 'react';
import FeatureBlock from './FeatureBlock';

const featuresData = [
  {
    category: 'main',
    iconClass: 'fa-solid fa-tablet-screen-button',
    title: '100% Responsive Design',
    description: 'All of our projects use responsive design to make sure they work on as many devices as possible.',
  },
  {
    category: 'main',
    iconClass: 'fa-solid fa-gem',
    title: 'Award Winning Quality',
    description: 'We only put our best effort into our work. And it shows.',
  },
  {
    category: 'main',
    iconClass: 'fa-solid fa-file-lines',
    title: 'Extensive Documentation',
    description: 'We explain everything we do at every step of the way.',
  },
  {
    category: 'main',
    iconClass: 'fa-regular fa-gift',
    title: 'Loaded With Goodies',
    description: 'We go above and beyond and give you as much as possible.',
  },
  {
    category: 'main2',
    iconClass: 'fa-solid fa-palette',
    title: 'Designs To Brag About',
    description: 'You want to show off your work, and we make sure your customers will notice.',
  },
  {
    category: 'main2',
    iconClass: 'fa-solid fa-atom',
    title: 'Loaded With Power',
    description: 'Get your point across with amazing styles and font faces.',
  },
  {
    category: 'main2',
    iconClass: 'fa-solid fa-file-code',
    title: 'Clean Modern Code',
    description: 'We use the latest technologies to ensure your project is fast, secure, and easy to maintain.',
  },
  {
    category: 'main2',
    iconClass: 'fa-regular fa-wrench',
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
      bgColorClass: 'gray-100',
      iconColorClass: 'orange-500',
      hoverBgColorClass: 'orange-500',
      hoverIconColorClass: 'white'
    };

    if (category === 'main2') {
      featureBlockProps.bgColorClass = 'gray-100';
      featureBlockProps.iconColorClass = '[#82D0AC]';
      featureBlockProps.hoverBgColorClass = '[#82D0AC]';
      featureBlockProps.hoverIconColorClass = 'white';
    }

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {filteredFeatures.map((feature, index) => (
          <FeatureBlock
            key={index}
            iconClass={feature.iconClass}
            title={feature.title}
            description={feature.description}
            {...featureBlockProps}
          />
        ))}
      </div>
    </div>
  );
}
