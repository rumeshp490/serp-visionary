
import React from 'react';
import { cn } from '../lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  className
}) => {
  return (
    <div className={cn("feature-card", className)}>
      <div className="bg-white/10 rounded-lg w-12 h-12 flex items-center justify-center mb-5">
        <Icon size={24} className="text-white" />
      </div>
      <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default FeatureCard;
