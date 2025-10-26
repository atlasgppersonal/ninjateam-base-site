import React from 'react';
import Container from '../ui/Container';

interface ProductBrandProps {
  name: string;
  description: string;
  productLines: string[];
  certifications?: string[];
  shoppingLink: string;
}

const ProductBrand: React.FC<ProductBrandProps> = ({ name, description, productLines, certifications, shoppingLink }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-6">
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="mb-4">
      <p className="font-semibold text-gray-800">Product Lines:</p>
      <ul className="list-disc list-inside text-gray-700">
        {productLines.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
    </div>
    {certifications && certifications.length > 0 && (
      <div className="mb-4">
        <p className="font-semibold text-gray-800">Certifications:</p>
        <ul className="list-disc list-inside text-gray-600">
          {certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </div>
    )}
    <a
      href={shoppingLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block w-full text-center bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors"
    >
      Shop Now
    </a>
  </div>
);

interface ProductBrandsProps {
  brands: ProductBrandProps[];
  introduction?: string;
}

export default function ProductBrands({ brands, introduction }: ProductBrandsProps) {
  return (
    <Container>
      {introduction && (
        <p className="text-lg text-center text-gray-700 mb-12">
          {introduction}
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {brands.map((brand, index) => (
          <ProductBrand key={index} {...brand} />
        ))}
      </div>
    </Container>
  );
}
