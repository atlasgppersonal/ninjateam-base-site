import { slug } from 'github-slugger';
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer';
import siteMetadata from '../../data/siteMetadata';
import ListLayout from '../../components/layouts/ListLayoutWithTags';
import { allBlogs } from 'contentlayer/generated';
import tagData from '../../app/tag-data.json';

const POSTS_PER_PAGE = 5;

export async function getStaticPaths() {
  const tagCounts = tagData;
  const tagKeys = Object.keys(tagCounts);
  const paths = tagKeys.map((tag) => ({
    params: {
      tag: encodeURI(tag),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const tag = decodeURI(params.tag);
  const filteredPosts = allCoreContent(
    sortPosts(allBlogs.filter((post) => post.tags && post.tags.map((t) => slug(t)).includes(tag)))
  );
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const initialDisplayPosts = filteredPosts.slice(0, POSTS_PER_PAGE);
  const pagination = {
    currentPage: 1,
    totalPages: totalPages,
  };

  return {
    props: {
      posts: filteredPosts,
      initialDisplayPosts,
      pagination,
      tag,
    },
  };
}

export default function TagPage({ posts, initialDisplayPosts, pagination, tag }) {
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1);

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title={title}
    />
  );
}
