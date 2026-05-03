import { genPageMetadata } from '@/app/seo';
import siteMetadata from '@/data/siteMetadata';
import { allBlogs } from 'contentlayer/generated';
import { slug } from 'github-slugger';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer';
import ListLayout from 'src/layouts/ListLayoutWithTags';

export async function generateMetadata({
  params
}: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const { tag: rawTag } = await params;
  const tag = decodeURI(rawTag);
  return genPageMetadata({
    title: tag,
    description: `${siteMetadata.title} ${tag} tagged content`,
    alternates: {
      canonical: './',
      types: {
        'application/rss+xml': `${siteMetadata.siteUrl}/tags/${tag}/feed.xml`
      }
    }
  });
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag: rawTag } = await params;
  const tag = decodeURI(rawTag);
  // Capitalize first letter and convert space to dash
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1);
  const filteredPosts = allCoreContent(
    sortPosts(allBlogs.filter((post) => post.tags && post.tags.map((t) => slug(t)).includes(tag)))
  );
  if (filteredPosts.length === 0) {
    return notFound();
  }
  return <ListLayout posts={filteredPosts} title={title} />;
}
