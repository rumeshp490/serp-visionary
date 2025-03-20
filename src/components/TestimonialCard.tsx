
import React from 'react';
import { cn } from '../lib/utils';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  company: string;
  rating: number;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  company,
  rating = 5,
  className
}) => {
  return (
    <div className={cn("testimonial-card", className)}>
      <div className="flex mb-3">
        {Array(5).fill(0).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={cn(
              "mr-1",
              i < rating ? "text-white fill-white" : "text-gray-600"
            )}
          />
        ))}
      </div>
      <p className="text-white mb-4 text-lg">"{quote}"</p>
      <div>
        <p className="text-white font-medium">{name}</p>
        <p className="text-gray-400 text-sm">{company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
