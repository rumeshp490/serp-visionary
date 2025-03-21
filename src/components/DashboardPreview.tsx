
import React from 'react';

const DashboardPreview = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#0c0616] pointer-events-none"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl">
        <div className="h-full w-full grid grid-cols-12 opacity-20 pointer-events-none">
          {Array.from({ length: 48 }).map((_, i) => (
            <div 
              key={i} 
              className="border border-purple-500/10"
            />
          ))}
        </div>
      </div>

      <div className="container relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Powerful Analytics Dashboard</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Track your financial metrics with our intuitive dashboard, featuring real-time data visualization and comprehensive reporting tools.</p>
        </div>
        
        <div className="relative mx-auto max-w-5xl">
          {/* Main dashboard image */}
          <div className="relative z-10 glass-morphism rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="/lovable-uploads/08d9ab5f-0098-4eb0-8660-95b456ead7fd.png" 
              alt="Financial analytics dashboard showing revenue metrics and charts" 
              className="w-full h-auto"
            />
          </div>
          
          {/* Decorative glow effect */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-20 bg-purple-500/20 blur-[100px] rounded-full"></div>
        </div>

        {/* Feature highlights below the dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
          <div className="neo-blur rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-white">Real-Time Analytics</h3>
            <p className="text-gray-300">Monitor your business performance with live data updates and actionable insights.</p>
          </div>
          <div className="neo-blur rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-white">Financial Forecasting</h3>
            <p className="text-gray-300">Predict future trends with our AI-powered forecasting tools and make data-driven decisions.</p>
          </div>
          <div className="neo-blur rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-white">Custom Reporting</h3>
            <p className="text-gray-300">Create tailored reports and visualizations to communicate key metrics effectively.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
