export const servicesData = [
  {
    id: "orthomolecular-facial-analysis",
    title: "Orthomolecular Facial Analysis",
    description: "This unique method is for anyone looking for a holistic approach to treat the signs of aging, acne and more. An orthomolecular facial analysis can detect what mineral deficiencies are present in the body and identify the cellular nutrients that can improve your skin and have a positive effect on your whole body!",
    image: "/images/services/orthomolecular-analysis.jpg",
    price: "$200",
    duration: "45 minutes",
    link: "/services/orthomolecular-facial-analysis",
    featured: true,
    category: "holistic"
  },
  {
    id: "microneedling",
    title: "Microneedling",
    description: "Microneedling or Collagen Induction Therapy is one of the most effective natural ways to delay the signs of aging and prevent new wrinkles from occurring. It stimulates the skin to regenerate and repair itself, creating smoother, brighter, firmer, youthful skin. Microneedling gives amazing results on acne scarring.",
    image: "/images/services/microneedling.jpg",
    price: "$240-$300",
    duration: "1 hour",
    link: "/services/microneedling",
    featured: true,
    category: "anti-aging"
  },
  {
    id: "korean-instant-facelift",
    title: "Korean Facelift Facial",
    description: "This anti-aging method has an instant smoothing effect without any injectables. This needle-free and painless topical treatment increases your skin's collagen production, helping you achieve firmer skin. Results are visible after the first application, and the anti-aging benefits continue for weeks.",
    image: "/images/services/korean-facelift.jpg",
    price: "$260",
    duration: "1 hour 30 minutes",
    link: "/services/korean-instant-facelift",
    featured: true,
    category: "anti-aging"
  },
  {
    id: "oxygen-facials",
    title: "OxyGen Facials",
    description: "Three technologies in one machine to oxygenate, exfoliate, nourish and sculpt. Radiofrequency is followed by an oxygenating exfoliation to refine skin with a cleansing pod based on skin type, then an ultrasound probe massages in a targeted serum. Concentrated oxygen dome treatment and oxygen spray- to finish.",
    image: "/images/services/oxygen-facials.jpg",
    price: "$170-$220",
    duration: "1 hour 10 minutes - 1 hour 30 minutes",
    link: "/services/oxygen-facials",
    featured: true,
    category: "facial"
  },
  {
    id: "biorepeel",
    title: "Italian BioRePeel",
    description: "This innovative treatment is a 35% TCA chemical peel that uses 2-phase technology providing a no-downtime peel suitable for all skin types and skin conditions. While exfoliating the skin surface, it also stimulates the production of collagen and elastin. BioRePeel restores the optimal physiological conditions of the skin.",
    image: "/images/services/biorepeel.jpg",
    price: "$200",
    duration: "45 minutes",
    link: "/services/biorepeel",
    featured: true,
    category: "peels"
  },
  {
    id: "microcurrent-face-sculpting",
    title: "Microcurrent Face Sculpting",
    description: "Microcurrent Facial Sculpting technique is a painless alternative to surgical cosmetic treatments. The benefits of the procedure include eliminating fine lines, creases, and wrinkles, restoring the firmness and glow of youthful skin, increasing hydration, contouring the face and lifting sagging areas.",
    image: "/images/services/microcurrent.jpg",
    price: "$140-$300",
    duration: "1 hour - 2 hours",
    link: "/services/microcurrent-face-sculpting",
    featured: true,
    category: "anti-aging"
  },
  {
    id: "cold-plasma",
    title: "Cold Plasma",
    description: "Cold plasma is a painless, no-downtime treatment that increases the production of collagen, improves skin elasticity, brightens skin, reduces inflammation and acne breakouts. It boosts the effectiveness of topical ingredients and other treatments and is safe for all skin types and conditions.",
    image: "/images/services/cold-plasma.jpg",
    price: "$60-$100",
    duration: "10-20 minutes",
    link: "/services/cold-plasma",
    featured: true,
    category: "technology"
  },
  {
    id: "customized-facials",
    title: "Customized Facials",
    description: "All facials are based on your skin type and skincare needs. Most facials include exfoliation, extractions, high frequency, a relaxing face, neck and decollete massage, then a mask to finish. There are numerous machine and product upgrade options to create idea the perfect treatment plan with your goals in mind.",
    image: "/images/services/customized-facials.jpg",
    price: "$140-$160",
    duration: "1 hour - 1 hour 10 minutes",
    link: "/menu",
    featured: true,
    category: "facial"
  },
  {
    id: "green-sponge-peel",
    title: "Biomicroneedling - Sponge Peel",
    description: "This natural and chemical-free peel is ideal for people who want to brighten skin and reduce breakouts without harsh chemicals. The peel utilizes a unique blend of pearl powder, hydrolyzed sponge and volcanic ash. The sponge spicules will be implanted in the skin for 72 hour to detox and rejuvenate the skin.",
    image: "/images/services/sponge-peel.jpg",
    price: "$200",
    duration: "45 minutes",
    link: "/services/green-sponge-peel",
    featured: true,
    category: "peels"
  },
  {
    id: "mesotherapy-radiofrequency-cryo",
    title: "Meso & Cryo & RF",
    description: "Mesotherapy is a needle-free rejuvenating treatment delivers vitamins, minerals and amino acids into the skin for an anti-aging impact. Radiofrequency and cryo technologies instantly firm the skin, tone the face, neck and décolleté area, and boost collagen production.",
    image: "/images/services/meso-cryo-rf.jpg",
    price: "$240-$300",
    duration: "1 hour 10 minutes - 1 hour 40 minutes",
    link: "/services/mesotherapy-radiofrequency-cryo",
    featured: true,
    category: "technology"
  }
]

export const serviceCategories = [
  { id: "all", name: "All Services" },
  { id: "facial", name: "Facials" },
  { id: "anti-aging", name: "Anti-Aging" },
  { id: "technology", name: "Advanced Technology" },
  { id: "peels", name: "Peels" },
  { id: "holistic", name: "Holistic" }
]

export type Service = {
  id: string
  title: string
  description: string
  image: string
  price: string
  duration: string
  link: string
  featured: boolean
  category: string
}

export type ServiceCategory = {
  id: string
  name: string
}
