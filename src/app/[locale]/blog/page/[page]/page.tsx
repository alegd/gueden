import { allBlogs } from 'contentlayer/generated';
import { getTranslations } from 'next-intl/server';
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer';
import ListLayout from 'src/layouts/ListLayoutWithTags';

const POSTS_PER_PAGE = 5;

export default async function Page({
  params
}: {
  params: Promise<{ page: string; locale: string }>;
}) {
  const { page, locale } = await params;
  const t = await getTranslations('blog');
  const localizedPosts = allBlogs.filter((post) => post.language === locale);
  const posts = allCoreContent(sortPosts(localizedPosts));
  const pageNumber = parseInt(page as string);
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  );
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE)
  };

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title={t('all_posts')}
    />
  );
}
