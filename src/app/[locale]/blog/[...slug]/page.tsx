import '@/css/prism.css';
import 'katex/dist/katex.css';

import { components } from '@/components/MDXComponents';
import siteMetadata from '@/data/siteMetadata';
import type { Authors } from 'contentlayer/generated';
import { allAuthors, allBlogs } from 'contentlayer/generated';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXLayoutRenderer } from 'pliny/mdx-components';
import { allCoreContent, coreContent, sortPosts } from 'pliny/utils/contentlayer';
import PostBanner from 'src/layouts/PostBanner';
import PostLayout from 'src/layouts/PostLayout';
import PostSimple from 'src/layouts/PostSimple';

const defaultLayout = 'PostLayout';
const layouts = {
  PostSimple,
  PostLayout,
  PostBanner
};

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata | undefined> {
  const { slug: slugParts } = await params;
  const slug = decodeURI(slugParts.join('/'));
  const post = allBlogs.find((p) => p.slug === slug);
  const authorList = post?.authors || ['default'];
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author);
    return coreContent(authorResults as Authors);
  });
  if (!post) {
    return;
  }

  const publishedAt = new Date(post.date).toISOString();
  const modifiedAt = new Date(post.lastmod || post.date).toISOString();
  const authors = authorDetails.map((author) => author.name);
  let imageList: string[] = [siteMetadata.socialBanner];
  if (post.images) {
    imageList = typeof post.images === 'string' ? [post.images] : (post.images as string[]);
  }
  const ogImages = imageList.map((img: string) => {
    return {
      url: img.includes('http') ? img : siteMetadata.siteUrl + img
    };
  });

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      siteName: siteMetadata.title,
      locale: 'en_US',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: './',
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: imageList
    }
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug: slugParts } = await params;
  const slug = decodeURI(slugParts.join('/'));
  const post = allBlogs.find((p) => p.slug === slug);
  if (!post) {
    return notFound();
  }

  const localizedPosts = allBlogs.filter((p) => p.language === post.language);
  const sortedCoreContents = allCoreContent(sortPosts(localizedPosts));
  const postIndex = sortedCoreContents.findIndex((p) => p.slug === slug);
  const prev = sortedCoreContents[postIndex + 1];
  const next = sortedCoreContents[postIndex - 1];
  const authorList = post?.authors || ['default'];
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author);
    return coreContent(authorResults as Authors);
  });
  const mainContent = coreContent(post);
  const jsonLd = post.structuredData;
  jsonLd['author'] = authorDetails.map((author) => {
    return {
      '@type': 'Person',
      name: author.name
    };
  });

  const Layout = layouts[post.layout || defaultLayout];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Layout content={mainContent} authorDetails={authorDetails} next={next} prev={prev}>
        <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
      </Layout>
    </>
  );
}
