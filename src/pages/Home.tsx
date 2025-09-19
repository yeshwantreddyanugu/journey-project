import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowRight, 
  Heart, 
  Shield, 
  Leaf, 
  Zap, 
  Users,
  Star,
  MapPin,
  Calendar,
  MessageCircle
} from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";
import beachImage from "@/assets/beach-escape.jpg";
import mountainImage from "@/assets/mountain-trek.jpg";
import culturalImage from "@/assets/cultural-tour.jpg";
import familyImage from "@/assets/family-getaway.jpg";

const Home = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/9845718635?text=Hi%20Happy%20Feet%20Holidays,%20I%27d%20like%20help%20planning%20a%20trip.", "_blank");
  };

  const experiences = [
    {
      title: "Beach Escapes",
      description: "Pristine shores, luxury resorts, and endless azure waters await your perfect coastal getaway.",
      image: beachImage,
      link: "/holidays/beach-escapes",
      inclusions: ["Beachfront accommodation", "Water sports", "Sunset cruises", "Spa treatments"]
    },
    {
      title: "Mountain Treks",
      description: "Conquer majestic peaks and discover breathtaking vistas on our expertly guided adventures.",
      image: mountainImage,
      link: "/holidays/mountain-treks",
      inclusions: ["Professional guides", "Safety equipment", "Mountain lodges", "Scenic routes"]
    },
    {
      title: "Cultural Tours",
      description: "Immerse yourself in rich heritage, ancient traditions, and authentic local experiences.",
      image: culturalImage,
      link: "/holidays/cultural-tours",
      inclusions: ["Expert cultural guides", "Heritage site visits", "Local cuisine", "Art workshops"]
    },
    {
      title: "Family Getaways",
      description: "Create lasting memories with activities designed for every member of your family.",
      image: familyImage,
      link: "/holidays/family-getaways",
      inclusions: ["Family-friendly resorts", "Kids' activities", "Group excursions", "Safe environments"]
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Travel",
      description: "Travel is about experiences, stories, and moments that last a lifetime."
    },
    {
      icon: Heart,
      title: "Customer Delight", 
      description: "Every trip is crafted with care to exceed expectations—beyond satisfaction to joyful memories."
    },
    {
      icon: Shield,
      title: "Integrity & Trust",
      description: "Transparency, honesty, and ethical practices guide all our actions."
    },
    {
      icon: Leaf,
      title: "Sustainability & Responsibility",
      description: "Eco-friendly travel that supports local communities."
    },
    {
      icon: Zap,
      title: "Innovation & Creativity",
      description: "Unique itineraries and personalized services for extraordinary experiences."
    },
    {
      icon: Users,
      title: "Teamwork & Collaboration",
      description: "A united team and strong local partnerships ensure seamless travel."
    }
  ];

  const testimonials = [
    {
      quote: "Happy Feet Holidays turned our vacation into a dream come true! Every detail was perfectly planned, and the resort was pure luxury. Can't wait for our next trip!",
      name: "Rinil & Kiran",
      location: "Bengaluru",
      rating: 5
    },
    {
      quote: "From the moment we booked till we returned, the service was flawless. The destinations were breathtaking, and the experiences unforgettable.",
      name: "Nagma, Veda & Chaitra",
      location: "Mangalore",
      rating: 5
    },
    {
      quote: "It felt like they understood exactly what we wanted. Stress-free planning, amazing resorts, and memories that will last a lifetime.",
      name: "Nigil",
      location: "Chennai",
      rating: 5
    },
    {
      quote: "I've travelled a lot, but this was next-level! The personal touch and attention to detail made all the difference.",
      name: "Priya M.",
      location: "Mumbai",
      rating: 5
    },
    {
      quote: "The best family holiday we've ever had. The kids loved it, and we got the relaxation we desperately needed.",
      name: "Joel & Keeriti",
      location: "Pune",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Happy Feet Holidays.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Unforgettable Memories.
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Tailor-made journeys, premium stays, and seamless logistics—crafted with heart.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="cta" size="xl" asChild>
              <Link to="/enquiry">
                Enquire Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={handleWhatsAppClick}
              className="bg-white/20 text-white border-white/30 hover:bg-white hover:text-primary backdrop-blur-sm"
            >
              Talk on WhatsApp
              <MessageCircle className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Discover Your Perfect Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From serene beaches to adventurous mountains, we curate experiences that create lasting memories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experiences.map((experience) => (
              <Card key={experience.title} className="group overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={experience.image} 
                    alt={experience.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold mb-1">{experience.title}</h3>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {experience.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-medium text-sm text-foreground">What's Included:</h4>
                    <ul className="space-y-1">
                      {experience.inclusions.slice(0, 2).map((inclusion, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                          {inclusion}
                        </li>
                      ))}
                      {/* <li className="text-sm text-primary font-medium">+ More inclusions</li> */}
                    </ul>
                  </div>

                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground" asChild>
                    <Link to={experience.link}>
                      Explore Experience
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Happy Feet Holidays?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence ensures every journey exceeds expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-medium transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Real experiences from our delighted customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg text-foreground mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="space-y-1">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground flex items-center justify-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/enquiry">
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;