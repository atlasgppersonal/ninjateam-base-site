import Head from 'next/head';
import PricingTable from '@/components/ui/PricingTable';
import { siteConfig } from '@/data/site-config';

export default function MenuPage() {
  const pricingCategories = [
    {
      name: "Classic Facials",
      items: [
        {
          title: "Classic Glow Facial",
          price: "$140",
          duration: "1 hour",
          description: [
            "European facial with neck and décolleté treatment",
            "For normal, dry or sensitive skin types",
          ],
        },
        {
          title: "Pore Cleansing Extraction Facial",
          price: "$160+",
          duration: "1 hour 10 minutes+",
          description: [
            "Highly customized extractions/acne facials",
          ],
        },
      ],
    },
    {
      name: "Specialized Treatments",
      items: [
        {
          title: "Orthomolecular Facial Analysis",
          price: "$200",
          duration: "45 minutes",
          description: [],
        },
        {
          title: "Repairing Facial with Cold Plasma",
          price: "$200-$240",
          duration: "1 hour 10-20 minutes",
          description: [],
        },
        {
          title: "'Red Carpet' Korean Instant Facelift Facial",
          price: "$260",
          duration: "1 hour 30 minutes",
          description: [],
        },
        {
          title: "Microneedling",
          price: "$240-$300",
          duration: "1 hour",
          description: [],
        },
        {
          title: "Nourishing Oxygen Infusion Facial",
          price: "$170",
          duration: "1 hour 10 minutes",
          description: [],
        },
        {
          title: "Renewing No-Downtime BioRePeel",
          price: "$200",
          duration: "45 minutes",
          description: [],
        },
      ],
    },
    {
      name: "Microcurrent Treatments",
      items: [
        {
          title: "Microcurrent Lift Treatment",
          price: "$140",
          duration: "1 hour",
          description: [],
        },
        {
          title: "Microcurrent Gold Deluxe Lift Treatment",
          price: "$200",
          duration: "1 hour 30 minutes",
          description: [],
        },
      ],
    },
    {
      name: "Combination Treatments",
      items: [
        {
          title: "Age-Defying Microcurrent & Radiofrequency & Mesotherapy & Cryo",
          price: "$300",
          duration: "1 hour 40 minutes",
          description: [],
        },
        {
          title: "Age-Management Radiofrequency & Mesotherapy & Cryo",
          price: "$240",
          duration: "1 hour 10 minutes",
          description: [],
        },
      ],
    },
    {
      name: "Add-On Services",
      items: [
        {
          title: "Regenerating Cold/Ozone Plasma",
          price: "$60",
          duration: "10 min",
          description: [],
          addOns: ["$100 (20 min)"],
        },
        {
          title: "Facial Contouring Massage",
          price: "$100",
          duration: "40 min",
          description: [],
          addOns: ["$50 (20 min add-on)"],
        },
      ],
    },
    {
      name: "Teen Services",
      items: [
        {
          title: "Teen Facial",
          price: "$100",
          duration: "40 minutes",
          description: [],
        },
      ],
    },
    {
      name: "Body Treatments",
      items: [
        {
          title: "Back Treatment",
          price: "$120",
          duration: "50 minutes",
          description: [],
        },
        {
          title: "Back Treatment with purifying peel",
          price: "$160",
          duration: "1 hour",
          description: [],
        },
      ],
    },
  ];

  const introductionText = "All products used are curated from top-tier laboratories, adhering to high standards of quality and safety, featuring naturally sourced, toxin-free, cruelty-free ingredients, and eco-conscious manufacturing practices.";

  return (
    <>
      <Head>
        <title>Menu & Pricing | {siteConfig.name}</title>
        <meta name="description" content="Explore our detailed menu of services and pricing." />
      </Head>
      <PricingTable categories={pricingCategories} introduction={introductionText} />
    </>
  );
}
