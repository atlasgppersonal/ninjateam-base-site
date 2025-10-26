import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageCarouselProps {
  images: { src: string; alt: string }[];
  interval?: number; // Interval in milliseconds for auto-play
}

export default function ImageCarousel({ images, interval = 5000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  if (!images || images.length === 0) {
    return null;
  }

  const currentImage = images[currentIndex];

  return (
    <div className="relative w-full h-96 overflow-hidden">
      <Image
        src={currentImage.src}
        alt={currentImage.alt}
        fill
        className="object-cover transition-opacity duration-1000 ease-in-out"
      />
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
