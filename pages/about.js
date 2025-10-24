import { allAuthors } from 'contentlayer/generated';
import { MDXLayoutRenderer } from 'pliny/mdx-components';
import AuthorLayout from '../components/layouts/AuthorLayout';
import { coreContent } from 'pliny/utils/contentlayer';

export default function AboutPage() {
  const author = allAuthors.find((p) => p.slug === 'default');
  const mainContent = coreContent(author);

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
    </>
  );
}
