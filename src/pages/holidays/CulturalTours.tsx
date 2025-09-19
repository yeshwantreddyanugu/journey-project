import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  ArrowLeft,
  Building, 
  Calendar,
  MapPin,
  Users,
  Camera,
  BookOpen,
  Palette,
  Music
} from "lucide-react";
import culturalImage from "@/assets/cultural-tour.jpg";

const CulturalTours = () => {
  const destinations = [
    {
      name: "Golden Triangle",
      description: "Delhi, Agra, and Jaipur - India's most iconic cultural circuit",
      bestTime: "October to March",
      duration: "7-10 Days",
      highlights: ["Taj Mahal", "Red Fort", "Amber Palace", "Qutub Minar"]
    },
    {
      name: "Rajasthan Heritage",
      description: "Royal palaces, desert forts, and vibrant cultural traditions",
      bestTime: "October to March",
      duration: "10-15 Days", 
      highlights: ["Udaipur palaces", "Jodhpur fort", "Desert camps", "Folk performances"]
    },
    {
      name: "South Indian Temples",
      description: "Ancient temples, classical arts, and spiritual traditions",
      bestTime: "November to February",
      duration: "8-12 Days",
      highlights: ["Meenakshi Temple", "Hampi ruins", "Kathakali shows", "Temple festivals"]
    },
    {
      name: "Northeast Culture",
      description: "Tribal heritage, living traditions, and untouched cultures",
      bestTime: "October to April",
      duration: "7-14 Days",
      highlights: ["Tribal villages", "Handicrafts", "Local festivals", "Traditional cuisine"]
    }
  ];

  const inclusions = [
    {
      icon: Users,
      title: "Expert Cultural Guides",
      description: "Local historians and cultural experts who bring heritage sites to life"
    },
    {
      icon: Building,
      title: "Heritage Site Access",
      description: "Skip-the-line access to monuments and exclusive behind-the-scenes tours"
    },
    {
      icon: Palette,
      title: "Art Workshops",
      description: "Hands-on experiences in traditional crafts, painting, and local arts"
    },
    {
      icon: Music,
      title: "Cultural Performances",
      description: "Private shows featuring classical dance, music, and folk performances"
    },
    {
      icon: BookOpen,
      title: "Historical Context",
      description: "Detailed narratives about history, architecture, and cultural significance"
    },
    {
      icon: Camera,
      title: "Photography Guidance",
      description: "Tips and assistance for capturing the beauty of cultural landmarks"
    }
  ];

  const experiences = [
    {
      title: "Living with Local Families",
      description: "Stay with local families to experience authentic daily life and traditions",
      icon: Users
    },
    {
      title: "Traditional Cooking Classes", 
      description: "Learn regional recipes and cooking techniques from local chefs",
      icon: Palette
    },
    {
      title: "Craft Workshop Sessions",
      description: "Master traditional crafts like pottery, weaving, and metalwork",
      icon: Building
    },
    {
      title: "Festival Celebrations",
      description: "Participate in local festivals and religious celebrations",
      icon: Music
    }
  ];

  const faqs = [
    {
      question: "Are cultural tours suitable for families with children?",
      answer: "Absolutely! We design family-friendly itineraries with engaging activities for children, including interactive workshops and storytelling sessions."
    },
    {
      question: "What should I wear when visiting religious sites?",
      answer: "We provide detailed dress codes for each site. Generally, modest clothing covering shoulders and knees is required. We'll brief you on specific requirements."
    },
    {
      question: "Can you accommodate dietary restrictions?",
      answer: "Yes, we cater to all dietary needs including vegetarian, vegan, gluten-free, and religious dietary requirements. Local cuisine experiences can be customized accordingly."
    },
    {
      question: "How much walking is involved in cultural tours?",
      answer: "Walking varies by site. We provide comfortable transportation and can arrange alternatives for those with mobility concerns. Most sites are accessible with moderate walking."
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
            <span className="text-foreground">Cultural Tours</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${culturalImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <div className="flex items-center space-x-2 mb-4">
              <Building className="w-8 h-8" />
              <span className="text-sm uppercase tracking-wider">Cultural Experiences</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Cultural Tours
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Immerse yourself in rich heritage, ancient traditions, and authentic local 
              experiences that reveal the soul of India's diverse cultures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" asChild>
                <Link to="/enquiry">
                  Explore Heritage
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
              Popular Cultural Destinations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover India's rich heritage through carefully curated cultural journeys
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
                        <Building className="w-4 h-4 text-primary" />
                        <span className="text-sm text-foreground font-medium">Duration:</span>
                        <span className="text-sm text-muted-foreground">{destination.duration}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Key Highlights:</h4>
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
              What's Included in Your Cultural Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive cultural immersion with expert guidance and authentic experiences
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

      {/* Authentic Experiences */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Authentic Cultural Experiences
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Go beyond sightseeing with immersive experiences that connect you with local cultures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {experiences.map((experience) => {
              const Icon = experience.icon;
              return (
                <Card key={experience.title} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-8 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-ocean rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{experience.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{experience.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Planning Your Cultural Journey
            </h2>
            
            <Card className="border-0 shadow-soft">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="w-12 h-12 bg-gradient-sunset rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Best Season</h3>
                    <p className="text-sm text-muted-foreground">October to March for most regions</p>
                  </div>
                  
                  <div>
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Group Size</h3>
                    <p className="text-sm text-muted-foreground">Small groups for personalized experiences</p>
                  </div>
                  
                  <div>
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Duration</h3>
                    <p className="text-sm text-muted-foreground">7-15 days depending on region</p>
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
              Everything you need to know about cultural tours
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
              Ready to Explore India's Rich Heritage?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Embark on a cultural journey that will deepen your understanding and 
              appreciation of India's diverse traditions and timeless heritage.
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

export default CulturalTours;