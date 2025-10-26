import Head from 'next/head';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import { siteConfig } from '@/data/site-config';

export default function QuestionnairePage() {
  return (
    <>
      <Head>
        <title>Client Form | {siteConfig.name}</title>
        <meta name="description" content="Fill out our client intake form for Miami Natural Skincare." />
      </Head>
      <Container>
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Client Intake Form
        </h1>
        <div className="text-center text-lg text-gray-700">
          <p className="mb-4">
            Please fill out our client intake form before your appointment.
          </p>
          {/* Placeholder for an embedded form or link to an external form */}
          <div className="bg-gray-100 p-8 rounded-lg">
            <p className="text-gray-600">
              [Embed client form here or provide a link]
            </p>
            <p className="mt-4">
              For example, you can link to a Google Form, Typeform, or embed an iframe.
            </p>
          </div>
          <p className="mt-8">
            If you have any questions, please feel free to <Link href="/contact" className="text-primary-600 hover:underline">contact us</Link>.
          </p>
        </div>
      </Container>
    </>
  );
}
