"use client"

import Link from "next/link"
import { Menu, Home, Phone, Info, Search } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle
} from "./ui/sheet"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 lg:px-8 flex h-20 items-center justify-between">
        
        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger render={
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            } />
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-6 mt-8">
                <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl font-bold font-display tracking-tight flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-primary-foreground">L</div>
                  LART REALTY
                </Link>
                <div className="flex flex-col gap-4 text-lg font-medium mt-4">
                  <Link href="/properties" onClick={() => setIsOpen(false)} className="flex items-center gap-3 hover:text-primary transition-colors"><Home className="w-5 h-5" /> Properties</Link>
                  <Link href="/agents" onClick={() => setIsOpen(false)} className="flex items-center gap-3 hover:text-primary transition-colors"><Info className="w-5 h-5" /> Agents</Link>
                  <Link href="/contact" onClick={() => setIsOpen(false)} className="flex items-center gap-3 hover:text-primary transition-colors"><Phone className="w-5 h-5" /> Contact</Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <div className="flex flex-1 md:flex-none justify-center md:justify-start items-center">
          <Link href="/" className="font-display font-bold text-2xl tracking-tight flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-primary-foreground text-xl">L</div>
            Lart<span className="font-light">Realty</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/properties" className="hover:text-primary transition-colors">Properties</Link>
          <Link href="/agents" className="hover:text-primary transition-colors">Agents</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button className="hidden md:inline-flex rounded-full px-6" render={<Link href="/contact">Consultation</Link>} />
        </div>

      </div>
    </header>
  )
}
