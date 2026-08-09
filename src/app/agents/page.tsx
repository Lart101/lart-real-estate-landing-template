import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

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
  },
  {
    name: "Emma Watson",
    role: "Relocation Expert",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
  },
  {
    name: "James Wilson",
    role: "Investment Analyst",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Sophia Lee",
    role: "First-Time Buyer Specialist",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=1974&auto=format&fit=crop"
  }
]

export const metadata = {
  title: "Agents",
  description: "Meet our experts.",
}

export default function AgentsPage() {
  return (
    <div className="py-24 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">Meet Our Experts</h1>
            <p className="text-muted-foreground text-lg">The industry's most dedicated professionals.</p>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-12">
          {AGENTS.map((agent, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="text-center group">
                <Avatar className="w-48 h-48 mx-auto mb-6 border-4 border-background shadow-xl transition-transform duration-300 group-hover:scale-105">
                  <AvatarImage src={agent.image} className="object-cover" />
                  <AvatarFallback>{agent.name[0]}</AvatarFallback>
                </Avatar>
                <h3 className="font-display font-bold text-xl">{agent.name}</h3>
                <p className="text-muted-foreground mb-4">{agent.role}</p>
                <Button variant="outline" size="sm" className="rounded-full">Contact</Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
