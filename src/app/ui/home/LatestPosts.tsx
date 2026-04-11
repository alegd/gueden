import { Animate } from '@/components/Animate';
import type { Blog } from 'contentlayer/generated';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import type { CoreContent } from 'pliny/utils/contentlayer';

interface LatestPostsProps {
  posts: CoreContent<Blog>[];
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('es-ES', {
    month: 'short',
    year: 'numeric'
  });
}

export function LatestPosts({ posts }: LatestPostsProps) {
  const t = useTranslations('home');
  const latestPosts = posts.slice(0, 3);

  return (
    <section className="py-14">
      <Animate>
        <p className="text-sm uppercase tracking-widest text-muted-foreground">
          {t('latest_posts')}
        </p>
      </Animate>
      {latestPosts.length === 0 ? (
        <Animate>
          <p className="mt-6 italic text-muted-foreground">{t('no_posts_yet')}</p>
        </Animate>
      ) : (
        <>
          <ul className="mt-6">
            {latestPosts.map((post, i) => (
              <Animate
                key={post.slug}
                delay={i * 80}
                as="li"
                className="flex items-baseline justify-between border-b border-border py-3 transition-colors hover:bg-muted/50"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-medium transition-colors hover:text-muted-foreground"
                >
                  {post.title}
                </Link>
                <time className="ml-4 shrink-0 text-sm text-muted-foreground">
                  {formatDate(post.date)}
                </time>
              </Animate>
            ))}
          </ul>
          <Animate>
            <div className="mt-6">
              <Link
                href="/blog"
                className="group text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {t('all_posts')}{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
          </Animate>
        </>
      )}
    </section>
  );
}
