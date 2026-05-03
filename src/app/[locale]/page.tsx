import { allBlogs } from 'contentlayer/generated';
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer';
import { Home } from '../ui/home/Home';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const localizedPosts = allBlogs.filter((post) => post.language === locale);
  const sortedPosts = sortPosts(localizedPosts);
  const posts = allCoreContent(sortedPosts);

  return <Home posts={posts} />;
}
