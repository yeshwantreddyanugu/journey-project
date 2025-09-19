import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  ArrowLeft,
  Mountain, 
  Calendar,
  MapPin,
  Compass,
  Camera,
  Shield,
  Backpack,
  TreePine
} from "lucide-react";
import mountainImage from "@/assets/mountain-trek.jpg";

const MountainTreks = () => {
  const destinations = [
    {
      name: "Himalayan Peaks",
      description: "Conquer the world's highest mountain ranges",
      bestTime: "March to May, September to November", 
      difficulty: "Moderate to Challenging",
      highlights: ["Everest Base Camp", "Annapurna Circuit", "Manaslu Trek", "K2 Base Camp"]
    },
    {
      name: "Western Ghats",
      description: "Lush green mountains of South India",
      bestTime: "October to March",
      difficulty: "Easy to Moderate", 
      highlights: ["Sahyadri ranges", "Coffee plantations", "Wildlife sanctuaries", "Hill stations"]
    },
    {
      name: "Northeast Ranges",
      description: "Unexplored peaks of Northeast India", 
      bestTime: "October to April",
      difficulty: "Moderate",
      highlights: ["Dzukou Valley", "Singalila Ridge", "Goecha La", "Living root bridges"]
    },
    {
      name: "Rajasthan Hills",
      description: "Desert mountain landscapes and forts",
      bestTime: "October to March",
      difficulty: "Easy to Moderate",
      highlights: ["Mount Abu", "Aravalli ranges", "Ancient forts", "Desert views"]
    }
  ];

  const inclusions = [
    {
      icon: Shield,
      title: "Professional Guides",
      description: "Experienced mountain guides with local knowledge and safety training"
    },
    {
      icon: Backpack,
      title: "Equipment & Gear",
      description: "High-quality trekking equipment, safety gear, and camping essentials"
    },
    {
      icon: TreePine,
      title: "Mountain Lodges",
      description: "Comfortable accommodations in mountain lodges and base camps"
    },
    {
      icon: Compass,
      title: "Route Planning",
      description: "Carefully planned routes with acclimatization and rest days"
    },
    {
      icon: Camera,
      title: "Photography Support",
      description: "Guidance for capturing stunning mountain landscapes and memories"
    },
    {
      icon: Mountain,
      title: "Summit Assistance",
      description: "Support and guidance for successful summit attempts"
    }
  ];

  const safetyFeatures = [
    "Certified mountain guides",
    "Emergency communication equipment",
    "First aid and rescue support",
    "Weather monitoring systems",
    "Altitude sickness prevention",
    "Insurance coverage included"
  ];

  const faqs = [
    {
      question: "What fitness level is required for mountain treks?",
      answer: "Fitness requirements vary by trek difficulty. We recommend regular cardio exercise and hiking preparation. We'll provide a detailed fitness guide upon booking."
    },
    {
      question: "What gear do I need to bring?",
      answer: "We provide most technical equipment. You'll need personal items like hiking boots, warm clothing, and personal gear. A detailed packing list will be provided."
    },
    {
      question: "How do you handle altitude sickness?",
      answer: "Our itineraries include proper acclimatization days. Our guides are trained in altitude sickness recognition and we carry necessary medications and oxygen."
    },
    {
      question: "What about weather conditions?",
      answer: "We monitor weather closely and may adjust routes for safety. Our guides have extensive experience in mountain weather conditions and emergency protocols."
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
            <span className="text-foreground">Mountain Treks</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${mountainImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <div className="flex items-center space-x-2 mb-4">
              <Mountain className="w-8 h-8" />
              <span className="text-sm uppercase tracking-wider">Adventure Experiences</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Mountain Treks
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Conquer majestic peaks, discover breathtaking vistas, and experience the thrill 
              of high-altitude adventures with expert guides and comprehensive support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" asChild>
                <Link to="/enquiry">
                  Plan Trek Adventure
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
              Popular Trekking Destinations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From the mighty Himalayas to the scenic Western Ghats, explore India's most spectacular mountain ranges
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
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm text-foreground font-medium">Best Time:</span>
                        <span className="text-sm text-muted-foreground">{destination.bestTime}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mountain className="w-4 h-4 text-primary" />
                        <span className="text-sm text-foreground font-medium">Difficulty:</span>
                        <span className="text-sm text-muted-foreground">{destination.difficulty}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Popular Treks:</h4>
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
              What's Included in Your Trek
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive support and equipment for a safe and memorable mountain adventure
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

      {/* Safety Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Safety First</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Your safety is our top priority on every mountain adventure
              </p>
            </div>

            <Card className="border-0 shadow-soft">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-6">Safety Measures</h3>
                    <ul className="space-y-3">
                      {safetyFeatures.map((feature, index) => (
                        <li key={index} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6">
                    <h4 className="font-semibold text-foreground mb-4">Emergency Protocol</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Our experienced guides carry satellite communication devices and are trained in 
                      wilderness first aid and mountain rescue techniques.
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Every trek includes comprehensive insurance coverage and 24/7 emergency support 
                      from our base operations team.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
              Everything you need to know about mountain trekking
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
              Ready for Your Mountain Adventure?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join us for an unforgettable journey to the peaks. Our expert team will ensure 
              your safety while creating memories that last a lifetime.
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

export default MountainTreks;