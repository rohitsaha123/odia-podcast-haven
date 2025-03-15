
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-12',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 group"
          aria-label="Home"
        >
          <Youtube 
            size={28} 
            className={cn(
              'transition-colors duration-300',
              isScrolled ? 'text-odia-vermilion' : 'text-white'
            )} 
          />
          <span 
            className={cn(
              'font-display text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-odia-gold',
              isScrolled ? 'text-odia-dark' : 'text-white'
            )}
          >
            OdiaCast
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" isScrolled={isScrolled}>Home</NavLink>
          <NavLink to="/about" isScrolled={isScrolled}>About</NavLink>
          <NavLink to="/contact" isScrolled={isScrolled}>Contact</NavLink>
          <Button 
            variant="outline" 
            size="sm" 
            className={cn(
              'hover-scale focus-ring',
              isScrolled 
                ? 'border-odia-vermilion text-odia-vermilion hover:bg-odia-vermilion/10' 
                : 'border-white text-white hover:bg-white/10'
            )}
          >
            Subscribe
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden z-50 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X 
              size={24} 
              className={isScrolled ? 'text-odia-dark' : 'text-white'} 
            />
          ) : (
            <Menu 
              size={24} 
              className={isScrolled ? 'text-odia-dark' : 'text-white'} 
            />
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-md z-40 flex flex-col justify-center items-center space-y-8 animate-fade-in">
            <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
            <MobileNavLink to="/about" onClick={toggleMenu}>About</MobileNavLink>
            <MobileNavLink to="/contact" onClick={toggleMenu}>Contact</MobileNavLink>
            <Button 
              variant="outline" 
              size="lg" 
              className="hover-scale focus-ring mt-4 border-odia-gold text-odia-gold hover:bg-odia-gold/10 text-lg"
            >
              Subscribe
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  isScrolled: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, isScrolled }) => {
  return (
    <Link
      to={to}
      className={cn(
        'relative font-medium hover:text-odia-gold transition-colors duration-300 py-2',
        'after:absolute after:block after:w-full after:h-0.5 after:bottom-0 after:left-0',
        'after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300',
        'after:origin-right hover:after:origin-left',
        isScrolled 
          ? 'text-odia-dark after:bg-odia-gold' 
          : 'text-white after:bg-white'
      )}
    >
      {children}
    </Link>
  );
};

interface MobileNavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, children, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="text-white text-2xl font-medium hover:text-odia-gold transition-colors duration-300"
    >
      {children}
    </Link>
  );
};

export default Navbar;
