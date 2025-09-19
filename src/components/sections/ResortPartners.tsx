import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";

const ResortPartners = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/9845018635?text=Hi%20Happy%20Feet%20Holidays,%20I%27d%20like%20help%20planning%20a%20trip.", "_blank");
  };

  const featuredResorts = [
    { name: "Country Club Wildlife Resort, Bandipur", category: "Wildlife" },
    { name: "Country Club Valley Vista, Kodaikanal", category: "Hill Station" },
    { name: "Country Club Hyderabad", category: "City" },
    { name: "Club Mahindra Ashtamudi", category: "Backwaters" },
    { name: "Club Mahindra Arookutty", category: "Backwaters" },
    { name: "Club Mahindra Ooty", category: "Hill Station" },
    { name: "Club Mahindra Rajasthan", category: "Heritage" },
    { name: "Sterling Anaikatti", category: "Nature" },
    { name: "Sterling Ooty", category: "Hill Station" },
    { name: "Club Mahindra Madikeri – Coorg", category: "Coffee Plantation" },
    { name: "Sterling Yercaud", category: "Hill Station" },
    { name: "Sterling Goa", category: "Beach" },
    { name: "Sterling Kodai Lake View", category: "Hill Station" },
    { name: "Sterling Shimla", category: "Hill Station" },
    { name: "Sterling Manali", category: "Adventure" }
  ];

  const partnerNetworks = {
    karnataka: [
      "Adarsh Hamilton", "Amanvana Resort", "Bheemeshwari Adventure and Nature Camp",
      "Bison Resort", "Club Mahindra Coorg", "Club Mahindra Derby Green",
      "Country Club Mysore", "Country Club Wildlife Resort", "Dhole's Den Resort",
      "Eagle Ridge Resort", "Evolve Back Coorg", "Guhantara Resort",
      "Hamsa Resort Bandipur", "Hulikere Homestay", "Jungle Lodges Bandipur",
      "Kamath Residency", "Kaveri Lodge Resort", "King's Sanctuary Resort",
      "Kyathanahalli Homestay", "La Roseraie Hotel", "Landmark Hotel",
      "Monarch Safari Lodge", "Mount N Mist Resort", "Nature Camp Galibore",
      "Peppercorn Beach Resort", "Polaroid Resort", "President Resort",
      "Quality Inn Ocean Palms", "Ras Resort", "Red Earth Kabini",
      "River Tern Lodge", "Serai Kabini", "Silver Oak Resort",
      "Spring Valley Resort", "Sterling Ooty", "The Fern Residency",
      "The Gateway Hotel", "The Golden Palace", "The Serai Bandipur",
      "Tiger Groove Resort", "Waterwoods Lodge"
    ],
    
    tamilnadu: [
      "ATDC Aringar Anna Resort", "ATDC Hotel Tamil Nadu", "ATDC Yatri Nivas",
      "Club Mahindra Kandaghat", "Country Club Valley Vista Kodaikanal",
      "GRT Comforts Inn", "GRT Grand Chola", "Hotel Hilltop Towers",
      "Hotel Le Gardenia", "Hotel Nest Woods", "Kodai Resort Hotel",
      "La Posada Hotel", "Paradise Resort", "RobinShore Residency",
      "Sterling Holidays", "Sterling Kodai Lake View", "Sterling Ooty",
      "Sterling Yercaud", "The Carlton", "The Kurinji", "The Villa Retreat",
      "Woodlands Hotel"
    ],
    
    goa: [
      "Aldeia Santa Rita", "Anjuna Beach Resort", "Blue Planet Resort",
      "Casa Anjuna Hotel", "Club Mahindra Varca Beach Resort", "Falcon Resort",
      "Goan Village Resort", "Golden Tulip Resort", "Hotel Miramar Residency",
      "Keys Lite Resort", "Lemon Tree Hotel", "My Rest Inn Hotel",
      "Palmarinha Resort", "Panjim Pousada", "Park Hyatt Goa Resort",
      "Pousada by the Beach", "Radisson Resort Goa", "Santiago Beach Resort",
      "Sterling Goa", "The LaLiT Golf & Spa Resort", "The Leela Goa",
      "Village by the Beach"
    ]
  };

  const clubMahindraLocations = {
    karnataka: ["Coorg", "Derby Green", "Virajpet"],
    goa: ["Varca Beach Resort", "Acacia Palms Resort"],
    kerala: ["Ashtamudi", "Arookutty", "Cherai Beach", "Thekkady"],
    gujarat: ["Udaipur Lake Resort", "Mount Abu"],
    rajasthan: ["Jaipur", "Udaipur", "Kumbhalgarh"],
    maharashtra: ["Mahabaleshwar", "Alibaug", "Nashik"]
  };

  const sterlingResorts = [
    "Sterling Anaikatti", "Sterling Ooty", "Sterling Yercaud", "Sterling Goa",
    "Sterling Kodai Lake View", "Sterling Shimla", "Sterling Manali",
    "Sterling Valley View Mahabaleshwar", "Sterling Holidays Lonavala",
    "Sterling Resort Puri", "Sterling Darjeeling", "Sterling Gangtok",
    "Sterling Munnar", "Sterling Wayanad", "Sterling Thekkady",
    "Sterling Karwar", "Sterling Fern Hill", "Sterling Resort Mussoorie",
    "Sterling Palm Meadows", "Sterling Paradise", "Sterling White Waters",
    "Sterling Sariska", "Sterling Kanha", "Sterling Corbett",
    "Sterling Resorts Yelagiri", "Sterling Resort Kotagiri",
    "Sterling Resort Nainital", "Sterling Resort Panchgani",
    "Sterling Holidays Jim Corbett", "Sterling Holidays Kasauli",
    "Sterling Holidays Lansdowne", "Sterling Holidays Ranikhet",
    "Sterling Resort Coorg", "Sterling Holidays Chikmagalur",
    "Sterling Resort Bandipur", "Sterling Holidays Kumbakonam",
    "Sterling Holidays Pondicherry", "Sterling Resort Shirdi",
    "Sterling Holidays Mount Abu", "Sterling Resort Silvassa",
    "Sterling Holidays Rishikesh", "Sterling Resort Dharamshala",
    "Sterling Holidays Dalhousie", "Sterling Resort Kullu Manali",
    "Sterling Holidays Palampur", "Sterling Resort Khajjiar",
    "Sterling Holidays Solan", "Sterling Resort Rajkot",
    "Sterling Holidays Vadodara", "Sterling Resort Bhavnagar"
  ];

  const internationalResorts = {
    malaysia: ["Hotel Sentral Kuala Lumpur", "Pacific Regency Hotel Suites"],
    singapore: ["Hotel Grand Pacific", "Marina Mandarin Singapore"],
    srilanka: ["Cinnamon Grand Colombo", "Heritance Kandalama"],
    maldives: ["Vilamendhoo Island Resort", "Reethi Beach Resort"],
    dubai: ["Al Seef Heritage Hotel", "Golden Sands Hotel"],
    thailand: ["Bangkok Palace Hotel", "Centara Grand Beach Resort"],
    italy: ["Hotel Artemide Roma", "Grand Hotel Palatino"],
    france: ["Hotel Malte Opera Paris", "Best Western Hotel Montmartre"],
    uk: ["The Z Hotel Piccadilly", "Premier Inn London"],
    usa: ["Pod Hotels New York", "The High Line Hotel"],
    hongkong: ["Best Western Plus Hotel Hong Kong", "Dorsett Wanchai"],
    azerbaijan: ["Fairmont Baku", "Four Points by Sheraton Baku"],
    vietnam: ["Rex Hotel Saigon", "Palace Hotel Saigon"],
    russia: ["Radisson Royal Hotel Moscow", "Metropol Hotel Moscow"],
    laos: ["Settha Palace Hotel Vientiane", "Green Park Boutique Hotel"],
    japan: ["Hotel Gracery Tokyo", "Kyoto Brighton Hotel"]
  };

  const jungleCamps = [
    "Bheemeshwari Adventure & Nature Camp", "Galibore Nature Camp",
    "Dubare Elephant Camp", "Hogenakkal Nature Camp", "Cauvery Fishing Camp",
    "Kabini River Lodge", "Orange County Kabini", "The Serai Kabini",
    "Waterwoods Lodge & Resorts", "Red Earth Kabini", "Evolve Back Kabini",
    "JLR Bandipur Safari Lodge", "Tiger Groove Resort", "Dhole's Den Resort",
    "Monarch Safari Lodge Bandipur"
  ];

  return (
    <div className="space-y-16">
      {/* Featured Resorts */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Resort Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience luxury and comfort at our carefully selected resort partners across India and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredResorts.map((resort, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full mb-2">
                      {resort.category}
                    </span>
                    <h3 className="font-semibold text-foreground">{resort.name}</h3>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1" asChild>
                      <Link to="/enquiry">
                        Request Quote
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button variant="whatsapp" size="sm" onClick={handleWhatsAppClick}>
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Resort Networks */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Resort Networks
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            "No toy or gadget can replace the magic of a holiday spent together… Happy Feet Holidays designs trips that aren't just vacations, but the threads that weave your family's most beautiful memories."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Karnataka Resorts */}
          <Card className="border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="text-xl">Karnataka Resorts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                {partnerNetworks.karnataka.slice(0, 20).map((resort, index) => (
                  <div key={index} className="flex items-center text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                    {resort}
                  </div>
                ))}
                <div className="text-primary font-medium col-span-full mt-2">
                  + {partnerNetworks.karnataka.length - 20} more resorts
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tamil Nadu Resorts */}
          <Card className="border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="text-xl">Tamil Nadu Resorts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                {partnerNetworks.tamilnadu.slice(0, 20).map((resort, index) => (
                  <div key={index} className="flex items-center text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                    {resort}
                  </div>
                ))}
                <div className="text-primary font-medium col-span-full mt-2">
                  + {Math.max(0, partnerNetworks.tamilnadu.length - 20)} more resorts
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Club Mahindra Network */}
          <Card className="border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="text-xl">Club Mahindra Network</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(clubMahindraLocations).map(([state, locations]) => (
                  <div key={state}>
                    <h4 className="font-semibold text-foreground capitalize mb-2">{state}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                      {locations.map((location, index) => (
                        <div key={index} className="flex items-center text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                          {location}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sterling Resorts */}
          <Card className="border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="text-xl">Sterling Resorts Network (49 Locations)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm max-h-64 overflow-y-auto">
                {sterlingResorts.map((resort, index) => (
                  <div key={index} className="flex items-center text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                    {resort}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* International Resorts */}
      <section>
        <Card className="border-0 shadow-soft">
          <CardHeader>
            <CardTitle className="text-2xl">International Resort Partners</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(internationalResorts).map(([country, hotels]) => (
                <div key={country}>
                  <h4 className="font-semibold text-foreground capitalize mb-3">{country}</h4>
                  <div className="space-y-2">
                    {hotels.map((hotel, index) => (
                      <div key={index} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                        {hotel}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Jungle & Nature Camps */}
      <section>
        <Card className="border-0 shadow-soft">
          <CardHeader>
            <CardTitle className="text-2xl">Jungle & Nature Camps in Karnataka</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {jungleCamps.map((camp, index) => (
                <div key={index} className="flex items-center text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                  {camp}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Dining Privilege Card */}
      <section>
        <Card className="border-0 shadow-soft bg-gradient-to-r from-accent/10 to-primary/5">
          <CardHeader>
            <CardTitle className="text-2xl">Happy Feet Exclusive Privilege Card – 20% Dining Discount</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground mb-6">
              Flash your card and enjoy a 20% discount on food at partner resorts and restaurants.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">North India</h4>
                <p className="text-sm text-muted-foreground">
                  Enjoy privileges across Delhi, Punjab, Himachal Pradesh, Uttarakhand, and Rajasthan with exclusive dining discounts at premium restaurants and resort properties.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-3">South India</h4>
                <p className="text-sm text-muted-foreground">
                  Access special rates across Karnataka, Tamil Nadu, Kerala, and Andhra Pradesh at top-rated restaurants and luxury resort dining venues.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-3">East India</h4>
                <p className="text-sm text-muted-foreground">
                  Special privileges in West Bengal, Odisha, and northeastern states with curated dining experiences at heritage hotels and local specialty restaurants.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-3">West India</h4>
                <p className="text-sm text-muted-foreground">
                  Exclusive benefits across Maharashtra, Gujarat, Goa, and Madhya Pradesh featuring coastal cuisines, traditional thalis, and luxury resort dining.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default ResortPartners;