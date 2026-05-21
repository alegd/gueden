import { Animate } from '@/components/Animate';
import Comments from '@/components/Comments';
import PageTitle from '@/components/PageTitle';
import ScrollTopAndComment from '@/components/ScrollTopAndComment';
import SectionContainer from '@/components/SectionContainer';
import siteMetadata from '@/data/siteMetadata';
import type { Blog } from 'contentlayer/generated';
import { CoreContent } from 'pliny/utils/contentlayer';
import { formatDate } from 'pliny/utils/formatDate';
import { ReactNode } from 'react';
import { PostsNavigationButtons } from './PostsNavigationButtons';

interface LayoutProps {
  content: CoreContent<Blog>;
  children: ReactNode;
  next?: { path: string; title: string };
  prev?: { path: string; title: string };
}

export default function PostLayout({ content, next, prev, children }: LayoutProps) {
  const { path, slug, date, title } = content;

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div>
          <header>
            <Animate>
              <div className="space-y-1 border-border pb-10 border-b text-center">
                <dl>
                  <div>
                    <dt className="sr-only">Published on</dt>
                    <dd className="font-medium text-muted-foreground leading-6">
                      <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                    </dd>
                  </div>
                </dl>
                <div>
                  <PageTitle>{title}</PageTitle>
                </div>
              </div>
            </Animate>
          </header>
          <div className="grid-rows-[auto_1fr] pb-8 divide-y xl:divide-y-0 divide-border">
            <div className="xl:col-span-3 xl:row-span-2 xl:pb-0 divide-y divide-border">
              <Animate>
                <div className="mx-auto pt-10 pb-8 max-w-2xl dark:prose-invert prose">
                  {children}
                </div>
              </Animate>
            </div>
            {siteMetadata.comments && (
              <Animate>
                <div className="pt-6 pb-6 text-center text-foreground" id="comment">
                  <Comments slug={slug} />
                </div>
              </Animate>
            )}
            <footer>
              <Animate>
                <div className="flex sm:flex-row flex-col sm:justify-between font-medium">
                  {(next || prev) && <PostsNavigationButtons next={next} prev={prev} />}
                </div>
              </Animate>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  );
}
