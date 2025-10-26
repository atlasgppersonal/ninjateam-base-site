# Miami Natural Skincare - Complete Website Technical Specification

## Project Overview

This document provides a comprehensive technical specification for recreating the Miami Natural Skincare website (https://www.miaminaturalskincare.com/) using the Next.js framework with TypeScript, Tailwind CSS, and Contentlayer2.

## Site Architecture

### Technology Stack Integration
- **Framework**: Next.js 15.5.3 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom components
- **Content Management**: Contentlayer2 for MDX content
- **UI Components**: Headless UI components
- **Icons**: Heroicons
- **Image Optimization**: Next.js Image component

### Site Structure

```
app/
├── layout.tsx
├── page.tsx (Homepage)
├── about/
│   └── page.tsx
├── services/
│   ├── page.tsx
│   ├── orthomolecular-facial-analysis/
│   │   └── page.tsx
│   ├── microneedling/
│   │   └── page.tsx
│   ├── korean-instant-facelift/
│   │   └── page.tsx
│   ├── microcurrent-face-sculpting/
│   │   └── page.tsx
│   ├── cold-plasma/
│   │   └── page.tsx
│   ├── oxygen-facials/
│   │   └── page.tsx
│   ├── biorepeel/
│   │   └── page.tsx
│   ├── green-sponge-peel/
│   │   └── page.tsx
│   ├── mesotherapy-radiofrequency-cryo/
│   │   └── page.tsx
│   └── led-light-therapy/
│       └── page.tsx
├── menu/
│   └── page.tsx
├── products/
│   └── page.tsx
├── testimonials/
│   └── page.tsx
├── before-after/
│   └── page.tsx
├── contact/
│   └── page.tsx
├── book-online/
│   └── page.tsx
├── questionnnaire/
│   └── page.tsx
└── copy-of-questionnaire/
    └── page.tsx

components/
├── layout/
│   ├── Header.tsx
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── MobileMenu.tsx
├── ui/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   ├── TestimonialCard.tsx
│   ├── ImageCarousel.tsx
│   ├── ContactForm.tsx
│   └── PricingTable.tsx
├── sections/
│   ├── ServiceListings.tsx
│   ├── OwnerProfile.tsx
│   ├── BeforeAfterGallery.tsx
│   └── ProductBrands.tsx

data/
├── site-config.ts
├── navigation.ts
├── services.ts
├── pricing.ts
├── testimonials.ts
└── content/
    ├── services/
    │   ├── orthomolecular-facial-analysis.mdx
    │   ├── microneedling.mdx
    │   ├── korean-instant-facelift.mdx
    │   ├── microcurrent-face-sculpting.mdx
    │   ├── cold-plasma.mdx
    │   ├── oxygen-facials.mdx
    │   ├── biorepeel.mdx
    │   ├── green-sponge-peel.mdx
    │   ├── mesotherapy-radiofrequency-cryo.mdx
    │   └── led-light-therapy.mdx
    ├── about/
    │   └── suzy-robbins.mdx
    └── pages/
        ├── homepage.mdx
        ├── products.mdx
        └── contact.mdx

public/
├── images/
│   ├── services/
│   ├── testimonials/
│   ├── before-after/
│   ├── about/
│   ├── hero/
│   └── products/
└── icons/
    ├── facebook.png
    └── instagram.png
```

## Content Specification

### Site Configuration

```typescript
// data/site-config.ts
export const siteConfig = {
  name: "Miami Natural Skincare",
  description: "Holistic Skin Services in Miami Beach, Florida",
  url: "https://miaminaturalskincare.com",
  contact: {
    address: "975 Arthur Godfrey Rd, #206, Miami Beach, Florida",
    phone: "305-702-0272",
    email: "suzy@miaminaturalskincare.com"
  },
  businessHours: "Monday - Sunday, 9am - 7pm (by appointment only)",
  social: {
    facebook: "http://www.facebook.com/miaminaturalskincare",
    instagram: "https://instagram.com/miaminaturalskincare/"
  },
  booking: {
    online: "/book-online",
    giftCertificate: "/_paylink/AYqqYwgG"
  }
}
```

### Navigation Structure

```typescript
// data/navigation.ts
export const mainNavigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Menu", href: "/menu" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Orthomolecular Facial Analysis", href: "/services/orthomolecular-facial-analysis" },
      { name: "Microcurrent Face Sculpting", href: "/services/microcurrent-face-sculpting" },
      { name: "Microneedling", href: "/services/microneedling" },
      { name: "Korean Instant Facelift", href: "/services/korean-instant-facelift" },
      { name: "Cold Plasma", href: "/services/cold-plasma" },
      { name: "OxyGen Facials", href: "/services/oxygen-facials" },
      { name: "Biomicroneedling", href: "/services/green-sponge-peel" },
      { name: "BioRePeel", href: "/services/biorepeel" },
      { name: "Meso & Cryo & RF", href: "/services/mesotherapy-radiofrequency-cryo" },
      { name: "LED Light Therapy", href: "/services/led-light-therapy" }
    ]
  },
  { name: "Products", href: "/products" },
  { name: "Before/After", href: "/before-after" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
  { name: "Book Online", href: "/book-online" },
  { name: "Client Form", href: "/questionnnaire" },
  { name: "Orthomolecular Facial Analysis Form", href: "/copy-of-questionnaire" }
]
```

## Page Content Specifications

### 1. Homepage Content

**Hero Section:**
- Heading: "Holistic Skin Services"
- Image Carousel: 6 rotating images (1168x370px)
- Breadcrumb: "Home: Services"

**Service Listings Section:**
Display 10 main services in a grid layout:

1. **Orthomolecular Facial Analysis**
   - Description: "This unique method is for anyone looking for a holistic approach to treat the signs of aging, acne and more. An orthomolecular facial analysis can detect what mineral deficiencies are present in the body and identify the cellular nutrients that can improve your skin and have a positive effect on your whole body!"
   - Image: Natural beauty themed (446x314px)
   - Link: "/services/orthomolecular-facial-analysis"

2. **Microneedling**
   - Description: "Microneedling or Collagen Induction Therapy is one of the most effective natural ways to delay the signs of aging and prevent new wrinkles from occurring. It stimulates the skin to regenerate and repair itself, creating smoother, brighter, firmer, youthful skin. Microneedling gives amazing results on acne scarring."
   - Image: Microneedling treatment (446x314px)
   - Link: "/services/microneedling"

3. **Korean Facelift Facial**
   - Description: "This anti-aging method has an instant smoothing effect without any injectables. This needle-free and painless topical treatment increases your skin's collagen production, helping you achieve firmer skin. Results are visible after the first application, and the anti-aging benefits continue for weeks."
   - Image: Korean facial treatment (446x314px)
   - Link: "/services/korean-instant-facelift"

4. **OxyGen Facials**
   - Description: "Three technologies in one machine to oxygenate, exfoliate, nourish and sculpt. Radiofrequency is followed by an oxygenating exfoliation to refine skin with a cleansing pod based on skin type, then an ultrasound probe massages in a targeted serum. Concentrated oxygen dome treatment and oxygen spray- to finish."
   - Image: Oxygen treatment (446x314px)
   - Link: "/services/oxygen-facials"

5. **Italian BioRePeel**
   - Description: "This innovative treatment is a 35% TCA chemical peel that uses 2-phase technology providing a no-downtime peel suitable for all skin types and skin conditions. While exfoliating the skin surface, it also stimulates the production of collagen and elastin. BioRePeel restores the optimal physiological conditions of the skin."
   - Image: BioRePeel treatment (446x314px)
   - Link: "/services/biorepeel"

6. **Microcurrent Face Sculpting**
   - Description: "Microcurrent Facial Sculpting technique is a painless alternative to surgical cosmetic treatments. The benefits of the procedure include eliminating fine lines, creases, and wrinkles, restoring the firmness and glow of youthful skin, increasing hydration, contouring the face and lifting sagging areas."
   - Image: Microcurrent treatment (446x314px)
   - Link: "/services/microcurrent-face-sculpting"

7. **Cold Plasma**
   - Description: "Cold plasma is a painless, no-downtime treatment that increases the production of collagen, improves skin elasticity, brightens skin, reduces inflammation and acne breakouts. It boosts the effectiveness of topical ingredients and other treatments and is safe for all skin types and conditions."
   - Image: Cold plasma device (446x314px)
   - Link: "/services/cold-plasma"

8. **Customized Facials**
   - Description: "All facials are based on your skin type and skincare needs. Most facials include exfoliation, extractions, high frequency, a relaxing face, neck and decollete massage, then a mask to finish. There are numerous machine and product upgrade options to create idea the perfect treatment plan with your goals in mind."
   - Image: Facial treatment (446x314px)
   - Link: "/menu"

9. **Biomicroneedling - Sponge Peel**
   - Description: "This natural and chemical-free peel is ideal for people who want to brighten skin and reduce breakouts without harsh chemicals. The peel utilizes a unique blend of pearl powder, hydrolyzed sponge and volcanic ash. The sponge spicules will be implanted in the skin for 72 hour to detox and rejuvenate the skin."
   - Image: Natural peel treatment (446x314px)
   - Link: "/services/green-sponge-peel"

10. **Meso & Cryo & RF**
    - Description: "Mesotherapy is a needle-free rejuvenating treatment delivers vitamins, minerals and amino acids into the skin for an anti-aging impact. Radiofrequency and cryo technologies instantly firm the skin, tone the face, neck and décolleté area, and boost collagen production."
    - Image: Multi-technology treatment (446x314px)
    - Link: "/services/mesotherapy-radiofrequency-cryo"

### 2. About Page Content

**Owner Profile Section:**
- **Section Title:** "About" (H6)
- **Image:** Suzy Mate portrait (301x374px)
- **Name and Title:** "Suzy Mate - Owner and Esthetician" (H3)
- **Bio Paragraph:** "Healthy, vibrant skin gives you confidence. It is my mission to research and find the best natural and safe products and techniques that are beneficial for the skin. As someone who personally struggled with acne for many years, I successfully reversed my acne scars with microneedling when it was barely known in the United States. I followed my passion and opened my own skincare business in Miami Beach in 2016, and I have been helping others to achieve their skin goals ever since. I have a holistic approach to beauty and focus on organic skin care, and recognize the importance of nutrition and life style. Having entered my 50's, I still choose to avoid injections and my goal is to keep using natural treatments/devices to help me and my clients age gracefully. I provide my clients with desirable results by combining the best non-toxic skincare products with innovative technology."

**Certifications Section:**
- **Heading:** "I have extensive training and certifications in the following areas:"
- **List:**
  - Orthomolecular Facial Analysis
  - Microneedling for Age Management & Acne Scarring
  - Plasma Skin Rejuvenation & Repair
  - Microcurrent Facial Toning & Galvanic
  - Advanced Face Massage, Manual Lymphatic Drainage Facial & Ancient Gua Sha
  - Radiofrequency, Cryotherapy & Mesotherapy

**Additional Images:**
- Natural Awake Article 1 (245x818px)
- Natural Awake Article 2 (395x732px)
- Natural Awake Article 3 (735x915px)

### 3. Services Overview Page Content

Display all 10 services with:
- Service title
- Description
- Image (445x314px)
- "More Info" link to individual service page

### 4. Menu/Pricing Page Content

**Introduction:**
"All products used are curated from top-tier laboratories, adhering to high standards of quality and safety, featuring naturally sourced, toxin-free, cruelty-free ingredients, and eco-conscious manufacturing practices."

**Service Categories with Pricing:**

#### Classic Facials
- **Classic Glow Facial**: $140 (1 hour)
  - European facial with neck and décolleté treatment
  - For normal, dry or sensitive skin types
  - [Full service description]

- **Pore Cleansing Extraction Facial**: $160+ (1 hour 10 minutes+)
  - Highly customized extractions/acne facials
  - [Full service description]

#### Specialized Treatments
- **Orthomolecular Facial Analysis**: $200 (45 minutes)
- **Repairing Facial with Cold Plasma**: $200-$240 (1 hour 10-20 minutes)
- **'Red Carpet' Korean Instant Facelift Facial**: $260 (1 hour 30 minutes)
- **Microneedling**: $240-$300 (1 hour)
- **Nourishing Oxygen Infusion Facial**: $170 (1 hour 10 minutes)
- **Renewing No-Downtime BioRePeel**: $200 (45 minutes)

#### Microcurrent Treatments
- **Microcurrent Lift Treatment**: $140 (1 hour)
- **Microcurrent Gold Deluxe Lift Treatment**: $200 (1 hour 30 minutes)

#### Combination Treatments
- **Age-Defying Microcurrent & Radiofrequency & Mesotherapy & Cryo**: $300 (1 hour 40 minutes)
- **Age-Management Radiofrequency & Mesotherapy & Cryo**: $240 (1 hour 10 minutes)

#### Add-On Services
- **Regenerating Cold/Ozone Plasma**: $60 (10 min) / $100 (20 min)
- **Facial Contouring Massage**: $100 (40 min) / $50 (20 min add-on)

#### Teen Services
- **Teen Facial**: $100 (40 minutes)

#### Body Treatments
- **Back Treatment**: $120 (50 minutes)
- **Back Treatment with purifying peel**: $160 (1 hour)

### 5. Products Page Content

**Introduction:**
"Products are curated from top-tier laboratories, adhering to high standards of quality and safety, featuring naturally sourced, toxin-free, cruelty-free ingredients, and eco-conscious manufacturing practices."

**Product Brands:**

#### Skinergix
- **Description:** Supplements focus on supporting anti-aging from the inside. Skincare made in Canada.
- **Product Lines:**
  - The Power of Nature line: Holistic collection with exotic scents
  - The Skin Science line: Medical grade peptide technology
  - The Clear Complexion line: Acne-prone skin solutions
- **Certifications:** FDA registered, GMP certified
- **Shopping Link:** https://www.skinergix.miaminaturalskincare.com

#### Nelly De Vuyst®
- **Description:** Professional Skin Care Products certified Organic by COSMOS® and Ecocert®
- **Product Lines:**
  - Bio|Organic line: 100% organic anti-aging products
  - Bio|Medical collection: Gentle medical-grade acne solutions
- **Certifications:** COSMOS® and Ecocert® certified
- **Shopping Link:** https://nellydevuyst.com/?ref=C12027

#### Laboratoiry Druide®
- **Description:** Natural body care products certified organic by Ecocert Greenlife
- **Product Lines:**
  - BioLove: Certified organic body products
- **Certifications:** Ecocert Greenlife certified
- **Shopping Link:** http://druidebio.com/?ref=C12027

### 6. Testimonials Page Content

**Featured Testimonials:**

1. **Ginna G. (Yelp)**
   - Full testimonial about holistic approach and microneedling results
   - Before/after images (435x300px and 426x300px)

2. **Patricia B. (Google)**
   - Review about professional environment and microneedling results

3. **Aleksandra C. (Yelp)**
   - Testimonial about customized approach and organic products

4. **Mapal L. (Google)**
   - Review about affordability and expertise
   - Mentions $80 facial with $20 first-time discount

### 7. Before/After Page Content

**Gallery Layout:**
- Grid of before/after comparison images
- Images optimized at 465x463px, 463x463px, 466x463px
- Simple stacked display format

### 8. Contact Page Content

**Contact Information:**
- **Address:** 975 Arthur Godfrey Rd, #206, Miami Beach, Florida
- **Phone:** 305-702-0272
- **Email:** suzy@miaminaturalskincare.com
- **Business Hours:** Monday - Sunday, 9am - 7pm (by appointment only)
- **Location Description:** "Holistic Skincare Studio located in Miami Beach @ 41 St & Alton Rd."

**Contact Form Fields:**
- Name
- Email
- Phone
- Subject
- Message

**Additional Links:**
- Online booking: /book-online
- Client form: /questionnnaire
- Orthomolecular form: /copy-of-questionnaire

## Design System Specification

### Color Palette
```css
:root {
  /* Primary Colors - Natural/Spa Theme */
  --primary-50: #f0fdf4;
  --primary-100: #dcfce7;
  --primary-500: #22c55e;
  --primary-600: #16a34a;
  --primary-700: #15803d;
  
  /* Neutral Colors */
  --neutral-50: #fafafa;
  --neutral-100: #f5f5f5;
  --neutral-200: #e5e5e5;
  --neutral-300: #d4d4d4;
  --neutral-400: #a3a3a3;
  --neutral-500: #737373;
  --neutral-600: #525252;
  --neutral-700: #404040;
  --neutral-800: #262626;
  --neutral-900: #171717;
  
  /* Accent Colors */
  --accent-spa: #a7f3d0;
  --accent-gold: #fbbf24;
  --accent-rose: #fb7185;
}
```

### Typography System
```css
/* Font Families */
--font-sans: ui-sans-serif, system-ui, -apple-system, sans-serif;
--font-serif: ui-serif, Georgia, serif;

/* Font Sizes */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */

/* Headings */
h1: text-4xl font-bold
h2: text-3xl font-semibold
h3: text-2xl font-semibold
h4: text-xl font-medium
h5: text-lg font-medium
h6: text-base font-medium
```

### Layout Specifications

**Header Layout:**
- Fixed/sticky header with transparent background
- Logo/site title on left
- Navigation menu center
- Contact info and CTA buttons on right
- Social media icons
- Mobile hamburger menu

**Grid System:**
- Container max-width: 1200px
- Service cards: 3 columns on desktop, 2 on tablet, 1 on mobile
- Card dimensions: 446x314px for service images
- 24px gap between cards

**Responsive Breakpoints:**
```css
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### Component Specifications

#### Service Card Component
```tsx
interface ServiceCardProps {
  title: string
  description: string
  image: string
  imageAlt: string
  link: string
  price?: string
}
```

#### Testimonial Card Component
```tsx
interface TestimonialProps {
  author: string
  platform: string
  content: string
  rating?: number
  beforeImage?: string
  afterImage?: string
}
```

#### Pricing Table Component
```tsx
interface PricingItemProps {
  title: string
  price: string
  duration: string
  description: string[]
  addOns?: string[]
  notes?: string
}
```

## Image Requirements

### Image Optimization Strategy
- Use Next.js Image component for all images
- WebP format with AVIF fallback
- Responsive sizing with multiple breakpoints
- Lazy loading for below-the-fold images
- Quality: 80-85 for photos, 90 for graphics

### Image Dimensions
- **Hero Images:** 1168x370px
- **Service Cards:** 446x314px
- **Owner Portrait:** 301x374px
- **Before/After:** 465x463px (square)
- **Testimonial Images:** 435x300px
- **Article Images:** 735x915px, 395x732px, 245x818px

### Required Images
1. Hero carousel (6 images)
2. Service images (10 images)
3. Owner portrait
4. Before/after gallery (3+ comparison sets)
5. Testimonial before/after images
6. Article/certification images
7. Social media icons (Facebook, Instagram)

## SEO and Metadata

### Meta Tags Structure
```tsx
export const metadata: Metadata = {
  title: "Miami Natural Skincare - Holistic Skin Services in Miami Beach",
  description: "Professional holistic skincare treatments in Miami Beach. Microneedling, facials, anti-aging treatments. Natural, toxin-free approach by certified esthetician Suzy Mate.",
  keywords: "skincare, Miami Beach, holistic, microneedling, facials, anti-aging, natural skincare, esthetician",
  openGraph: {
    title: "Miami Natural Skincare",
    description: "Holistic Skin Services in Miami Beach, Florida",
    url: "https://miaminaturalskincare.com",
    type: "website",
    locale: "en_US",
    siteName: "Miami Natural Skincare"
  },
  robots: {
    index: true,
    follow: true
  }
}
```

### Individual Page Metadata
Each service page should have:
- Unique title including service name
- Specific description for the service
- Relevant keywords
- Schema markup for LocalBusiness

## Technical Implementation Notes

### Contentlayer2 Configuration
```typescript
// contentlayer.config.ts
export const Service = defineDocumentType(() => ({
  name: 'Service',
  filePathPattern: 'services/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    price: { type: 'string', required: false },
    duration: { type: 'string', required: false },
    image: { type: 'string', required: true },
    benefits: { type: 'list', of: { type: 'string' } },
    process: { type: 'list', of: { type: 'string' } },
    contraindications: { type: 'list', of: { type: 'string' } }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/services/${doc._raw.flattenedPath.replace('services/', '')}`
    }
  }
}))
```

### Form Integration
- Contact form with validation
- Newsletter signup
- Appointment booking form
- Client intake forms
- Integration with booking system API

### Performance Considerations
- Image optimization with Next.js Image
- Code splitting by route
- Lazy loading for non-critical components
- Minimize JavaScript bundle size
- Use Tailwind CSS purging
- CDN for static assets

### Accessibility Requirements
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Alt text for all images
- Proper heading hierarchy
- Focus management
- Color contrast compliance

## Development Phases

### Phase 1: Foundation (Week 1)
- Set up Next.js project structure
- Configure Tailwind CSS and components
- Create basic layout components (Header, Footer, Navigation)
- Implement responsive design system

### Phase 2: Core Pages (Week 2)
- Homepage with hero and service listings
- About page with owner profile
- Services overview page
- Basic navigation and routing

### Phase 3: Service Pages (Week 3)
- Individual service pages with MDX content
- Pricing/menu page with detailed listings
- Contact page with forms
- Testimonials page

### Phase 4: Advanced Features (Week 4)
- Before/after gallery
- Products page with external links
- Form functionality and validation
- SEO optimization and metadata

### Phase 5: Polish and Testing (Week 5)
- Mobile optimization
- Performance optimization
- Cross-browser testing
- Accessibility testing
- Content review and copyediting

## Maintenance and Updates

### Content Management
- Use Contentlayer2 for easy content updates
- MDX files for service descriptions
- JSON files for pricing and contact info
- Image optimization workflow

### Regular Updates
- Service pricing updates
- New service additions
- Testimonial updates
- Before/after gallery additions
- Blog content (future enhancement)

## Integration Requirements

### Third-Party Services
- Booking system integration
- Payment processing for gift certificates
- Email marketing integration
- Google Analytics/Google Tag Manager
- Social media feeds
- Review platform integration

### Analytics and Tracking
- Conversion tracking for appointments
- Form submission tracking
- User behavior analysis
- Performance monitoring

This specification provides a comprehensive guide for recreating the Miami Natural Skincare website with modern web technologies while maintaining the original design intent and functionality.