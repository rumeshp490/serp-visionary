
import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Check } from 'lucide-react';
import { cn } from '../lib/utils';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1A0B2E] to-black pointer-events-none"></div>
      
      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#353535]/10 blur-[120px] opacity-60 pointer-events-none"></div>
      
      {/* Sophisticated Grid Background - visible only in the middle */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl mx-auto h-[60vh] opacity-15">
          <div className="h-full w-full grid grid-cols-12 grid-rows-8 gap-px">
            {Array.from({ length: 96 }).map((_, i) => (
              <div 
                key={i} 
                className="border border-white/5 backdrop-blur-sm"
                style={{
                  opacity: Math.random() * 0.5 + 0.25,
                  background: i % 4 === 0 ? 'rgba(255, 255, 255, 0.03)' : 'transparent'
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="container relative">
        {/* Version Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-black/30 backdrop-blur-lg border border-white/30 rounded-full px-4 py-2 text-white flex items-center">
            <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
            V2.0 is now available
          </div>
        </div>
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Smart Finance Solutions for<br />Growth & Efficiency
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Automate your financial operations, gain real-time insights, and focus on growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <div className="relative w-full">
              <Input 
                type="email" 
                placeholder="Enter your email..." 
                className="bg-white/5 border-white/10 backdrop-blur-md text-white rounded-full h-12 pl-5 pr-24"
              />
              <Button 
                variant="red" 
                className="absolute right-1 top-1 h-10 rounded-full"
              >
                Get Notified
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center space-x-8 mt-6">
            <div className="flex items-center">
              <Check size={16} className="text-white mr-2" />
              <span className="text-sm text-gray-300">No credit card required</span>
            </div>
            <div className="flex items-center">
              <Check size={16} className="text-white mr-2" />
              <span className="text-sm text-gray-300">7-days free trial</span>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 flex flex-col items-center">
            <div className="flex -space-x-2 mb-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gray-300 flex items-center justify-center overflow-hidden">
                  <div className={cn("w-full h-full bg-gradient-to-br", 
                    i === 1 ? "from-gray-200 to-gray-300" : 
                    i === 2 ? "from-gray-300 to-gray-400" : 
                    i === 3 ? "from-gray-400 to-gray-500" : 
                    "from-gray-500 to-gray-600"
                  )}></div>
                </div>
              ))}
            </div>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
              <span className="ml-2 text-sm text-gray-300">Loved by 30k+ happy customers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
