import Head from 'next/head';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import { siteConfig } from '@/data/site-config';

export default function BookOnlinePage() {
  return (
    <>
      <Head>
        <title>Book Online | {siteConfig.name}</title>
        <meta name="description" content="Book your appointment online with Miami Natural Skincare." />
      </Head>
      <Container>
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Book Your Appointment
        </h1>
        <div className="text-center text-lg text-gray-700">
          <p className="mb-4">
            You can book your appointment directly through our online booking system.
          </p>
          <Link
            href={siteConfig.booking.online}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-600 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Proceed to Online Booking
          </Link>
          <p className="mt-8">
            If you have any questions, please feel free to <Link href="/contact" className="text-primary-600 hover:underline">contact us</Link>.
          </p>
        </div>
      </Container>
    </>
  );
}
