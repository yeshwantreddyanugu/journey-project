import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { 
  Send, 
  MapPin, 
  Calendar, 
  Users, 
  DollarSign, 
  MessageCircle,
  CheckCircle,
  Phone,
  Mail
} from "lucide-react";

const Enquiry = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsAppOptIn, setWhatsAppOptIn] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      toast.success("Enquiry submitted successfully! We'll get back to you within 24 hours.");
    }, 1000);
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890?text=Hi%20Happy%20Feet%20Holidays,%20I%27d%20like%20help%20planning%20a%20trip.", "_blank");
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/10 px-4">
        <Card className="max-w-2xl w-full border-0 shadow-strong">
          <CardContent className="p-12 text-center">
            <div className="w-20 h-20 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-primary-foreground" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Thank You for Your Enquiry!
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We've received your travel request and our expert team is already working on creating 
              the perfect itinerary for you. You'll hear from us within 24 hours.
            </p>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-foreground mb-4">What Happens Next?</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                  <span className="text-sm text-muted-foreground">Our travel expert will review your requirements</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                  <span className="text-sm text-muted-foreground">We'll create a personalized itinerary with recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                  <span className="text-sm text-muted-foreground">You'll receive a detailed proposal via email or WhatsApp</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Button variant="whatsapp" size="lg" onClick={handleWhatsAppClick} className="w-full">
                <MessageCircle className="w-5 h-5" />
                Chat with us on WhatsApp
              </Button>
              
              <Button variant="outline" size="lg" className="w-full" onClick={() => setIsSubmitted(false)}>
                Submit Another Enquiry
              </Button>
            </div>

            <div className="mt-8 pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                Need immediate assistance? Call us at{" "}
                <a href="tel:+919876543210" className="text-primary hover:underline font-medium">
                  +91 98765 43210
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Plan Your Perfect Journey
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tell us about your dream vacation, and we'll create a personalized itinerary that exceeds your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <Card className="border-0 shadow-soft sticky top-8">
                <CardHeader>
                  <CardTitle className="text-xl">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Call Us</p>
                        <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                        <p className="text-xs text-muted-foreground">Mon-Sat, 9 AM - 7 PM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Email Us</p>
                        <p className="text-sm text-muted-foreground">hello@happyfeetholidays.com</p>
                        <p className="text-xs text-muted-foreground">We respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <MessageCircle className="w-5 h-5 text-[#25D366] mt-1" />
                      <div>
                        <p className="font-medium text-foreground">WhatsApp</p>
                        <p className="text-sm text-muted-foreground">Quick responses</p>
                        <Button 
                          variant="link" 
                          className="p-0 h-auto text-xs text-[#25D366]" 
                          onClick={handleWhatsAppClick}
                        >
                          Start conversation →
                        </Button>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Why Choose Us?</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Personalized itineraries</li>
                      <li>• 24/7 travel support</li>
                      <li>• Best price guarantee</li>
                      <li>• Local expertise</li>
                      <li>• Hassle-free bookings</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Enquiry Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl">Travel Enquiry Form</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the details below and we'll create a customized travel proposal for you.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground flex items-center">
                        <Users className="w-5 h-5 mr-2" />
                        Personal Information
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input id="name" name="name" required placeholder="John Doe" />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input id="email" name="email" type="email" required placeholder="john@example.com" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input id="phone" name="phone" type="tel" required placeholder="+91 98765 43210" />
                        </div>
                        <div>
                          <Label htmlFor="departure-city">Departure City</Label>
                          <Input id="departure-city" name="departureCity" placeholder="Mumbai" />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Travel Details */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground flex items-center">
                        <MapPin className="w-5 h-5 mr-2" />
                        Travel Preferences
                      </h3>
                      
                      <div>
                        <Label htmlFor="destination">Preferred Destination/Experience *</Label>
                        <Select name="destination" required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your preferred experience" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beach-escapes">Beach Escapes</SelectItem>
                            <SelectItem value="mountain-treks">Mountain Treks</SelectItem>
                            <SelectItem value="cultural-tours">Cultural Tours</SelectItem>
                            <SelectItem value="family-getaways">Family Getaways</SelectItem>
                            <SelectItem value="hill-stations">Hill Stations</SelectItem>
                            <SelectItem value="backwaters">Backwaters</SelectItem>
                            <SelectItem value="heritage-culture">Heritage & Culture</SelectItem>
                            <SelectItem value="wildlife-adventure">Wildlife & Adventure</SelectItem>
                            <SelectItem value="custom">Custom Itinerary</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="travel-dates">Preferred Travel Dates</Label>
                          <Input id="travel-dates" name="travelDates" type="date" />
                        </div>
                        <div>
                          <Label htmlFor="duration">Duration (Days)</Label>
                          <Select name="duration">
                            <SelectTrigger>
                              <SelectValue placeholder="Select duration" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="3-5">3-5 Days</SelectItem>
                              <SelectItem value="6-10">6-10 Days</SelectItem>
                              <SelectItem value="11-15">11-15 Days</SelectItem>
                              <SelectItem value="15+">15+ Days</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="adults">Number of Adults</Label>
                          <Select name="adults">
                            <SelectTrigger>
                              <SelectValue placeholder="Adults" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 Adult</SelectItem>
                              <SelectItem value="2">2 Adults</SelectItem>
                              <SelectItem value="3">3 Adults</SelectItem>
                              <SelectItem value="4">4 Adults</SelectItem>
                              <SelectItem value="5+">5+ Adults</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="children">Number of Children</Label>
                          <Select name="children">
                            <SelectTrigger>
                              <SelectValue placeholder="Children" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0">No Children</SelectItem>
                              <SelectItem value="1">1 Child</SelectItem>
                              <SelectItem value="2">2 Children</SelectItem>
                              <SelectItem value="3">3 Children</SelectItem>
                              <SelectItem value="4+">4+ Children</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="budget">Approximate Budget Range (Per Person)</Label>
                        <Select name="budget">
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="budget">Budget Friendly (₹10,000 - ₹25,000)</SelectItem>
                            <SelectItem value="mid-range">Mid-Range (₹25,000 - ₹50,000)</SelectItem>
                            <SelectItem value="premium">Premium (₹50,000 - ₹1,00,000)</SelectItem>
                            <SelectItem value="luxury">Luxury (₹1,00,000+)</SelectItem>
                            <SelectItem value="discuss">Prefer to Discuss</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Separator />

                    {/* Additional Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Additional Information</h3>
                      
                      <div>
                        <Label htmlFor="preferences">Special Preferences/Requirements</Label>
                        <Textarea 
                          id="preferences" 
                          name="preferences" 
                          placeholder="Tell us about any specific interests, dietary requirements, accessibility needs, or special occasions..."
                          className="min-h-[120px]"
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="whatsapp-updates" 
                          checked={whatsAppOptIn}
                          onCheckedChange={(checked) => setWhatsAppOptIn(checked === true)}
                        />
                        <Label htmlFor="whatsapp-updates" className="text-sm">
                          Send me itineraries and updates on WhatsApp
                        </Label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button type="submit" variant="hero" size="lg" className="w-full">
                        <Send className="w-5 h-5" />
                        Submit Enquiry
                      </Button>
                      <p className="text-xs text-muted-foreground text-center mt-2">
                        We'll respond within 24 hours with a personalized travel proposal
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;