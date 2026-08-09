import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-muted pt-20 pb-10 mt-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1">
            <Link href="/" className="font-display font-bold text-2xl tracking-tight flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-primary-foreground text-xl">L</div>
              Lart<span className="font-light">Realty</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Redefining luxury real estate. We help you find properties that perfectly match your lifestyle and aspirations.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">in</a>
              <a href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">ig</a>
              <a href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">fb</a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-6">Properties</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Luxury Villas</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Penthouses</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Downtown Apartments</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Waterfront Estates</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Our Agents</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>100 Prestige Way, Suite 500</li>
              <li>Beverly Hills, CA 90210</li>
              <li className="pt-2">inquiries@lartrealty.com</li>
              <li>+1 (800) 555-0199</li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Lart Realty. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
