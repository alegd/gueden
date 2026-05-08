import { genPageMetadata } from '@/app/seo';
import { GitTimeline } from '@/components/GitTimeline';
import { Authors, allAuthors } from 'contentlayer/generated';
import { MDXLayoutRenderer } from 'pliny/mdx-components';
import { coreContent } from 'pliny/utils/contentlayer';
import AuthorLayout from 'src/layouts/AuthorLayout';

export const generateMetadata = () => genPageMetadata({ title: 'About' });

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors;
  const mainContent = coreContent(author);

  return (
    <AuthorLayout content={mainContent}>
      <MDXLayoutRenderer code={author.body.code} />
      <GitTimeline />
    </AuthorLayout>
  );
}
