import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Search, 
  ArrowRight, 
  Waves,
  Mountain, 
  Building, 
  Trees,
  Compass
} from "lucide-react";
import beachImage from "@/assets/beach-escape.jpg";
import mountainImage from "@/assets/mountain-trek.jpg";
import culturalImage from "@/assets/cultural-tour.jpg";
import familyImage from "@/assets/family-getaway.jpg";
import ResortPartners from "@/components/sections/ResortPartners";

const Holidays = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      title: "Beach Escapes",
      description: "Pristine coastlines, luxury resorts, and endless azure waters for the perfect tropical getaway.",
      image: beachImage,
      link: "/holidays/beach-escapes",
      icon: Waves,
      highlights: [
        "Beachfront luxury resorts",
        "Water sports & diving",
        "Sunset cruise experiences",
        "Spa & wellness retreats"
      ]
    },
    {
      title: "Mountain Treks", 
      description: "Conquer majestic peaks, discover breathtaking vistas, and experience the thrill of high-altitude adventures.",
      image: mountainImage,
      link: "/holidays/mountain-treks",
      icon: Mountain,
      highlights: [
        "Professional mountain guides",
        "Scenic trekking routes",
        "Mountain lodge accommodations",
        "Safety equipment included"
      ]
    },
    {
      title: "Cultural Tours",
      description: "Immerse yourself in rich heritage, ancient traditions, and authentic local experiences across diverse cultures.",
      image: culturalImage,
      link: "/holidays/cultural-tours", 
      icon: Building,
      highlights: [
        "Expert cultural guides",
        "Heritage site visits",
        "Local cuisine experiences",
        "Traditional art workshops"
      ]
    },
    {
      title: "Family Getaways",
      description: "Create lasting memories with activities and accommodations designed for every member of your family.",
      image: familyImage,
      link: "/holidays/family-getaways",
      icon: Trees,
      highlights: [
        "Family-friendly resorts",
        "Kids' activity programs",
        "Group excursions",
        "Safe, supervised environments"
      ]
    }
  ];

  const additionalCategories = [
    {
      title: "Mountain Treks & Hill Stations",
      description: "Escape to serene mountain retreats with cool climate, lush landscapes, and peaceful surroundings.",
      destinations: ["Shimla", "Manali", "Ooty", "Darjeeling", "Kodaikanal"],
      bestTime: "April to June, September to November"
    },
    {
      title: "Backwaters & Wellness",
      description: "Navigate tranquil waterways through scenic landscapes on traditional houseboats and canoes.",
      destinations: ["Kerala Backwaters", "Goa Rivers", "Ashtamudi", "Arookutty"],
      bestTime: "October to March"
    },
    {
      title: "Cultural & Heritage Tours",
      description: "Explore India's rich history through magnificent monuments, palaces, and UNESCO World Heritage sites.",
      destinations: ["Rajasthan", "Delhi", "Agra", "Hampi"],
      bestTime: "October to March"
    },
    {
      title: "Wildlife & Nature",
      description: "Encounter exotic wildlife and thrilling adventures in national parks and adventure destinations.",
      destinations: ["Bandipur", "Jim Corbett", "Ranthambore", "Gir Forest"],
      bestTime: "October to May"
    },
    {
      title: "Family & Group Getaways",
      description: "Perfect destinations for creating lasting memories with your loved ones.",
      destinations: ["Theme Parks", "Beach Resorts", "Hill Stations", "Adventure Camps"],
      bestTime: "Year-round (varies by destination)"
    }
  ];

  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredAdditionalCategories = additionalCategories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.destinations.some(dest => dest.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Discover Your Perfect Holiday
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              From quick getaways to lifetime adventures, choose handpicked experiences designed for magical moments, breathtaking destinations, and memories that last forever. Request a quote for a personalized itinerary.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search destinations, activities..."
                className="pl-10 pr-4 py-3 text-center"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Holiday Experiences
            </h2>
            <p className="text-lg text-muted-foreground">
              Handcrafted journeys for every type of traveler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Card key={category.title} className="group overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                      <p className="text-white/90 text-sm max-w-xs">{category.description}</p>
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <div className="space-y-4 mb-6">
                      <h4 className="font-semibold text-foreground">Experience Highlights:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {category.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button variant="hero" className="w-full group-hover:shadow-medium" asChild>
                      <Link to={category.link}>
                        Explore {category.title}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Categories */}
      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              More Amazing Destinations
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover even more incredible experiences across diverse landscapes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredAdditionalCategories.map((category, index) => (
              <Card key={category.title} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                    <Compass className="w-6 h-6 text-primary flex-shrink-0" />
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm text-foreground mb-2">Popular Destinations:</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.destinations.map((dest, idx) => (
                          <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                            {dest}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-sm text-foreground mb-2">Best Time to Visit:</h4>
                      <p className="text-sm text-muted-foreground">{category.bestTime}</p>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full mt-6" asChild>
                    <Link to="/enquiry">
                      Request Itinerary
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resort Partners */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ResortPartners />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our travel experts specialize in creating completely customized itineraries. 
              Tell us your dreams, and we'll make them reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/enquiry">
                  Create Custom Trip
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  Speak to Expert
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Holidays;