// data/site-config.ts
export const siteConfig = {
  name: "Miami Natural Skincare",
  description: "Holistic Skin Services in Miami Beach, Florida",
  url: "https://miaminaturalskincare.com",
  
  contact: {
    address: "975 Arthur Godfrey Rd, #206, Miami Beach, Florida",
    phone: "305-702-0272",
    email: "suzy@miaminaturalskincare.com",
    businessHours: "Monday - Sunday, 9am - 7pm (by appointment only)",
    locationDescription: "Holistic Skincare Studio located in Miami Beach @ 41 St & Alton Rd."
  },
  
  social: {
    facebook: "http://www.facebook.com/miaminaturalskincare",
    instagram: "https://instagram.com/miaminaturalskincare/"
  },
  
  booking: {
    online: "/book-online",
    giftCertificate: "/_paylink/AYqqYwgG",
    clientForm: "/questionnnaire",
    orthomolecularForm: "/copy-of-questionnaire"
  },
  
  owner: {
    name: "Suzy Mate",
    title: "Owner and Esthetician",
    bio: "Healthy, vibrant skin gives you confidence. It is my mission to research and find the best natural and safe products and techniques that are beneficial for the skin. As someone who personally struggled with acne for many years, I successfully reversed my acne scars with microneedling when it was barely known in the United States. I followed my passion and opened my own skincare business in Miami Beach in 2016, and I have been helping others to achieve their skin goals ever since.",
    image: "/images/about/suzy-mate.jpg",
    certifications: [
      "Orthomolecular Facial Analysis",
      "Microneedling for Age Management & Acne Scarring",
      "Plasma Skin Rejuvenation & Repair",
      "Microcurrent Facial Toning & Galvanic",
      "Advanced Face Massage, Manual Lymphatic Drainage Facial & Ancient Gua Sha",
      "Radiofrequency, Cryotherapy & Mesotherapy"
    ]
  },
  
  seo: {
    keywords: "skincare, Miami Beach, holistic, microneedling, facials, anti-aging, natural skincare, esthetician, organic skincare, toxin-free",
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "Miami Natural Skincare"
    }
  }
}

export type SiteConfig = typeof siteConfig