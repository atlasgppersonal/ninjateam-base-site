import Head from 'next/head';
import ProductBrands from '@/components/sections/ProductBrands';
import { siteConfig } from '@/data/site-config';

export default function ProductsPage() {
  const productBrandsData = [
    {
      name: "Skinergix",
      description: "Supplements focus on supporting anti-aging from the inside. Skincare made in Canada.",
      productLines: [
        "The Power of Nature line: Holistic collection with exotic scents",
        "The Skin Science line: Medical grade peptide technology",
        "The Clear Complexion line: Acne-prone skin solutions",
      ],
      certifications: ["FDA registered", "GMP certified"],
      shoppingLink: "https://www.skinergix.miaminaturalskincare.com",
    },
    {
      name: "Nelly De Vuyst®",
      description: "Professional Skin Care Products certified Organic by COSMOS® and Ecocert®",
      productLines: [
        "Bio|Organic line: 100% organic anti-aging products",
        "Bio|Medical collection: Gentle medical-grade acne solutions",
      ],
      certifications: ["COSMOS® and Ecocert® certified"],
      shoppingLink: "https://nellydevuyst.com/?ref=C12027",
    },
    {
      name: "Laboratoiry Druide®",
      description: "Natural body care products certified organic by Ecocert Greenlife",
      productLines: [
        "BioLove: Certified organic body products",
      ],
      certifications: ["Ecocert Greenlife certified"],
      shoppingLink: "http://druidebio.com/?ref=C12027",
    },
  ];

  const introductionText = "Products are curated from top-tier laboratories, adhering to high standards of quality and safety, featuring naturally sourced, toxin-free, cruelty-free ingredients, and eco-conscious manufacturing practices.";

  return (
    <>
      <Head>
        <title>Products | {siteConfig.name}</title>
        <meta name="description" content="Discover our curated selection of natural and organic skincare products." />
      </Head>
      <ProductBrands brands={productBrandsData} introduction={introductionText} />
    </>
  );
}
