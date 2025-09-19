import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890?text=Hi%20Happy%20Feet%20Holidays,%20I%27d%20like%20help%20planning%20a%20trip.", "_blank");
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Holidays", href: "/holidays" },
    { name: "Beach Escapes", href: "/holidays/beach-escapes" },
    { name: "Mountain Treks", href: "/holidays/mountain-treks" },
    { name: "Cultural Tours", href: "/holidays/cultural-tours" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#", color: "text-blue-600" },
    { name: "Instagram", icon: Instagram, href: "#", color: "text-pink-600" },
    { name: "Twitter", icon: Twitter, href: "#", color: "text-sky-500" },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary/5 to-accent/5 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-ocean rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">HF</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Happy Feet Holidays</h3>
                <p className="text-sm text-muted-foreground">& Resorts</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Curated holidays with unforgettable memories. We craft tailor-made journeys, 
              premium stays, and seamless logistics—all with heart.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>123 Travel Street, Tourism District, City 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>hello@happyfeetholidays.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Our Services</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>• Customized Holiday Packages</li>
              <li>• Premium Resort Bookings</li>
              <li>• Adventure & Wildlife Tours</li>
              <li>• Cultural Heritage Experiences</li>
              <li>• Family & Group Travel</li>
              <li>• Honeymoon Specials</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Connect With Us</h3>
            
            <div className="space-y-4">
              <Button 
                variant="whatsapp" 
                size="sm" 
                onClick={handleWhatsAppClick}
                className="w-full"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </Button>
              
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/enquiry">Get Free Consultation</Link>
              </Button>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-3">Follow Us</p>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`p-2 rounded-full bg-background border border-border hover:shadow-soft transition-smooth ${social.color}`}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2024 Happy Feet Holidays & Resorts. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <Link to="/privacy" className="hover:text-primary transition-smooth">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-smooth">
                Terms of Service
              </Link>
              <span className="text-xs">
                Images courtesy of professional travel photographers
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;