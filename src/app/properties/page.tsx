import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { MapPin, BedDouble, Bath, Square } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const PROPERTIES = [
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
  },
  {
    title: "Lakefront Estate",
    location: "Lake Tahoe, NV",
    price: "$6,750,000",
    beds: 5,
    baths: 4.5,
    sqft: "5,500",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    status: "Just Sold"
  },
  {
    title: "Mountain View Cabin",
    location: "Aspen, CO",
    price: "$4,200,000",
    beds: 3,
    baths: 3,
    sqft: "3,200",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    status: "For Sale"
  }
]

export const metadata = {
  title: "Properties",
  description: "Browse our exclusive listings.",
}

export default function PropertiesPage() {
  return (
    <div className="py-24 min-h-screen bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">Properties</h1>
            <p className="text-muted-foreground text-lg">Browse our exclusive listings.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PROPERTIES.map((property, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <Card className="overflow-hidden border-border/50 hover:shadow-lg transition-all group h-full flex flex-col">
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
                <CardContent className="p-5 flex-1">
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
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
