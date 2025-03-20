
import React from 'react';
import { cn } from '../lib/utils';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

interface KeywordTrendCardProps {
  keyword: string;
  rank: number;
  change: string;
  trend: number[];
  className?: string;
}

const KeywordTrendCard: React.FC<KeywordTrendCardProps> = ({
  keyword,
  rank,
  change,
  trend,
  className
}) => {
  const data = trend.map((value, index) => ({ name: `Day ${index+1}`, value }));
  
  const isPositive = change.startsWith('+');
  
  return (
    <div className={cn("glass-morphism p-4 rounded-lg", className)}>
      <div className="flex justify-between items-start mb-2">
        <div>
          <p className="text-gray-400 text-xs">Keyword</p>
          <h4 className="text-white font-medium truncate max-w-[120px]">{keyword}</h4>
        </div>
        <div className="text-right">
          <p className="text-gray-400 text-xs">Rank</p>
          <p className="text-white font-medium">{rank}</p>
        </div>
      </div>
      
      <div className="h-16 my-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={isPositive ? "#4ade80" : "#ef4444"}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex justify-end">
        <span className={`text-sm font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {change}
        </span>
      </div>
    </div>
  );
};

export default KeywordTrendCard;
