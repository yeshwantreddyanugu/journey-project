import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowRight, 
  ArrowLeft,
  MapPin, 
  Calendar, 
  Waves,
  Umbrella,
  Camera,
  Heart,
  Sun,
  Palmtree,
  Ship,
  Fish
} from "lucide-react";
import beachImage from "@/assets/beach-escape.jpg";

const BeachEscapes = () => {
  const destinations = [
    {
      name: "Goa Beaches",
      description: "Golden beaches, vibrant nightlife, and Portuguese charm",
      bestTime: "November to March",
      highlights: ["Pristine beaches", "Water sports", "Beach shacks", "Nightlife"]
    },
    {
      name: "Kerala Coastline", 
      description: "Serene backwaters meeting the Arabian Sea",
      bestTime: "October to March",
      highlights: ["Backwater cruises", "Ayurvedic spas", "Fresh seafood", "Cultural experiences"]
    },
    {
      name: "Andaman Islands",
      description: "Crystal clear waters and untouched coral reefs",
      bestTime: "October to May", 
      highlights: ["Scuba diving", "Coral reefs", "Island hopping", "Adventure sports"]
    },
    {
      name: "Lakshadweep",
      description: "Pristine coral atolls in turquoise waters",
      bestTime: "October to March",
      highlights: ["Coral lagoons", "Water sports", "Marine life", "Peaceful retreats"]
    }
  ];

  const inclusions = [
    {
      icon: Umbrella,
      title: "Beachfront Accommodations",
      description: "Luxury resorts and boutique properties with direct beach access"
    },
    {
      icon: Waves,
      title: "Water Sports Activities", 
      description: "Jet skiing, parasailing, snorkeling, and scuba diving experiences"
    },
    {
      icon: Ship,
      title: "Sunset Cruises",
      description: "Romantic boat rides with breathtaking sunset views"
    },
    {
      icon: Fish,
      title: "Seafood Experiences",
      description: "Fresh catch dining and local coastal cuisine experiences"
    },
    {
      icon: Camera,
      title: "Photography Sessions",
      description: "Professional beach photography to capture your memories"
    },
    {
      icon: Heart,
      title: "Spa & Wellness",
      description: "Beachside massages and rejuvenating wellness treatments"
    }
  ];

  const faqs = [
    {
      question: "What's the best time to visit beach destinations in India?",
      answer: "Generally, October to March offers the most pleasant weather for beach holidays, with comfortable temperatures and minimal rainfall."
    },
    {
      question: "Are water sports activities safe for beginners?",
      answer: "Yes, all water sports are conducted with professional instructors and safety equipment. We cater to all skill levels from beginners to experts."
    },
    {
      question: "What should I pack for a beach vacation?",
      answer: "Sunscreen, light cotton clothing, swimwear, sunglasses, hat, flip-flops, and a waterproof bag for electronics."
    },
    {
      question: "Can you arrange romantic beach experiences?",
      answer: "Absolutely! We specialize in romantic beach dinners, private sunset cruises, and intimate beachfront accommodations."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <section className="py-4 bg-muted/30">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/holidays" className="hover:text-primary">Holidays</Link>
            <span>/</span>
            <span className="text-foreground">Beach Escapes</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${beachImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <div className="flex items-center space-x-2 mb-4">
              <Waves className="w-8 h-8" />
              <span className="text-sm uppercase tracking-wider">Beach Experiences</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Beach Escapes
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Discover pristine shores, luxury resorts, and endless azure waters that create 
              the perfect coastal getaway you've been dreaming of.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" asChild>
                <Link to="/enquiry">
                  Plan Beach Escape
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="bg-white/20 text-white border-white/30 hover:bg-white hover:text-primary" asChild>
                <Link to="/holidays">
                  <ArrowLeft className="w-5 h-5" />
                  All Holidays
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Destination Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Popular Beach Destinations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From vibrant Goa to serene Andaman Islands, explore India's most beautiful coastal destinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {destinations.map((destination) => (
              <Card key={destination.name} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-foreground">{destination.name}</h3>
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{destination.description}</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground font-medium">Best Time:</span>
                      <span className="text-sm text-muted-foreground">{destination.bestTime}</span>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Highlights:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {destination.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What's Included in Your Beach Escape
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive experiences designed for the perfect coastal vacation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inclusions.map((inclusion) => {
              const Icon = inclusion.icon;
              return (
                <div key={inclusion.title} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-medium transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{inclusion.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{inclusion.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Sun className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Best Time to Visit</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-soft text-center">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-sunset rounded-full flex items-center justify-center mx-auto mb-4">
                    <Palmtree className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Peak Season</h3>
                  <p className="text-sm text-muted-foreground mb-2">December - February</p>
                  <p className="text-xs text-muted-foreground">Perfect weather, ideal for water activities</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft text-center">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sun className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Shoulder Season</h3>
                  <p className="text-sm text-muted-foreground mb-2">October - November, March</p>
                  <p className="text-xs text-muted-foreground">Great weather, fewer crowds</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft text-center">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Waves className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Off Season</h3>
                  <p className="text-sm text-muted-foreground mb-2">April - September</p>
                  <p className="text-xs text-muted-foreground">Monsoon season, best avoided</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about beach escapes
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready for Your Beach Escape?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let us create a personalized beach vacation that exceeds your expectations. 
              From luxury resorts to adventure activities, we handle every detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/enquiry">
                  Get Free Itinerary
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

export default BeachEscapes;