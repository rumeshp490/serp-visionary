
import { useState, useEffect } from 'react';
import { PrimaryButton } from './PrimaryButton';
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
        <div className="text-white font-bold text-xl md:text-2xl font-poppins flex items-center">
          <div className="bg-white text-black w-8 h-8 rounded-lg flex items-center justify-center mr-2">
            <span className="font-bold">ST</span>
          </div>
          SERP Tracker Pro
        </div>

        {/* Desktop Navigation - Center */}
        <nav className="hidden md:flex">
          <div className="bg-white/10 backdrop-blur-md rounded-full px-2 py-1">
            <ul className="flex space-x-1">
              {['Home', 'Features', 'Pricing', 'Testimonials', 'Contact'].map((item) => (
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
          <PrimaryButton 
            variant="default" 
            className="rounded-full"
          >
            Contact Us
          </PrimaryButton>
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
            {['Home', 'Features', 'Pricing', 'Testimonials', 'Contact'].map((item) => (
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
              <PrimaryButton 
                className="w-full rounded-full"
              >
                Contact Us
              </PrimaryButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
