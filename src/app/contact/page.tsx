import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

export const metadata = {
  title: "Contact",
  description: "Schedule a private consultation.",
}

export default function ContactPage() {
  return (
    <div className="py-24 relative overflow-hidden min-h-screen flex items-center">
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
        <ScrollReveal>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Ready to find your dream home?</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10">
            Schedule a private consultation with our luxury real estate specialists today.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <div className="bg-background/10 backdrop-blur-md p-8 rounded-2xl max-w-lg mx-auto">
            <form className="space-y-4 text-left">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input type="text" className="w-full bg-background text-foreground rounded-lg p-3" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" className="w-full bg-background text-foreground rounded-lg p-3" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea className="w-full bg-background text-foreground rounded-lg p-3 min-h-[100px]" placeholder="How can we help you?" />
              </div>
              <Button size="lg" variant="secondary" className="w-full rounded-full h-14 text-base font-semibold mt-4">
                Send Message
              </Button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
