
import React from 'react';
import { TrendingUp, LineChart, Users, Globe, Bell, BarChart, Search, Zap } from 'lucide-react';
import Header from '../components/Header';
import { PrimaryButton } from '../components/PrimaryButton';
import FeatureCard from '../components/FeatureCard';
import PriceCard from '../components/PriceCard';
import TestimonialCard from '../components/TestimonialCard';
import DashboardMockup from '../components/DashboardMockup';
import KeywordTrendCard from '../components/KeywordTrendCard';
import Footer from '../components/Footer';

const Index = () => {
  const features = [
    {
      icon: Search,
      title: "Core SERP Tracking",
      description: "Daily rank tracking & automated updates for all your keywords"
    },
    {
      icon: Bell,
      title: "Real-Time Alerts",
      description: "Instant notifications when your rankings change significantly"
    },
    {
      icon: Users,
      title: "Competitor Insights",
      description: "Track and compare performance with your top competitors"
    },
    {
      icon: Globe,
      title: "Multi-Device Tracking",
      description: "Monitor rankings across desktop, mobile, and local search"
    },
    {
      icon: LineChart,
      title: "Advanced Analytics",
      description: "Deep insights with custom reports and data visualization"
    },
    {
      icon: Zap,
      title: "API & Integrations",
      description: "Connect seamlessly with your favorite SEO tools"
    }
  ];

  const pricingPlans = [
    {
      title: "Basic",
      price: "$19",
      features: [
        "100 Keywords",
        "Daily Updates",
        "Email Reports",
        "Basic Analytics",
      ]
    },
    {
      title: "Pro",
      price: "$49",
      features: [
        "500 Keywords",
        "Real-time Alerts",
        "Competitor Tracking",
        "Advanced Analytics",
        "API Access"
      ]
    },
    {
      title: "Enterprise",
      price: "$99",
      features: [
        "2000+ Keywords",
        "Priority Updates",
        "Custom Reports",
        "Dedicated Support",
        "White Label Option"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "SERP Tracker Pro revolutionized how we monitor our search rankings. The real-time alerts are game-changing.",
      name: "Lisa Chen",
      company: "Growth Marketing Lead",
      rating: 5
    },
    {
      quote: "The competitor tracking feature helped us identify key opportunities and improve our rankings significantly.",
      name: "Marcus Wilson",
      company: "SEO Director",
      rating: 5
    },
    {
      quote: "Best investment for our agency. The white label reports are perfect for client presentations.",
      name: "Sarah Johnson",
      company: "Agency Owner",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-600/20 via-black to-black"></div>
        </div>
        
        <div className="container relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Track Your Keywords. Master Your Rankings.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Daily updates, real-time alerts, and in-depth insights to optimize your SEO strategy
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <PrimaryButton size="lg">Try for Free</PrimaryButton>
              <PrimaryButton variant="outline" size="lg">Learn More</PrimaryButton>
            </div>
          </div>
          
          <DashboardMockup className="max-w-4xl mx-auto" />
          
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-4">Trusted by leading SEO experts & agencies</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              {/* Add partner logos here */}
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 md:py-32 bg-black/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose SERP Tracker Pro?
            </h2>
            <p className="text-gray-300">
              Powerful features designed to give you complete control over your SEO performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Analytics Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Advanced SEO Analytics & Insights
              </h2>
              <p className="text-gray-300 mb-8">
                Get comprehensive insights into your SEO performance with our advanced analytics dashboard.
              </p>
              <ul className="space-y-4">
                {[
                  "Track historical ranking trends",
                  "Monitor keyword volatility",
                  "Compare competitor performance",
                  "Generate custom reports"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <TrendingUp size={20} className="text-white" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { keyword: "digital marketing", rank: 3, change: "+2", trend: [5,4,4,3,3,3,3] },
                { keyword: "seo services", rank: 1, change: "+4", trend: [5,4,3,2,2,1,1] },
                { keyword: "web design", rank: 2, change: "-1", trend: [1,1,1,1,2,2,2] },
                { keyword: "content strategy", rank: 4, change: "+1", trend: [5,5,4,4,4,4,4] }
              ].map((item, index) => (
                <KeywordTrendCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-20 md:py-32 bg-black/50" id="pricing">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Choose Your Plan
            </h2>
            <p className="text-gray-300">
              Select the perfect plan for your SEO tracking needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PriceCard
                key={index}
                title={plan.title}
                price={plan.price}
                features={plan.features}
                featured={index === 1}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our Users Say
            </h2>
            <p className="text-gray-300">
              Join thousands of satisfied users who trust SERP Tracker Pro
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-black/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Tracking Your SEO Rankings Today
            </h2>
            <p className="text-gray-300 mb-8">
              Join thousands of successful businesses that trust SERP Tracker Pro
            </p>
            <PrimaryButton size="lg">Try for Free</PrimaryButton>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
