import type { GetStaticPaths, GetStaticProps, GetStaticPropsResult, NextPage } from 'next'
import { readMarkdownFromSlug } from '../lib'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { Article } from '../components/Article'
import { Layout } from '../components/Layout'

type MarkdownProps = {
  slug: string;
  content: MDXRemoteSerializeResult;
}

const notFoundResult: GetStaticPropsResult<{}> = {notFound: true};

const slugPath = (slug: string):{ params: {slug: string} } => {
  return { params: { slug }};
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      slugPath('careers'),
    ],
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<MarkdownProps> = async (context) => {
  const slug = context?.params?.slug;

  if (!slug) {
    console.error('Slug not found');
    return notFoundResult;
  }

  try {
    return {
      props: {
        slug: (Array.isArray(slug) ? slug[0] : slug).toUpperCase(),
        content: await serialize(readMarkdownFromSlug(Array.isArray(slug) ? slug[0] : slug)),
      },
    };
  } catch (e) {
    console.error(e);
    return notFoundResult;
  }
}

const MarkdownPost: NextPage<MarkdownProps> = ({ slug, content }) => {
  return (
    <Layout title={slug}>
      <Article content={content} />
    </Layout>
  )
}

export default MarkdownPost
