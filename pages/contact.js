import Head from 'next/head';
import Container from '@/components/ui/Container';
import ContactForm from '@/components/ui/ContactForm';
import Link from 'next/link';
import { siteConfig } from '@/data/site-config';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | {siteConfig.name}</title>
        <meta name="description" content="Get in touch with Miami Natural Skincare for appointments and inquiries." />
      </Head>
      <Container>
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Details</h2>
            <p className="text-gray-700 mb-2">
              <strong>Address:</strong> {siteConfig.contact.address}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Phone:</strong> {siteConfig.contact.phone}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong> {siteConfig.contact.email}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Business Hours:</strong> {siteConfig.businessHours}
            </p>
            <p className="text-gray-700 mb-4">
              Holistic Skincare Studio located in Miami Beach @ 41 St & Alton Rd.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Links</h3>
            <ul className="list-disc list-inside text-primary-600">
              <li className="mb-1">
                <Link href={siteConfig.booking.online} className="hover:underline">
                  Book Appointment Online
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/questionnnaire" className="hover:underline">
                  Client Form
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/copy-of-questionnaire" className="hover:underline">
                  Orthomolecular Facial Analysis Form
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </Container>
    </>
  );
}
