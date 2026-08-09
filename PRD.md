# Product Requirements Document: Lart Real Estate Landing Template

## 1. Overview
The **Lart Real Estate Landing Template** is a luxurious, spacious static template meant for realtors, boutique property developments, and luxury leasing agents. It emphasizes high-quality property imagery, neighborhood highlights, and easy lead generation.

## 2. Technical Stack & UI Architecture
- **Framework**: Next.js (App Router) - Static Export / SSG Focus
- **Styling**: Tailwind CSS
- **Component Library**: **Shadcn UI** (Carousel for properties, Dialog for virtual tours, Form for contact/leads, Accordion for property details)
- **Themeing**: Full Dark/Light Mode support via `next-themes`.
  - *Light Mode*: Highly spacious, elegant whites, soft taupe/beige accents.
  - *Dark Mode*: Sophisticated dark slate, gold or muted brass accents for a premium architectural feel.
- **Media**: Architectural and interior photography sourced from web URLs.

## 3. Comprehensive Theme & Aesthetics
- **Typography**: Clean, architectural Sans-Serif (e.g., Roboto or Outfit) ensuring a modern, structured look.
- **Vibe**: Luxurious, spacious, structured, premium.
- **Layout**: Large edge-to-edge images, overlapping text containers, strict grid alignment.

## 4. Core Features & User Flow

### 4.1 Property Showcase
- **Hero Section**: Majestic exterior shot of a property with an overlaid search bar or "View Listings" CTA.
- **Featured Listings**: Shadcn Carousel displaying properties with beds, baths, sqft, and price.

### 4.2 Neighborhood & Amenities
- **Highlight Grid**: Interactive cards showing local amenities (schools, parks, transit).
- **Virtual Tours**: Shadcn Dialog triggering a mocked video or 3D tour iframe.

### 4.3 Agent & Contact
- **Agent Profile**: Clean section with agent headshot, bio, and direct contact links.
- **Lead Capture Form**: A sticky or clearly visible Shadcn Form to capture inquiries and schedule viewings.

## 5. Data Structures (Mocked JSON)
- **Property**: `{ id, title, price, beds, baths, sqft, address, image: webUrl }`
- **Agent**: `{ id, name, title, phone, email, avatar: webUrl }`
