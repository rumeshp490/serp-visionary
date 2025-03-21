
import React from 'react';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';
import { MoreHorizontal } from 'lucide-react';
import { cn } from '../lib/utils';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  percentValue: string;
  changeDirection: 'up' | 'down';
  data: { value: number }[];
  color: string;
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  percentValue,
  changeDirection,
  data,
  color,
  className
}) => {
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-xl backdrop-blur-xl bg-gradient-to-br from-[#181829]/90 to-[#181829]/70 border border-white/10 p-6 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] animate-float", 
        className
      )}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white text-base font-medium">{title}</h3>
        <button className="text-gray-400 hover:text-white">
          <MoreHorizontal size={18} />
        </button>
      </div>
      
      <div className="mb-1">
        <p className="text-white text-2xl font-bold">{value}</p>
      </div>
      
      <div className="flex items-center mb-4">
        <span className={cn(
          "flex items-center text-xs font-medium", 
          changeDirection === 'up' ? 'text-green-500' : 'text-red-500'
        )}>
          <span className="mr-1">
            {changeDirection === 'up' ? '↑' : '↓'}
          </span>
          {percentValue}
        </span>
        <span className="text-gray-400 text-xs ml-2">Since last period</span>
      </div>
      
      <div className="h-14">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <Bar dataKey="value" fill={color} radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const FinanceMetricsCards = () => {
  const cardData = [
    {
      title: "Total Revenue",
      value: "$1.89K",
      change: "up",
      percentValue: "45%",
      changeDirection: 'up' as const,
      data: Array.from({ length: 12 }).map((_, i) => ({ 
        value: 10 + Math.floor(Math.random() * 40)
      })),
      color: "#8B5CF6"
    },
    {
      title: "Total Revenue",
      value: "$1,00,500",
      change: "up",
      percentValue: "80%",
      changeDirection: 'up' as const,
      data: Array.from({ length: 12 }).map((_, i) => ({ 
        value: 15 + Math.floor(Math.random() * 50)
      })),
      color: "#8B5CF6"
    },
    {
      title: "Avg. Order Revenue",
      value: "$249.50K",
      change: "up",
      percentValue: "70%",
      changeDirection: 'up' as const,
      data: Array.from({ length: 12 }).map((_, i) => ({ 
        value: 20 + Math.floor(Math.random() * 30)
      })),
      color: "#8B5CF6"
    }
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap gap-6">
          {cardData.map((card, index) => (
            <div key={index} className="w-full md:flex-1">
              <MetricCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinanceMetricsCards;
