
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white font-bold text-xl md:text-2xl font-sans flex items-center">
          <div className="bg-[#8B5CF6] w-10 h-10 rounded-lg flex items-center justify-center mr-3">
            <span className="text-white font-bold">Sa</span>
          </div>
          SaaStify
        </div>

        {/* Desktop Navigation - Center */}
        <nav className="hidden md:flex items-center">
          <div className="bg-white/10 backdrop-blur-md rounded-full px-2 py-1 border border-white/10">
            <ul className="flex space-x-1">
              {['About', 'Blog', 'Pricing', 'Features'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-white hover:text-gray-300 px-4 py-2 rounded-full transition-colors duration-200 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#pages"
                  className="text-white hover:text-gray-300 px-4 py-2 rounded-full transition-colors duration-200 inline-flex items-center"
                >
                  All Pages <ChevronDown className="ml-1 w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Button 
            variant="glass" 
            className="rounded-full border border-[#8B5CF6] shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md p-4 animate-fade-in">
          <nav className="flex flex-col space-y-4 py-4">
            {['About', 'Blog', 'Pricing', 'Features'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-gray-300 transition-colors duration-200 py-2 px-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="#pages"
              className="text-white hover:text-gray-300 transition-colors duration-200 py-2 px-4 flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              All Pages <ChevronDown className="ml-1 w-4 h-4" />
            </a>
            <div className="pt-4">
              <Button 
                className="w-full rounded-full border border-[#8B5CF6] bg-white/5 backdrop-blur-md text-white shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
              >
                Contact Us
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
