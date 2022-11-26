import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Link from '../Link';
import components from './components';

type Props = {
  content: MDXRemoteSerializeResult;
};

export const Article = ({ content }: Props) => {
  return (
    <MDXRemote {...content} components={components} />
  );
};