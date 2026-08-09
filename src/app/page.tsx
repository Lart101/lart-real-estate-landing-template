import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, MapPin, BedDouble, Bath, Square, ChevronRight } from "lucide-react"

const FEATURED_PROPERTIES = [
  {
    title: "Modern Glass Villa",
    location: "Beverly Hills, CA",
    price: "$8,500,000",
    beds: 5,
    baths: 6,
    sqft: "7,200",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    status: "For Sale"
  },
  {
    title: "Penthouse with Ocean View",
    location: "Miami Beach, FL",
    price: "$5,200,000",
    beds: 3,
    baths: 3.5,
    sqft: "3,800",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    status: "New Listing"
  },
  {
    title: "Historic Townhouse",
    location: "Upper East Side, NY",
    price: "$12,000,000",
    beds: 6,
    baths: 5.5,
    sqft: "8,500",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09be1587?q=80&w=2070&auto=format&fit=crop",
    status: "For Sale"
  },
  {
    title: "Minimalist Desert Retreat",
    location: "Scottsdale, AZ",
    price: "$3,100,000",
    beds: 4,
    baths: 4,
    sqft: "4,200",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    status: "Under Contract"
  }
]

const AGENTS = [
  {
    name: "Michael Sterling",
    role: "Principal Broker",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Sarah Chen",
    role: "Luxury Specialist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
  },
  {
    name: "David Rodriguez",
    role: "Commercial Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  }
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex flex-col items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
            alt="Luxury home exterior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center mt-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 drop-shadow-lg">
            Find Your Next <br /> <span className="font-light italic">Extraordinary</span> Home
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12">
            Curated luxury properties in the world's most exclusive neighborhoods.
          </p>
          
          {/* Search Mockup */}
          <div className="bg-background p-4 rounded-xl shadow-2xl max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 w-full flex items-center border-b md:border-b-0 md:border-r border-border pb-4 md:pb-0 md:pr-4">
              <MapPin className="text-muted-foreground w-5 h-5 mr-3 flex-shrink-0" />
              <input type="text" placeholder="Location, Neighborhood, or Zip" className="w-full bg-transparent border-none focus:outline-none text-foreground placeholder:text-muted-foreground" />
            </div>
            <div className="w-full md:w-auto flex items-center border-b md:border-b-0 md:border-r border-border pb-4 md:pb-0 md:pr-4 px-2">
              <select className="w-full bg-transparent border-none focus:outline-none text-foreground cursor-pointer">
                <option value="buy">For Sale</option>
                <option value="rent">For Rent</option>
              </select>
            </div>
            <div className="w-full md:w-auto flex items-center border-b md:border-b-0 border-border pb-4 md:pb-0 px-2">
              <select className="w-full bg-transparent border-none focus:outline-none text-foreground cursor-pointer">
                <option value="">Property Type</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="townhouse">Townhouse</option>
              </select>
            </div>
            <Button size="lg" className="w-full md:w-auto px-8 rounded-lg mt-2 md:mt-0">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="properties" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured Listings</h2>
              <p className="text-muted-foreground">Handpicked exclusive properties.</p>
            </div>
            <Button variant="ghost" className="hidden sm:flex">
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_PROPERTIES.map((property, i) => (
              <Card key={i} className="overflow-hidden border-border/50 hover:shadow-lg transition-all group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur text-foreground font-semibold">
                      {property.status}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-5">
                  <div className="text-2xl font-display font-bold text-primary mb-2">{property.price}</div>
                  <h3 className="font-semibold text-lg line-clamp-1 mb-1">{property.title}</h3>
                  <div className="flex items-center text-muted-foreground text-sm mb-4">
                    <MapPin className="w-3.5 h-3.5 mr-1" />
                    {property.location}
                  </div>
                </CardContent>
                <CardFooter className="p-5 pt-0 flex justify-between border-t border-border/50 mt-4 text-sm text-muted-foreground pt-4">
                  <div className="flex items-center"><BedDouble className="w-4 h-4 mr-1.5" /> {property.beds}</div>
                  <div className="flex items-center"><Bath className="w-4 h-4 mr-1.5" /> {property.baths}</div>
                  <div className="flex items-center"><Square className="w-4 h-4 mr-1.5" /> {property.sqft} sqft</div>
                </CardFooter>
              </Card>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-8 sm:hidden">
            View All Properties
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Why trust Lart Realty with your next move?</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                With over two decades of experience in the luxury real estate market, our dedicated team provides unparalleled service, deep local knowledge, and access to exclusive off-market listings.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Global Reach</h4>
                    <p className="text-muted-foreground text-sm">Access to an extensive network of international buyers and exclusive properties worldwide.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">White-Glove Service</h4>
                    <p className="text-muted-foreground text-sm">Personalized guidance from initial consultation to closing and beyond.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" alt="Interior" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" alt="Exterior" fill className="object-cover" />
                </div>
                <div className="bg-primary text-primary-foreground p-6 rounded-2xl flex flex-col justify-center h-[200px]">
                  <div className="text-4xl font-display font-bold mb-2">2.5B+</div>
                  <div className="text-primary-foreground/80 font-medium">In Sales Volume</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agents */}
      <section id="agents" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Meet Our Experts</h2>
            <p className="text-muted-foreground">The industry's most dedicated professionals.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {AGENTS.map((agent, i) => (
              <div key={i} className="text-center">
                <Avatar className="w-48 h-48 mx-auto mb-6 border-4 border-background shadow-xl">
                  <AvatarImage src={agent.image} className="object-cover" />
                  <AvatarFallback>{agent.name[0]}</AvatarFallback>
                </Avatar>
                <h3 className="font-display font-bold text-xl">{agent.name}</h3>
                <p className="text-muted-foreground mb-4">{agent.role}</p>
                <Button variant="outline" size="sm" className="rounded-full">Contact</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-primary" />
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
            alt="Background pattern"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-primary-foreground max-w-3xl">
          <h2 className="text-4xl font-display font-bold mb-6">Ready to find your dream home?</h2>
          <p className="text-lg text-primary-foreground/80 mb-10">
            Schedule a private consultation with our luxury real estate specialists today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="px-8 rounded-full h-14 text-base font-semibold">
              Contact Us
            </Button>
            <Button size="lg" variant="outline" className="px-8 rounded-full h-14 text-base font-semibold border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              Browse Listings
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
