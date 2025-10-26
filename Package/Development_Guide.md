# Miami Natural Skincare - Development Guide

## Quick Start

### 1. Project Initialization
```bash
# Create Next.js project
npx create-next-app@latest miami-natural-skincare --typescript --tailwind --eslint --app
cd miami-natural-skincare

# Install additional dependencies
npm install contentlayer2 next-contentlayer2 @headlessui/react @heroicons/react
npm install @emotion/css @emotion/react @emotion/server @emotion/styled
npm install react-hook-form reading-time github-slugger next-themes
npm install @tailwindcss/typography @tailwindcss/forms @tailwindcss/aspect-ratio
```

### 2. Directory Structure Setup
```bash
# Create directory structure
mkdir -p app/{about,services,menu,products,testimonials,before-after,contact,book-online,questionnnaire,copy-of-questionnaire}
mkdir -p components/{layout,ui,sections}
mkdir -p data/content/{services,about,pages}
mkdir -p public/images/{services,testimonials,before-after,about,hero,products,icons}
```

### 3. Copy Configuration Files
- Copy `site-config.ts` to `data/`
- Copy `navigation.ts` to `data/`
- Copy `services.ts` to `data/`
- Copy `testimonials.ts` to `data/`
- Copy MDX content files to `data/content/`

### 4. Key Configuration Files

#### `contentlayer.config.ts`
```typescript
import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

export const Service = defineDocumentType(() => ({
  name: 'Service',
  filePathPattern: 'services/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    price: { type: 'string', required: false },
    duration: { type: 'string', required: false },
    image: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    featured: { type: 'boolean', default: false }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/services/${doc.slug}`
    }
  }
}))

export const About = defineDocumentType(() => ({
  name: 'About',
  filePathPattern: 'about/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    image: { type: 'string', required: false }
  }
}))

export default makeSource({
  contentDirPath: 'data/content',
  documentTypes: [Service, About],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: []
  }
})
```

#### `next.config.js`
```javascript
const { withContentlayer } = require('next-contentlayer2')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['static.wixstatic.com'], // For existing images during development
    formats: ['image/avif', 'image/webp']
  }
}

module.exports = withContentlayer(nextConfig)
```

#### `tailwind.config.js`
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        spa: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          500: '#14b8a6',
          600: '#0d9488',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
```

## Component Examples

### Header Component
```typescript
// components/layout/Header.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/data/site-config'
import { mainNavigation } from '@/data/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary-700">
            {siteConfig.name}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:block text-right">
            <p className="text-sm text-gray-600">{siteConfig.contact.address}</p>
            <p className="text-lg font-semibold text-primary-700">{siteConfig.contact.phone}</p>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-primary-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
```

### Service Card Component
```typescript
// components/ui/ServiceCard.tsx
import Image from 'next/image'
import Link from 'next/link'
import type { Service } from '@/data/services'

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
```

### Homepage Layout
```typescript
// app/page.tsx
import { servicesData } from '@/data/services'
import ServiceCard from '@/components/ui/ServiceCard'
import Hero from '@/components/sections/Hero'

export default function HomePage() {
  const featuredServices = servicesData.filter(service => service.featured)

  return (
    <main>
      <Hero />
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
```

## Image Optimization Guide

### 1. Image Preparation
- **Service Images**: 446x314px, WebP format
- **Hero Images**: 1168x370px, WebP format
- **Owner Portrait**: 301x374px, WebP format
- **Testimonial Images**: 435x300px, WebP format

### 2. Next.js Image Component Usage
```typescript
import Image from 'next/image'

// Service card image
<Image
  src="/images/services/microneedling.jpg"
  alt="Microneedling treatment"
  width={446}
  height={314}
  className="object-cover"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>

// Hero image with priority loading
<Image
  src="/images/hero/hero-1.jpg"
  alt="Miami Natural Skincare spa"
  width={1168}
  height={370}
  priority
  className="object-cover"
/>
```

## SEO Configuration

### Metadata Setup
```typescript
// app/layout.tsx
import type { Metadata } from 'next'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: 'Suzy Mate' }],
  creator: 'Suzy Mate',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
```

## Deployment Checklist

1. **Environment Variables**
   - Set up production environment variables
   - Configure email service for forms
   - Set up analytics tracking

2. **Performance Optimization**
   - Optimize images with Next.js Image
   - Enable compression
   - Configure CDN for static assets

3. **SEO Setup**
   - Generate sitemap
   - Configure robots.txt
   - Set up Google Analytics
   - Submit to Google Search Console

4. **Testing**
   - Test all forms
   - Verify responsive design
   - Check accessibility
   - Test performance on mobile

5. **Launch**
   - Configure domain
   - Set up SSL certificate
   - Monitor for errors
   - Set up monitoring and alerts