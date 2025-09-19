import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  ArrowLeft,
  Users, 
  Calendar,
  MapPin,
  Heart,
  Shield,
  GamepadIcon,
  Baby,
  Car
} from "lucide-react";
import familyImage from "@/assets/family-getaway.jpg";

const FamilyGetaways = () => {
  const destinations = [
    {
      name: "Beach Family Resorts",
      description: "Child-friendly beach destinations with safe activities",
      bestTime: "October to March",
      ageGroup: "All Ages",
      highlights: ["Kids' clubs", "Swimming pools", "Beach activities", "Family rooms"]
    },
    {
      name: "Hill Station Retreats",
      description: "Cool climate destinations perfect for family bonding",
      bestTime: "April to June, September to November", 
      ageGroup: "All Ages",
      highlights: ["Nature walks", "Adventure parks", "Cable car rides", "Pleasant weather"]
    },
    {
      name: "Wildlife Sanctuaries",
      description: "Educational and exciting wildlife experiences for kids",
      bestTime: "November to April",
      ageGroup: "5+ Years",
      highlights: ["Safari rides", "Wildlife photography", "Nature education", "Comfortable lodges"]
    },
    {
      name: "Cultural Heritage Sites",
      description: "Interactive historical experiences designed for families",
      bestTime: "October to March",
      ageGroup: "8+ Years", 
      highlights: ["Historical tours", "Interactive museums", "Cultural shows", "Heritage walks"]
    }
  ];

  const inclusions = [
    {
      icon: Shield,
      title: "Family-Friendly Accommodations",
      description: "Spacious rooms, connecting suites, and child-safe environments"
    },
    {
      icon: GamepadIcon,
      title: "Kids' Activity Programs",
      description: "Age-appropriate activities, games, and educational programs"
    },
    {
      icon: Car,
      title: "Comfortable Transportation",
      description: "Child seats, comfortable vehicles, and flexible travel schedules"
    },
    {
      icon: Baby,
      title: "Childcare Support",
      description: "Professional babysitting services and kids' club facilities"
    },
    {
      icon: Heart,
      title: "Family Bonding Activities",
      description: "Specially designed experiences that bring families closer together"
    },
    {
      icon: Users,
      title: "Multi-Generation Planning",
      description: "Activities suitable for grandparents, parents, and children"
    }
  ];

  const ageGroups = [
    {
      age: "0-3 Years",
      title: "Toddler-Friendly",
      features: [
        "Stroller-friendly destinations",
        "Baby facilities available", 
        "Shorter travel distances",
        "Flexible schedules"
      ]
    },
    {
      age: "4-8 Years",
      title: "Adventure Seekers",
      features: [
        "Interactive experiences",
        "Adventure activities",
        "Educational programs",
        "Playground facilities"
      ]
    },
    {
      age: "9+ Years",
      title: "Explorer Experience",
      features: [
        "Cultural learning",
        "Wildlife adventures", 
        "Photography sessions",
        "Independence activities"
      ]
    }
  ];

  const safetyFeatures = [
    "24/7 medical assistance",
    "Child-proofed accommodations", 
    "Trained family travel guides",
    "Emergency contact protocols",
    "Safe transportation with car seats",
    "First aid trained staff"
  ];

  const faqs = [
    {
      question: "Are your family tours suitable for toddlers?",
      answer: "Yes! We specialize in multi-generational travel and have specific programs for families with toddlers, including stroller-friendly itineraries and baby-care facilities."
    },
    {
      question: "What if my child has special dietary requirements?",
      answer: "We accommodate all dietary needs including allergies, preferences, and cultural requirements. Our restaurants and hotels are briefed about your family's specific needs in advance."
    },
    {
      question: "Do you provide babysitting services?",
      answer: "Many of our partner resorts offer professional childcare services. We can arrange qualified babysitters so parents can enjoy some adult time while children are safely cared for."
    },
    {
      question: "How do you handle medical emergencies with children?",
      answer: "All our family tours include 24/7 medical support. We maintain partnerships with pediatric care facilities and our guides are trained in basic first aid for children."
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
            <span className="text-foreground">Family Getaways</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${familyImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <div className="flex items-center space-x-2 mb-4">
              <Users className="w-8 h-8" />
              <span className="text-sm uppercase tracking-wider">Family Experiences</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Family Getaways
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Create lasting memories with activities and accommodations designed for 
              every member of your family, from toddlers to grandparents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" asChild>
                <Link to="/enquiry">
                  Plan Family Trip
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
              Family-Friendly Destinations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Carefully selected destinations that offer something special for every family member
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
                        <Users className="w-4 h-4 text-primary" />
                        <span className="text-sm text-foreground font-medium">Suitable For:</span>
                        <span className="text-sm text-muted-foreground">{destination.ageGroup}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Family Features:</h4>
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
              What's Included for Families
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive support and services designed specifically for family travel
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

      {/* Age-Appropriate Activities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Activities by Age Group
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored experiences that cater to different age groups within your family
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {ageGroups.map((group, index) => (
              <Card key={group.age} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
                    index === 0 ? 'bg-gradient-sunset' : 
                    index === 1 ? 'bg-gradient-ocean' : 
                    'bg-accent'
                  }`}>
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h3 className="text-xl font-bold text-foreground">{group.title}</h3>
                    <p className="text-sm text-primary font-medium">{group.age}</p>
                  </div>
                  
                  <ul className="space-y-3 text-left">
                    {group.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Support */}
      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Family Safety & Support</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Your family's safety and comfort is our highest priority
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
                    <h4 className="font-semibold text-foreground mb-4">Family Support Services</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Our family travel specialists understand the unique needs of traveling with children. 
                      We provide pre-trip planning, destination briefings, and 24/7 support throughout your journey.
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      From packing checklists to emergency protocols, we ensure your family travels with 
                      confidence and peace of mind.
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
              Common questions about traveling with families
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
              Ready for an Amazing Family Adventure?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Create unforgettable memories with your loved ones. Our family travel experts 
              will design the perfect getaway that delights every member of your family.
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

export default FamilyGetaways;