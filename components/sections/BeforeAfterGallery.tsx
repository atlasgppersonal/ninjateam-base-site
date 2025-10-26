import React from 'react';
import Image from 'next/image';
import Container from '../ui/Container';

interface BeforeAfterImage {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
  description?: string;
}

interface BeforeAfterGalleryProps {
  images: BeforeAfterImage[];
  title?: string;
  description?: string;
}

export default function BeforeAfterGallery({ images, title, description }: BeforeAfterGalleryProps) {
  return (
    <Container>
      {title && (
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          {title}
        </h1>
      )}
      {description && (
        <p className="text-lg text-center text-gray-700 mb-12">
          {description}
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden p-4">
            <div className="flex flex-col items-center space-y-4">
              <div className="text-center">
                <Image
                  src={item.beforeSrc}
                  alt={`Before - ${item.alt}`}
                  width={465}
                  height={463}
                  objectFit="cover"
                  className="rounded-lg"
                />
                <p className="text-sm text-gray-500 mt-1">Before</p>
              </div>
              <div className="text-center">
                <Image
                  src={item.afterSrc}
                  alt={`After - ${item.alt}`}
                  width={465}
                  height={463}
                  objectFit="cover"
                  className="rounded-lg"
                />
                <p className="text-sm text-gray-500 mt-1">After</p>
              </div>
            </div>
            {item.description && (
              <p className="text-gray-700 mt-4 text-center">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
}
