import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRobotClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const robotSection = document.getElementById('robot');
      if (robotSection) {
        robotSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = '/#robot';
    }
  };

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Robot', href: '#robot', onClick: handleRobotClick },
    { name: 'Division', href: '/division' },
    { name: 'History', href: '/history' },
    { name: 'Members', href: '/members' },
  ];

  const rightLinks = [
    { name: 'Support', href: '/support' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-elevation-medium'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/lovable-uploads/c5164d44-7986-4c0e-9408-e2802edeb221.png"
            alt="Bandhayudha"
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={link.onClick}
              className="text-foreground hover:text-tech-blue transition-colors duration-200 font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side Buttons - Desktop */}
        <div className="hidden lg:flex items-center space-x-4">
          {rightLinks.map((link) => (
            <Button
              key={link.name}
              asChild
              variant={link.name === 'Contact Us' ? 'default' : 'outline'}
              className="font-medium"
            >
              <Link to={link.href}>{link.name}</Link>
            </Button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => {
                  if (link.onClick) link.onClick(e);
                  setIsMobileMenuOpen(false);
                }}
                className="block text-foreground hover:text-tech-blue transition-colors duration-200 font-medium py-2"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border space-y-2">
              {rightLinks.map((link) => (
                <Button
                  key={link.name}
                  asChild
                  variant={link.name === 'Contact Us' ? 'default' : 'outline'}
                  className="w-full font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link to={link.href}>{link.name}</Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;