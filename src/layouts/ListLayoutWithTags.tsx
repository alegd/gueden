'use client';

import { Animate } from '@/components/Animate';
import { CustomLink as Link } from '@/components/Link';
import Tag from '@/components/Tag';
import siteMetadata from '@/data/siteMetadata';
import type { Blog } from 'contentlayer/generated';
import { usePathname } from 'next/navigation';
import { CoreContent } from 'pliny/utils/contentlayer';
import { formatDate } from 'pliny/utils/formatDate';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

interface ListLayoutProps {
  posts: CoreContent<Blog>[];
  title: string;
  initialDisplayPosts?: CoreContent<Blog>[];
  pagination?: PaginationProps;
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname();
  const basePath = pathname.split('/')[1];
  const prevPage = currentPage - 1 > 0;
  const nextPage = currentPage + 1 <= totalPages;

  return (
    <div className="flex justify-between pt-8">
      {prevPage ? (
        <Link
          href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
          rel="prev"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          &larr; Previous
        </Link>
      ) : (
        <span />
      )}
      <span className="text-sm text-muted-foreground">
        {currentPage} of {totalPages}
      </span>
      {nextPage ? (
        <Link
          href={`/${basePath}/page/${currentPage + 1}`}
          rel="next"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Next &rarr;
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination
}: ListLayoutProps) {
  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts;

  return (
    <div>
      <Animate>
        <div className="pt-6 pb-8">
          <h1 className="text-3xl font-medium tracking-tight md:text-4xl">{title}</h1>
        </div>
      </Animate>
      <ul className="divide-y divide-border">
        {displayPosts.map((post, i) => {
          const { path, date, title, summary, tags } = post;
          return (
            <Animate key={path} as="li" delay={i * 80} className="py-6">
              <article>
                <time
                  dateTime={date}
                  className="text-sm text-muted-foreground"
                  suppressHydrationWarning
                >
                  {formatDate(date, siteMetadata.locale)}
                </time>
                <h2 className="mt-1 text-xl font-medium tracking-tight">
                  <Link href={`/${path}`} className="transition-colors hover:text-muted-foreground">
                    {title}
                  </Link>
                </h2>
                {tags && tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                )}
                {summary && <p className="mt-3 text-sm text-muted-foreground">{summary}</p>}
              </article>
            </Animate>
          );
        })}
      </ul>
      {pagination && pagination.totalPages > 1 && (
        <Animate delay={displayPosts.length * 80}>
          <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
        </Animate>
      )}
    </div>
  );
}
