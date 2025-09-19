import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Heart, 
  Eye, 
  Target, 
  Users, 
  Globe, 
  Compass,
  Shield,
  Leaf,
  Zap
} from "lucide-react";

const About = () => {
  const visionPillars = [
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "Building lasting relationships through transparency and reliability in every interaction."
    },
    {
      icon: Heart,
      title: "Joyful Exploration", 
      description: "Creating moments of wonder and discovery that spark lifelong memories."
    },
    {
      icon: Leaf,
      title: "Responsible Tourism",
      description: "Protecting destinations and supporting local communities for sustainable travel."
    },
    {
      icon: Compass,
      title: "Making Backpacking Easy",
      description: "Simplifying adventure travel with expert guidance and seamless logistics."
    }
  ];

  const missionPoints = [
    {
      icon: Globe,
      title: "Weave Dreams into Journeys",
      description: "Transform travel aspirations into carefully crafted reality through personalized experiences."
    },
    {
      icon: Target,
      title: "Deliver Seamless Escapes", 
      description: "Eliminate travel stress with meticulous planning and 24/7 support throughout your journey."
    },
    {
      icon: Users,
      title: "Open Doors to the World",
      description: "Connect travelers with authentic local cultures and hidden gems off the beaten path."
    },
    {
      icon: Zap,
      title: "Wrap You in Comfort",
      description: "Blend modern conveniences with unique experiences using cutting-edge travel technology."
    },
    {
      icon: Heart,
      title: "Travel with Heart",
      description: "Creating meaningful connections between travelers, destinations, and local communities."
    }
  ];

  const coreValues = [
    {
      title: "Passion for Travel",
      description: "Travel is about experiences, stories, and moments that last a lifetime. Our passion drives us to curate unforgettable adventures."
    },
    {
      title: "Customer Delight",
      description: "Every trip is crafted with care to exceed expectations—beyond satisfaction to joyful memories."
    },
    {
      title: "Integrity & Trust",
      description: "Transparency, honesty, and ethical practices guide all our actions."
    },
    {
      title: "Sustainability & Responsibility",
      description: "Eco-friendly travel that supports local communities."
    },
    {
      title: "Innovation & Creativity",
      description: "Unique itineraries and personalized services for extraordinary experiences."
    },
    {
      title: "Teamwork & Collaboration",
      description: "A united team and strong local partnerships ensure seamless travel."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Happy Feet Holidays
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Where dreams meet destinations, and every journey becomes an unforgettable story.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
              <p className="text-lg first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-2">
                Happy Feet Holidays and Resorts is your trusted partner in discovering the world, offering an exciting array of curated holiday packages and exclusive resort stays across breathtaking destinations. We specialize in crafting tailor-made journeys that transform travel dreams into unforgettable memories—whether it's a relaxing beach escape, an adventurous mountain trek, or a luxurious cultural tour.
              </p>

              <p>
                At Happy Feet Holidays and Resorts, we go beyond the ordinary, providing a complete umbrella of travel solutions from customized itineraries and premium accommodations to guided experiences and seamless logistics. Step into a world of handpicked getaways, thoughtfully designed to let you explore, unwind, and truly live your travel story.
              </p>

              <p className="text-lg font-medium text-foreground">
                <strong>Travel differently. Travel happily. With Happy Feet Holidays and Resorts.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          {/* Vision */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Eye className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                To be the most trusted and innovative travel and holiday brand— inspiring joyful and responsible exploration. Backpacking made easy.
              </p>
              <p className="text-base text-muted-foreground max-w-3xl mx-auto mt-4">
                We aim to make travel a way of life—every trip leaves you richer in memories, lighter in worries, and happier at heart.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {visionPillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <Card key={pillar.title} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 text-center">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{pillar.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Mission */}
          <div>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Turn wanderlust into reality—crafting journeys that go beyond itineraries and become soul-stirring adventures.
              </p>
              <p className="text-base text-muted-foreground max-w-3xl mx-auto mt-4">
                We're not just taking you places— we're unlocking worlds, one unforgettable journey at a time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {missionPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <Card key={point.title} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                    <CardContent className="p-8 flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-ocean rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">{point.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision and shape every experience we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <div key={value.title} className="group text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 ${
                  index % 3 === 0 ? 'bg-gradient-ocean' : 
                  index % 3 === 1 ? 'bg-gradient-sunset' : 
                  'bg-accent'
                } group-hover:shadow-medium`}>
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let us craft a travel experience that reflects your dreams and exceeds your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/enquiry">
                  Plan Your Trip
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/holidays">
                  Explore Destinations
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;