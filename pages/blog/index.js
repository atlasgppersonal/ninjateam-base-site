import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer';
import { allBlogs } from 'contentlayer/generated';
import ListLayout from '../../components/layouts/ListLayoutWithTags';
import siteMetadata from '../../data/siteMetadata';

const POSTS_PER_PAGE = 5;

export default function BlogPage() {
  const posts = allCoreContent(sortPosts(allBlogs));
  const pageNumber = 1;
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE * pageNumber);
  const pagination = {
    currentPage: pageNumber,
    totalPages: totalPages,
  };

  return (
    <>
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Posts"
      />
    </>
  );
}

export async function getStaticProps() {
  const posts = allCoreContent(sortPosts(allBlogs));
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE);
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  };

  return {
    props: {
      initialDisplayPosts,
      posts,
      pagination,
    },
  };
}
