import Head from 'next/head';
import Container from '@/components/ui/Container';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { testimonialsData } from '@/data/testimonials';
import { siteConfig } from '@/data/site-config';

export default function TestimonialsPage() {
  return (
    <>
      <Head>
        <title>Testimonials | {siteConfig.name}</title>
        <meta name="description" content="Read what our happy clients have to say about Miami Natural Skincare." />
      </Head>
      <Container>
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          What Our Clients Say
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </Container>
    </>
  );
}
