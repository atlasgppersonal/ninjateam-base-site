import Head from 'next/head';
import ServiceListings from '@/components/sections/ServiceListings';
import { siteConfig } from '@/data/site-config';

export default function ServicesOverviewPage() {
  return (
    <>
      <Head>
        <title>{`Our Services | ${siteConfig.name}`}</title>
        <meta name="description" content="Explore our comprehensive range of holistic skin treatments." />
      </Head>
      <ServiceListings
        title="Our Services"
        description="Explore our comprehensive range of holistic skin treatments designed to rejuvenate and revitalize your skin."
        featuredOnly={false} // Display all services
      />
    </>
  );
}
