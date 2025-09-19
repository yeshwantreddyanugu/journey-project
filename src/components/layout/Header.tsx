import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Holidays", href: "/holidays" },
    { name: "Enquiry", href: "/enquiry" },
    { name: "Contact Us", href: "/contact" },
  ];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890?text=Hi%20Happy%20Feet%20Holidays,%20I%27d%20like%20help%20planning%20a%20trip.", "_blank");
  };

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50">
        Skip to main content
      </a>
      <header className={`fixed top-0 w-full z-40 transition-smooth ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-medium" : "bg-transparent"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-ocean rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">HF</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-foreground">Happy Feet Holidays</h1>
                <p className="text-xs text-muted-foreground">& Resorts</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-smooth hover:text-primary ${
                    location.pathname === item.href 
                      ? "text-primary border-b-2 border-primary" 
                      : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handleWhatsAppClick}
                className="text-[#25D366] border-[#25D366] hover:bg-[#25D366] hover:text-white"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
              <Button variant="hero" size="sm" asChild>
                <Link to="/enquiry">Enquire Now</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-foreground hover:bg-accent"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-background border-t border-border">
              <nav className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-smooth ${
                      location.pathname === item.href
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:bg-accent"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 space-y-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleWhatsAppClick}
                    className="w-full text-[#25D366] border-[#25D366]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Chat
                  </Button>
                  <Button variant="hero" size="sm" className="w-full" asChild>
                    <Link to="/enquiry" onClick={() => setIsMobileMenuOpen(false)}>
                      Enquire Now
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;