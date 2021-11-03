import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import components from './components';

type Props = {
  content: MDXRemoteSerializeResult;
};

export const Article = ({ content }: Props) => {
  return (
    <MDXRemote {...content} components={components} />
  )
}