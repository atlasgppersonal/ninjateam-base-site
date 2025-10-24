import { allBlogs, allAuthors } from 'contentlayer/generated';
import { coreContent } from 'pliny/utils/contentlayer';
import { MDXLayoutRenderer } from 'pliny/mdx-components';
import PostSimple from '../../components/layouts/PostSimple';
import PostLayout from '../../components/layouts/PostLayout';
import PostBanner from '../../components/layouts/PostBanner';
import siteMetadata from '../../data/siteMetadata';
import { components } from '../../components/blog-components/MDXComponents'; // Assuming MDXComponents is copied here

const defaultLayout = 'PostLayout';
const layouts = {
  PostSimple,
  PostLayout,
  PostBanner,
};

export async function getStaticPaths() {
  const paths = allBlogs.map((p) => ({
    params: {
      slug: p.slug.split('/'),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug.join('/');
  const post = allBlogs.find((p) => p.slug === slug);
  const authorList = post?.authors || ['default'];
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author);
    return coreContent(authorResults);
  });

  const mainContent = coreContent(post);

  return { props: { post, authorDetails, mainContent } };
}

export default function BlogPost({ post, authorDetails, mainContent }) {
  const Layout = layouts[post.layout || defaultLayout];

  return (
    <>
      <Layout content={mainContent} authorDetails={authorDetails}>
        <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
      </Layout>
    </>
  );
}
