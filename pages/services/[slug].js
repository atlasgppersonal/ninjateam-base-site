import { allServices } from 'contentlayer/generated';
import { MDXLayoutRenderer } from 'pliny/mdx-components';
import { coreContent } from 'pliny/utils/contentlayer';
import Head from 'next/head';
import { siteConfig } from '@/data/site-config';
import { useRouter } from 'next/router';

export default function ServicePage() {
  const router = useRouter();
  const { slug } = router.query;

  const service = allServices.find((s) => s.slug === slug);

  if (!service) {
    return <div>Service not found</div>; // Or a 404 page
  }

  const mainContent = coreContent(service);

  return (
    <>
      <Head>
        <title>{mainContent.title} | {siteConfig.name}</title>
        <meta name="description" content={mainContent.description} />
      </Head>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {mainContent.title}
          </h1>
        </div>
        <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
          <MDXLayoutRenderer code={service.body.code} />
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = allServices.map((s) => ({ params: { slug: s.slug } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const service = allServices.find((s) => s.slug === params.slug);
  return { props: { service } };
}
