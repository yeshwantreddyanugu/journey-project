import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919845742597?text=Hi%20Happy%20Feet%20Holidays,%20I%27d%20like%20help%20planning%20a%20trip.", "_blank");
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className={`relative transition-all duration-300 ${isHovered ? "transform scale-110" : ""
          }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Tooltip */}
        <div
          className={`absolute bottom-16 right-0 bg-[#25D366] text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap transform transition-all duration-300 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
        >
          Need help planning your trip?
          <div className="absolute -bottom-2 right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#25D366]"></div>
        </div>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="bg-[#25D366] hover:bg-[#20bd5d] text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          aria-label="Contact via WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-7 h-7 fill-current"
          >
            <path d="M16.003 2.003c-7.732 0-14 6.268-14 14 0 2.465.644 4.869 1.87 6.981L2 30l7.19-1.855A13.92 13.92 0 0 0 16.003 30c7.732 0 14-6.268 14-14s-6.268-13.997-14-13.997zm0 25.998c-2.34 0-4.618-.62-6.61-1.79l-.47-.28-4.27 1.1 1.14-4.16-.3-.48a11.92 11.92 0 0 1-1.82-6.4c0-6.627 5.373-12 12-12 6.63 0 12 5.373 12 12s-5.37 12.01-11.97 12.01zm6.61-8.99c-.36-.18-2.14-1.06-2.47-1.18-.33-.12-.57-.18-.81.18s-.93 1.18-1.14 1.42c-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.9-1.78-1.07-.95-1.8-2.13-2.01-2.49-.21-.36-.02-.56.16-.74.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.81-1.95-1.11-2.67-.29-.7-.59-.6-.81-.61h-.69c-.24 0-.63.09-.96.45-.33.36-1.26 1.23-1.26 3s1.29 3.48 1.47 3.72c.18.24 2.52 3.85 6.11 5.39.85.37 1.51.59 2.03.75.85.27 1.63.23 2.25.14.69-.1 2.14-.87 2.44-1.71.3-.84.3-1.56.21-1.71-.09-.15-.33-.24-.69-.42z" />
          </svg>
        </button>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 w-6 h-6 bg-muted border border-border rounded-full flex items-center justify-center text-xs hover:bg-accent transition-colors"
          aria-label="Close WhatsApp button"
        >
          <X className="w-3 h-3" />
        </button>

        {/* Ripple Animation */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default WhatsAppFloat;