
import React from 'react';
import { cn } from '../lib/utils';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

interface DashboardMockupProps {
  className?: string;
}

const DashboardMockup: React.FC<DashboardMockupProps> = ({ className }) => {
  const data = [
    { name: 'Day 1', value: 10 },
    { name: 'Day 2', value: 12 },
    { name: 'Day 3', value: 8 },
    { name: 'Day 4', value: 15 },
    { name: 'Day 5', value: 14 },
    { name: 'Day 6', value: 18 },
    { name: 'Day 7', value: 20 },
  ];

  return (
    <div className={cn("glass-morphism rounded-xl p-4 md:p-6 relative", className)}>
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h3 className="text-white text-lg font-medium">SERP Rankings</h3>
          <p className="text-gray-400 text-sm">Last 7 days</p>
        </div>
        <div className="flex space-x-2">
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
          <div className="text-gray-300 text-sm">Trending Up</div>
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <XAxis dataKey="name" stroke="#666" />
            <YAxis stroke="#666" />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#ffffff" 
              strokeWidth={2} 
              dot={{ fill: '#ffffff', strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="bg-white/5 p-3 rounded-lg">
          <p className="text-gray-400 text-xs">Avg. Position</p>
          <p className="text-white text-lg font-medium">3.2</p>
        </div>
        <div className="bg-white/5 p-3 rounded-lg">
          <p className="text-gray-400 text-xs">Keywords</p>
          <p className="text-white text-lg font-medium">153</p>
        </div>
        <div className="bg-white/5 p-3 rounded-lg">
          <p className="text-gray-400 text-xs">Change</p>
          <p className="text-green-400 text-lg font-medium">+4.2%</p>
        </div>
      </div>
      
      <div className="glow-shadow"></div>
    </div>
  );
};

export default DashboardMockup;
