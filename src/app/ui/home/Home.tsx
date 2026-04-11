import { ContactCta } from '@/components/ContactCta';
import type { Blog } from 'contentlayer/generated';
import type { CoreContent } from 'pliny/utils/contentlayer';

import { FeaturedProjects } from './FeaturedProjects';
import { HeroSection } from './HeroSection';
import { LatestPosts } from './LatestPosts';

export function Home({ posts }: { posts: CoreContent<Blog>[] }) {
  return (
    <div>
      <HeroSection />
      <FeaturedProjects />
      <LatestPosts posts={posts} />
      <ContactCta />
    </div>
  );
}
