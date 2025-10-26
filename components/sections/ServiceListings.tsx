import React from 'react';
import ServiceCard from '../ui/ServiceCard';
import Container from '../ui/Container';
import { servicesData } from '@/data/services';

interface ServiceListingsProps {
  title?: string;
  description?: string;
  featuredOnly?: boolean;
}

export default function ServiceListings({ title, description, featuredOnly = false }: ServiceListingsProps) {
  const servicesToDisplay = featuredOnly ? servicesData.filter(service => service.featured) : servicesData;

  return (
    <Container className="py-16 bg-gray-50">
      {title && (
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-lg text-center text-gray-600 mb-12">
          {description}
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesToDisplay.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </Container>
  );
}
