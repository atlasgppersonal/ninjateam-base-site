import React from 'react';
import Image from 'next/image';

interface TestimonialCardProps {
  author: string;
  platform: string;
  content: string;
  rating?: number;
  beforeImage?: string;
  afterImage?: string;
  beforeImageAlt?: string;
  afterImageAlt?: string;
}

export default function TestimonialCard({
  author,
  platform,
  content,
  rating,
  beforeImage,
  afterImage,
  beforeImageAlt,
  afterImageAlt,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center mb-4">
        {/* You can add a placeholder for avatar or platform icon here */}
        <div>
          <p className="text-lg font-semibold text-gray-900">{author}</p>
          <p className="text-sm text-gray-500">from {platform}</p>
        </div>
      </div>
      {rating && (
        <div className="flex items-center mb-4">
          {Array.from({ length: rating }, (_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.929 8.725c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      )}
      <p className="text-gray-700 mb-4">{content}</p>
      {(beforeImage || afterImage) && (
        <div className="flex justify-center space-x-4 mt-4">
          {beforeImage && (
            <div className="text-center">
              <Image
                src={beforeImage}
                alt={beforeImageAlt || 'Before image'}
                width={200}
                height={200}
                objectFit="cover"
                className="rounded-lg"
              />
              <p className="text-sm text-gray-500 mt-1">Before</p>
            </div>
          )}
          {afterImage && (
            <div className="text-center">
              <Image
                src={afterImage}
                alt={afterImageAlt || 'After image'}
                width={200}
                height={200}
                objectFit="cover"
                className="rounded-lg"
              />
              <p className="text-sm text-gray-500 mt-1">After</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
