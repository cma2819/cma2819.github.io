import { join } from 'path';
import { readFileSync } from 'fs';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';

const markdownDir = join(process.cwd(), 'articles');

export const fetchMarkdownFromSlug = async (slug: string): Promise<string> => {
  return await fetchMarkdownToHtml(readMarkdownFromSlug(slug));
};

export const readMarkdownFromSlug = (slug: string): string => {
  
  const markdownPath = join(markdownDir, `${slug}.md`);
  try {
    return readFileSync(markdownPath).toString();
  } catch (e) {
    throw new Error(`Failed to read markdown at ${markdownPath}`);
  }
};

const fetchMarkdownToHtml = async (content: string): Promise<string> => {
  return (await remark()
    .use(remarkHtml)
    .use(remarkGfm)
    .process(content)
  ).toString();
};