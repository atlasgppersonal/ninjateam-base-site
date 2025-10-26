import Image from 'next/image'
import Link from 'next/link'
import type { Service } from '@/data/services' // Import the Service type

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {service.description}
        </p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-bold text-primary-600">
            {service.price}
          </span>
          <span className="text-sm text-gray-500">
            {service.duration}
          </span>
        </div>
        <Link
          href={service.link}
          className="inline-block w-full text-center bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}
