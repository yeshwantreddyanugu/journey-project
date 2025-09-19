import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send,
  ArrowRight,
  Globe,
  Facebook,
  Instagram,
  Twitter,
  Loader2
} from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleQuickEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare the data to send
    const requestData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject || "Travel Enquiry",
      message: formData.message
    };

    // Log what we're sending
    console.log("=== CONTACT FORM SUBMISSION ===");
    console.log("Endpoint:", "https://apilunchbox.lytortech.com/api/travel/submit");
    console.log("Method:", "POST");
    console.log("Headers:", {
      "Content-Type": "application/json",
    });
    console.log("Request Data:", requestData);
    console.log("Request Body (JSON String):", JSON.stringify(requestData, null, 2));
    console.log("================================");

    try {
      const response = await fetch("https://apilunchbox.lytortech.com/api/travel/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData)
      });

      // Log response details
      console.log("=== RESPONSE DETAILS ===");
      console.log("Status:", response.status);
      console.log("Status Text:", response.statusText);
      console.log("Headers:", Object.fromEntries(response.headers.entries()));
      console.log("========================");

      if (response.ok) {
        const result = await response.json();
        console.log("✅ Success Response:", result);
        toast.success("Thank you! We'll get back to you shortly.");
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
      } else {
        const errorData = await response.json();
        console.log("❌ Error Response:", errorData);
        toast.error(errorData.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("❌ Network/Fetch Error:", error);
      console.log("Error details:", {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
      console.log("=== FORM SUBMISSION COMPLETED ===");
    }
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/9845018635?text=Hi%20Happy%20Feet%20Holidays,%20I%27d%20like%20help%20planning%20a%20trip.", "_blank");
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Location",
      details: [
        "Happy Feet Holidays & Resorts",
        "No.115/26/A/1, Shop No.2, Poorna Pragna Layout",
        "10th Main Road, Cauvery Nagar, Banashankari Stage 3",
        "Bengaluru 560085"
      ],
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Main: +91 9845018635",
        "WhatsApp: +91 9845018635"
      ],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "General: Happyfeetholidayss@gmail.com"
      ],
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 7:00 PM",
        "Saturday: 10:00 AM - 6:00 PM",
        "Sunday: 11:00 AM - 4:00 PM"
      ],
      action: "Plan Visit"
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#", color: "text-blue-600" },
    { name: "Instagram", icon: Instagram, href: "#", color: "text-pink-600" },
    { name: "Twitter", icon: Twitter, href: "#", color: "text-sky-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions about your next adventure? Our travel experts are here to help 
              you plan the perfect journey, every step of the way.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <Card key={info.title} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-ocean rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-3">{info.title}</h3>
                          <div className="space-y-1">
                            {info.details.map((detail, index) => (
                              <p key={index} className="text-sm text-muted-foreground">
                                {detail}
                              </p>
                            ))}
                          </div>
                          <Button variant="link" className="p-0 h-auto mt-2 text-primary">
                            {info.action} →
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Map Placeholder */}
            <Card className="border-0 shadow-soft">
              <CardContent className="p-0">
                <div className="aspect-[16/9] bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Map</h3>
                    <p className="text-muted-foreground mb-4">
                      Find our office location and get directions
                    </p>
                    <Button variant="outline">
                      View on Google Maps
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp Section */}
            <Card className="border-0 shadow-soft bg-gradient-to-r from-[#25D366]/10 to-[#25D366]/5">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Need Instant Assistance?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Chat with our travel experts on WhatsApp for quick responses and personalized recommendations.
                </p>
                <Button variant="whatsapp" size="lg" onClick={handleWhatsAppClick}>
                  <MessageCircle className="w-5 h-5" />
                  Start WhatsApp Chat
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Enquiry Form */}
          <div className="space-y-8">
            <Card className="border-0 shadow-soft sticky top-8">
              <CardHeader>
                <CardTitle className="text-xl">Quick Enquiry</CardTitle>
                <p className="text-muted-foreground text-sm">
                  Send us a quick message and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleQuickEnquirySubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="quick-name">Name *</Label>
                    <Input 
                      id="quick-name" 
                      name="name" 
                      required 
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="quick-email">Email *</Label>
                    <Input 
                      id="quick-email" 
                      name="email" 
                      type="email" 
                      required 
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="quick-phone">Phone</Label>
                    <Input 
                      id="quick-phone" 
                      name="phone" 
                      type="tel" 
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="quick-subject">Subject</Label>
                    <Input 
                      id="quick-subject" 
                      name="subject" 
                      placeholder="Travel enquiry"
                      value={formData.subject}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="quick-message">Message *</Label>
                    <Textarea 
                      id="quick-message" 
                      name="message" 
                      required 
                      placeholder="Tell us how we can help you..."
                      className="min-h-[100px]"
                      value={formData.message}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Social Media & Additional Info */}
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Connect With Us</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-3">Follow us on social media</p>
                    <div className="flex space-x-3">
                      {socialLinks.map((social) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={social.name}
                            href={social.href}
                            className={`p-3 rounded-lg bg-background border border-border hover:shadow-soft transition-all duration-300 ${social.color}`}
                            aria-label={`Follow us on ${social.name}`}
                          >
                            <Icon className="w-5 h-5" />
                          </a>
                        );
                      })}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Globe className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">Website</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      www.happyfeetholidays.com
                    </p>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="space-y-3">
                  <h4 className="font-medium text-foreground">Ready to Plan Your Trip?</h4>
                  <p className="text-sm text-muted-foreground">
                    For detailed travel planning, use our comprehensive enquiry form.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/enquiry">
                      Complete Travel Form
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;