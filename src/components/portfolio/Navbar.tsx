import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download, Home, User, Code, Mail, FileText } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const Navbar: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = isHomePage ? [
    { href: "#about", label: "About", icon: User },
    { href: "#skills", label: "Skills", icon: Code },
    { href: "#projects", label: "Projects", icon: FileText },
    { href: "/resume/view", label: "Resume", icon: FileText, isLink: true },
    { href: "#contact", label: "Contact", icon: Mail },
  ] : [
    { href: "/", label: "Home", icon: Home, isLink: true },
  ];
  
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'backdrop-blur-md bg-background/80 border-b border-border/60 shadow-lg' 
        : 'backdrop-blur-sm bg-background/50'
    }`}>
      <div className="container mx-auto flex items-center justify-between py-3 sm:py-4">
        {/* Logo */}
        <Link 
          to="/" 
          className="font-display text-xl sm:text-2xl font-bold text-gradient hover:scale-105 transition-transform duration-300"
        >
          Rafiatu Ibrahim
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navItems.map((item) => (
            item.isLink ? (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            )
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          <ThemeToggle />
          <Button asChild variant="outline" size="sm" className="hover-scale">
            <Link to="/resume/view" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Resume
            </Link>
          </Button>
          <Button asChild size="sm" className="hover-scale bg-gradient-primary text-white shadow-glow">
            {isHomePage ? (
              <a href="#contact">Hire Me</a>
            ) : (
              <Link to="/">Home</Link>
            )}
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button 
            className="p-2 rounded-lg hover:bg-muted transition-colors" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-md">
          <div className="container mx-auto py-4 sm:py-6 space-y-3 sm:space-y-4">
            {navItems.map((item) => (
              item.isLink ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium">{item.label}</span>
                </a>
              )
            ))}
            
            <div className="pt-4 border-t border-border/60 space-y-3">
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/resume/view" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  View Resume
                </Link>
              </Button>
              <Button asChild className="w-full justify-start bg-gradient-primary text-white">
                {isHomePage ? (
                  <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                    <Mail className="w-4 h-4 mr-2" />
                    Hire Me
                  </a>
                ) : (
                  <Link to="/" onClick={() => setIsMenuOpen(false)}>
                    <Home className="w-4 h-4 mr-2" />
                    Go Home
                  </Link>
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;