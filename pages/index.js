import Head from "next/head";
import ImageCarousel from "../components/ui/ImageCarousel";
import ServiceListings from "../components/sections/ServiceListings";
import { siteConfig } from "../data/site-config";

export default function Home() {
  const heroImages = [
    { src: "/images/hero/hero-1.jpg", alt: "Holistic Skin Services 1" },
    { src: "/images/hero/hero-2.jpg", alt: "Holistic Skin Services 2" },
    { src: "/images/hero/hero-3.jpg", alt: "Holistic Skin Services 3" },
    // Add more hero images as needed
  ];

  return (
    <>
      <Head>
        <title>{`${siteConfig.name} - ${siteConfig.description}`}</title>
        <meta
          name="description"
          content={siteConfig.description}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative">
        <ImageCarousel images={heroImages} />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center drop-shadow-lg">
            Holistic Skin Services
          </h1>
        </div>
      </section>

      {/* Service Listings Section */}
      <ServiceListings
        title="Our Services"
        description="Explore our range of holistic skin treatments designed to rejuvenate and revitalize your skin."
        featuredOnly={true}
      />
    </>
  );
}
