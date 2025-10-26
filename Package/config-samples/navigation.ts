// data/navigation.ts
export const mainNavigation = [
  { 
    name: "Home", 
    href: "/" 
  },
  { 
    name: "About", 
    href: "/about" 
  },
  { 
    name: "Menu", 
    href: "/menu" 
  },
  {
    name: "Services",
    href: "/services",
    children: [
      { 
        name: "Orthomolecular Facial Analysis", 
        href: "/services/orthomolecular-facial-analysis",
        description: "Holistic approach to detect mineral deficiencies"
      },
      { 
        name: "Microcurrent Face Sculpting", 
        href: "/services/microcurrent-face-sculpting",
        description: "Non-invasive facial muscle toning"
      },
      { 
        name: "Microneedling", 
        href: "/services/microneedling",
        description: "Collagen induction therapy for anti-aging"
      },
      { 
        name: "Korean Instant Facelift", 
        href: "/services/korean-instant-facelift",
        description: "Instant smoothing without injectables"
      },
      { 
        name: "Cold Plasma", 
        href: "/services/cold-plasma",
        description: "Painless collagen stimulation treatment"
      },
      { 
        name: "OxyGen Facials", 
        href: "/services/oxygen-facials",
        description: "Oxygenating exfoliation and nourishment"
      },
      { 
        name: "Biomicroneedling", 
        href: "/services/green-sponge-peel",
        description: "Natural chemical-free peel"
      },
      { 
        name: "BioRePeel", 
        href: "/services/biorepeel",
        description: "No-downtime TCA chemical peel"
      },
      { 
        name: "Meso & Cryo & RF", 
        href: "/services/mesotherapy-radiofrequency-cryo",
        description: "Combination anti-aging treatment"
      },
      { 
        name: "LED Light Therapy", 
        href: "/services/led-light-therapy",
        description: "Healing and rejuvenating light treatment"
      }
    ]
  },
  { 
    name: "Products", 
    href: "/products" 
  },
  { 
    name: "Before/After", 
    href: "/before-after" 
  },
  { 
    name: "Testimonials", 
    href: "/testimonials" 
  },
  { 
    name: "Contact", 
    href: "/contact" 
  },
  { 
    name: "Book Online", 
    href: "/book-online",
    highlight: true
  },
  { 
    name: "Client Form", 
    href: "/questionnnaire" 
  },
  { 
    name: "Orthomolecular Facial Analysis Form", 
    href: "/copy-of-questionnaire" 
  }
]

export type NavigationItem = {
  name: string
  href: string
  description?: string
  children?: NavigationItem[]
  highlight?: boolean
}

export type MainNavigation = typeof mainNavigation