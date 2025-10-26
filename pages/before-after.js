import Head from 'next/head';
import BeforeAfterGallery from '@/components/sections/BeforeAfterGallery';
import { siteConfig } from '@/data/site-config';

export default function BeforeAfterPage() {
  const beforeAfterImages = [
    {
      beforeSrc: "/images/before-after/before-1.jpg",
      afterSrc: "/images/before-after/after-1.jpg",
      alt: "Acne Scar Treatment",
      description: "Significant improvement in acne scarring after a series of treatments.",
    },
    {
      beforeSrc: "/images/before-after/before-2.jpg",
      afterSrc: "/images/before-after/after-2.jpg",
      alt: "Fine Lines Reduction",
      description: "Reduction of fine lines and wrinkles around the eyes.",
    },
    {
      beforeSrc: "/images/before-after/before-3.jpg",
      afterSrc: "/images/before-after/after-3.jpg",
      alt: "Skin Tone Improvement",
      description: "More even skin tone and reduced hyperpigmentation.",
    },
  ];

  return (
    <>
      <Head>
        <title>Before & After | {siteConfig.name}</title>
        <meta name="description" content="View our clients' amazing before and after results." />
      </Head>
      <BeforeAfterGallery
        title="Before & After Gallery"
        description="See the transformative results our clients have achieved with our holistic skincare treatments."
        images={beforeAfterImages}
      />
    </>
  );
}
