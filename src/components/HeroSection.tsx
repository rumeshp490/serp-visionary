
import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Check } from 'lucide-react';
import { cn } from '../lib/utils';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Deep Black to Neon Purple Radial Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#120723] to-black pointer-events-none"></div>
      
      {/* Enhanced Radial Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#8B5CF6]/15 blur-[100px] opacity-70 pointer-events-none"></div>
      
      {/* Sophisticated Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {/* Horizontal Lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={`h-${i}`} 
              className="absolute w-full border-t border-white/10"
              style={{ top: `${(i + 1) * 5}%` }}
            ></div>
          ))}
        </div>
        
        {/* Vertical Lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={`v-${i}`} 
              className="absolute h-full border-l border-white/10"
              style={{ left: `${(i + 1) * 5}%` }}
            ></div>
          ))}
        </div>
        
        {/* Focal Grid (more visible in center) */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-5xl h-[60vh] opacity-50">
          <div className="h-full w-full grid grid-cols-16 grid-rows-10">
            {Array.from({ length: 160 }).map((_, i) => (
              <div 
                key={`focal-${i}`} 
                className="border border-white/20 backdrop-blur-sm"
                style={{
                  opacity: Math.random() * 0.7 + 0.3
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Subtle Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div 
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full bg-[#8B5CF6]/40 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container relative">
        {/* Version Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-black/30 backdrop-blur-lg border border-[#8B5CF6]/30 rounded-full px-4 py-2 text-white flex items-center">
            <div className="w-2 h-2 rounded-full bg-[#8B5CF6] mr-2"></div>
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
                className="absolute right-1.5 top-1.5 h-9 rounded-full"
              >
                Get Notified
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center space-x-8 mt-6">
            <div className="flex items-center">
              <Check size={16} className="text-[#8B5CF6] mr-2" />
              <span className="text-sm text-gray-300">No credit card required</span>
            </div>
            <div className="flex items-center">
              <Check size={16} className="text-[#8B5CF6] mr-2" />
              <span className="text-sm text-gray-300">7-days free trial</span>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 flex flex-col items-center">
            <div className="flex -space-x-2 mb-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gray-300 flex items-center justify-center overflow-hidden">
                  <div className={cn("w-full h-full bg-gradient-to-br", 
                    i === 1 ? "from-orange-200 to-red-300" : 
                    i === 2 ? "from-blue-200 to-purple-300" : 
                    i === 3 ? "from-green-200 to-teal-300" : 
                    "from-yellow-200 to-amber-300"
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
