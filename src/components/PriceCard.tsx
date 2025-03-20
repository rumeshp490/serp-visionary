
import React from 'react';
import { PrimaryButton } from './PrimaryButton';
import { cn } from '../lib/utils';
import { Check } from 'lucide-react';

interface PriceCardProps {
  title: string;
  price: string;
  features: string[];
  featured?: boolean;
  className?: string;
}

const PriceCard: React.FC<PriceCardProps> = ({
  title,
  price,
  features,
  featured = false,
  className
}) => {
  return (
    <div className={cn(
      featured ? "price-card-featured" : "price-card",
      className
    )}>
      {featured && (
        <div className="text-sm bg-white/20 text-white font-medium rounded-full py-1 px-3 mx-auto mb-4 inline-block">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <div className="flex items-baseline mb-6">
        <span className="text-3xl font-bold text-white">{price}</span>
        <span className="text-gray-400 ml-2">/mo</span>
      </div>
      <ul className="flex-1 mb-6 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="text-white mr-2 h-5 w-5 shrink-0 mt-0.5" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <PrimaryButton 
        variant={featured ? "default" : "outline"} 
        className="w-full text-center"
      >
        Get Started
      </PrimaryButton>
    </div>
  );
};

export default PriceCard;
