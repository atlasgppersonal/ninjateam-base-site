import React from 'react';
import Container from './Container';

interface PricingItemProps {
  title: string;
  price: string;
  duration: string;
  description: string[];
  addOns?: string[];
  notes?: string;
}

const PricingItem: React.FC<PricingItemProps> = ({ title, price, duration, description, addOns, notes }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-6">
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-2xl font-bold text-primary-600 mb-2">{price}</p>
    <p className="text-sm text-gray-500 mb-4">{duration}</p>
    <ul className="list-disc list-inside text-gray-700 mb-4">
      {description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    {addOns && addOns.length > 0 && (
      <div className="mb-4">
        <p className="font-semibold text-gray-800">Add-ons:</p>
        <ul className="list-disc list-inside text-gray-600">
          {addOns.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    )}
    {notes && (
      <p className="text-sm text-gray-500 italic">{notes}</p>
    )}
  </div>
);

interface PricingTableProps {
  categories: {
    name: string;
    items: PricingItemProps[];
  }[];
  introduction?: string;
}

export default function PricingTable({ categories, introduction }: PricingTableProps) {
  return (
    <Container>
      {introduction && (
        <p className="text-lg text-center text-gray-700 mb-12">
          {introduction}
        </p>
      )}
      {categories.map((category, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            {category.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.items.map((item, itemIndex) => (
              <PricingItem key={itemIndex} {...item} />
            ))}
          </div>
        </div>
      ))}
    </Container>
  );
}
