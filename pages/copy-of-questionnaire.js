import Head from 'next/head';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import { siteConfig } from '@/data/site-config';

export default function CopyOfQuestionnairePage() {
  return (
    <>
      <Head>
        <title>Orthomolecular Facial Analysis Form | {siteConfig.name}</title>
        <meta name="description" content="Fill out the Orthomolecular Facial Analysis form for Miami Natural Skincare." />
      </Head>
      <Container>
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Orthomolecular Facial Analysis Form
        </h1>
        <div className="text-center text-lg text-gray-700">
          <p className="mb-4">
            Please fill out this specialized form for your Orthomolecular Facial Analysis.
          </p>
          {/* Placeholder for an embedded form or link to an external form */}
          <div className="bg-gray-100 p-8 rounded-lg">
            <p className="text-gray-600">
              [Embed Orthomolecular Facial Analysis form here or provide a link]
            </p>
            <p className="mt-4">
              This form is crucial for a personalized analysis.
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
