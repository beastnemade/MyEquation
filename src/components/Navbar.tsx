import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neo-charcoal/90 backdrop-blur-lg shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-neo-orange to-neo-yellow rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-white text-xl font-bold">CourseHub</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('overview')}
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
            >
              Overview
            </button>
            <span className="text-gray-600">|</span>
            <button
              onClick={() => scrollToSection('curriculum')}
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
            >
              Curriculum
            </button>
            <span className="text-gray-600">|</span>
            <button
              onClick={() => scrollToSection('mentors')}
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
            >
              Mentors
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('register')}
              className="btn-primary"
            >
              Register Here
            </button>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-neo-yellow transition-transform duration-300 hover:rotate-180" />
              ) : (
                <Moon className="w-5 h-5 text-neo-blue transition-transform duration-300 hover:rotate-180" />
              )}
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-neo-charcoal/95 backdrop-blur-lg border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('overview')}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-300 font-medium py-2"
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection('curriculum')}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-300 font-medium py-2"
            >
              Curriculum
            </button>
            <button
              onClick={() => scrollToSection('mentors')}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-300 font-medium py-2"
            >
              Mentors
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-300 font-medium py-2"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('register')}
              className="btn-primary w-full"
            >
              Register Here
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
