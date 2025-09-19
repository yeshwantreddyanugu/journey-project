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
  Mail,
  Loader2
} from "lucide-react";

const Enquiry = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [whatsAppOptIn, setWhatsAppOptIn] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    departureCity: "",
    preferredDestination: "",
    preferredTravelDate: "",
    duration: "",
    numberOfAdults: "",
    numberOfChildren: "",
    approximateBudget: "",
    specialPreferences: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare the data to send
    const requestData = {
      fullName: formData.fullName,
      emailAddress: formData.emailAddress,
      phoneNumber: formData.phoneNumber,
      departureCity: formData.departureCity,
      preferredDestination: formData.preferredDestination,
      preferredTravelDate: formData.preferredTravelDate,
      duration: formData.duration ? parseInt(formData.duration) : null,
      numberOfAdults: formData.numberOfAdults ? parseInt(formData.numberOfAdults) : null,
      numberOfChildren: formData.numberOfChildren ? parseInt(formData.numberOfChildren) : null,
      approximateBudget: formData.approximateBudget,
      specialPreferences: formData.specialPreferences
    };

    // Log what we're sending
    console.log("=== ENQUIRY FORM SUBMISSION ===");
    console.log("Endpoint:", "https://apilunchbox.lytortech.com/api/travel/enquiry");
    console.log("Method:", "POST");
    console.log("Headers:", {
      "Content-Type": "application/json",
    });
    console.log("Request Data:", requestData);
    console.log("Request Body (JSON String):", JSON.stringify(requestData, null, 2));
    console.log("WhatsApp Opt-in:", whatsAppOptIn);
    console.log("===========================");

    try {
      const response = await fetch("https://apilunchbox.lytortech.com/api/travel/enquiry", {
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
        setIsSubmitted(true);
        toast.success("Enquiry submitted successfully! We'll get back to you within 24 hours.");
      } else {
        const errorData = await response.json();
        console.log("❌ Error Response:", errorData);
        toast.error(errorData.message || "Failed to submit enquiry. Please try again.");
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
      console.log("=== ENQUIRY SUBMISSION COMPLETED ===");
    }
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/9845018635?text=Hi%20Happy%20Feet%20Holidays,%20I%27d%20like%20help%20planning%20a%20trip.", "_blank");
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
              
              <Button variant="outline" size="lg" className="w-full" onClick={() => {
                setIsSubmitted(false);
                // Reset form data
                setFormData({
                  fullName: "",
                  emailAddress: "",
                  phoneNumber: "",
                  departureCity: "",
                  preferredDestination: "",
                  preferredTravelDate: "",
                  duration: "",
                  numberOfAdults: "",
                  numberOfChildren: "",
                  approximateBudget: "",
                  specialPreferences: ""
                });
                setWhatsAppOptIn(false);
              }}>
                Submit Another Enquiry
              </Button>
            </div>

            <div className="mt-8 pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                Need immediate assistance? Call us at{" "}
                <a href="tel:+919845018635" className="text-primary hover:underline font-medium">
                  +91 9845018635
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
                        <p className="text-sm text-muted-foreground">+91 9845018635</p>
                        <p className="text-xs text-muted-foreground">Mon-Sat, 9 AM - 7 PM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Email Us</p>
                        <p className="text-sm text-muted-foreground">Happyfeetholidayss@gmail.com</p>
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
                          <Label htmlFor="fullName">Full Name *</Label>
                          <Input 
                            id="fullName" 
                            name="fullName" 
                            required 
                            placeholder="John Doe"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            disabled={isSubmitting}
                          />
                        </div>
                        <div>
                          <Label htmlFor="emailAddress">Email Address *</Label>
                          <Input 
                            id="emailAddress" 
                            name="emailAddress" 
                            type="email" 
                            required 
                            placeholder="john@example.com"
                            value={formData.emailAddress}
                            onChange={handleInputChange}
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phoneNumber">Phone Number *</Label>
                          <Input 
                            id="phoneNumber" 
                            name="phoneNumber" 
                            type="tel" 
                            required 
                            placeholder="+91 98765 43210"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            disabled={isSubmitting}
                          />
                        </div>
                        <div>
                          <Label htmlFor="departureCity">Departure City</Label>
                          <Input 
                            id="departureCity" 
                            name="departureCity" 
                            placeholder="Mumbai"
                            value={formData.departureCity}
                            onChange={handleInputChange}
                            disabled={isSubmitting}
                          />
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
                        <Label htmlFor="preferredDestination">Preferred Destination/Experience *</Label>
                        <Select 
                          name="preferredDestination" 
                          required 
                          value={formData.preferredDestination}
                          onValueChange={(value) => handleSelectChange('preferredDestination', value)}
                          disabled={isSubmitting}
                        >
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
                          <Label htmlFor="preferredTravelDate">Preferred Travel Dates</Label>
                          <Input 
                            id="preferredTravelDate" 
                            name="preferredTravelDate" 
                            type="date"
                            value={formData.preferredTravelDate}
                            onChange={handleInputChange}
                            disabled={isSubmitting}
                          />
                        </div>
                        <div>
                          <Label htmlFor="duration">Duration (Days)</Label>
                          <Select 
                            name="duration"
                            value={formData.duration}
                            onValueChange={(value) => handleSelectChange('duration', value)}
                            disabled={isSubmitting}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select duration" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="3">3-5 Days</SelectItem>
                              <SelectItem value="7">6-10 Days</SelectItem>
                              <SelectItem value="12">11-15 Days</SelectItem>
                              <SelectItem value="20">15+ Days</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="numberOfAdults">Number of Adults</Label>
                          <Select 
                            name="numberOfAdults"
                            value={formData.numberOfAdults}
                            onValueChange={(value) => handleSelectChange('numberOfAdults', value)}
                            disabled={isSubmitting}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Adults" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 Adult</SelectItem>
                              <SelectItem value="2">2 Adults</SelectItem>
                              <SelectItem value="3">3 Adults</SelectItem>
                              <SelectItem value="4">4 Adults</SelectItem>
                              <SelectItem value="5">5+ Adults</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="numberOfChildren">Number of Children</Label>
                          <Select 
                            name="numberOfChildren"
                            value={formData.numberOfChildren}
                            onValueChange={(value) => handleSelectChange('numberOfChildren', value)}
                            disabled={isSubmitting}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Children" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0">No Children</SelectItem>
                              <SelectItem value="1">1 Child</SelectItem>
                              <SelectItem value="2">2 Children</SelectItem>
                              <SelectItem value="3">3 Children</SelectItem>
                              <SelectItem value="4">4+ Children</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="approximateBudget">Approximate Budget Range (Per Person)</Label>
                        <Select 
                          name="approximateBudget"
                          value={formData.approximateBudget}
                          onValueChange={(value) => handleSelectChange('approximateBudget', value)}
                          disabled={isSubmitting}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="10000-25000">Budget Friendly (₹10,000 - ₹25,000)</SelectItem>
                            <SelectItem value="25000-50000">Mid-Range (₹25,000 - ₹50,000)</SelectItem>
                            <SelectItem value="50000-100000">Premium (₹50,000 - ₹1,00,000)</SelectItem>
                            <SelectItem value="100000+">Luxury (₹1,00,000+)</SelectItem>
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
                        <Label htmlFor="specialPreferences">Special Preferences/Requirements</Label>
                        <Textarea 
                          id="specialPreferences" 
                          name="specialPreferences" 
                          placeholder="Tell us about any specific interests, dietary requirements, accessibility needs, or special occasions..."
                          className="min-h-[120px]"
                          value={formData.specialPreferences}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="whatsapp-updates" 
                          checked={whatsAppOptIn}
                          onCheckedChange={(checked) => setWhatsAppOptIn(checked === true)}
                          disabled={isSubmitting}
                        />
                        <Label htmlFor="whatsapp-updates" className="text-sm">
                          Send me itineraries and updates on WhatsApp
                        </Label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        variant="hero" 
                        size="lg" 
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Submitting Enquiry...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Submit Enquiry
                          </>
                        )}
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