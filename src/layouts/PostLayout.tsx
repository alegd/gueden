import { Animate } from '@/components/Animate';
import Image from '@/components/Image';
import { CustomLink as Link } from '@/components/Link';
import PageTitle from '@/components/PageTitle';
import ScrollTopAndComment from '@/components/ScrollTopAndComment';
import SectionContainer from '@/components/SectionContainer';
import Tag from '@/components/Tag';
import siteMetadata from '@/data/siteMetadata';
import type { Authors, Blog } from 'contentlayer/generated';
import { CoreContent } from 'pliny/utils/contentlayer';
import { ReactNode } from 'react';
import { PostsNavigationButtons } from './PostsNavigationButtons';

const editUrl = (path) => `${siteMetadata.siteRepo}/blob/main/data/${path}`;
const discussUrl = (path) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`${siteMetadata.siteUrl}/${path}`)}`;

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

interface LayoutProps {
  content: CoreContent<Blog>;
  authorDetails: CoreContent<Authors>[];
  next?: { path: string; title: string };
  prev?: { path: string; title: string };
  children: ReactNode;
}

export default function PostLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
  const { filePath, path, slug, date, title, tags } = content;
  const basePath = path.split('/')[0];

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="mx-auto pt-6 xl:pb-6 max-w-2xl">
            <Animate>
              <div className="space-y-1 text-center">
                <dl className="space-y-10">
                  <div>
                    <dt className="sr-only">Published on</dt>
                    <dd className="font-medium text-gray-500 dark:text-gray-400 leading-6">
                      <time dateTime={date}>
                        {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                      </time>
                    </dd>
                  </div>
                </dl>
                <div>
                  <PageTitle>{title}</PageTitle>
                </div>

                {tags && (
                  <div className="flex flex-wrap justify-center gap-3 py-2 w-full">
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                )}
              </div>
            </Animate>
          </header>
          <div className="xl:gap-x-6 pb-8 divide-y xl:divide-y-0 divide-gray-200 dark:divide-gray-700">
            <div className="xl:pb-0 divide-y divide-gray-200 dark:divide-gray-700">
              <Animate>
                <div className="mx-auto pt-10 pb-8 max-w-2xl dark:prose-invert prose">
                  {children}
                </div>
              </Animate>
              <Animate>
                <div className="pt-6 pb-6 text-gray-700 text-sm dark:text-gray-300">
                  <Link href={discussUrl(path)} rel="nofollow">
                    Discuss on Twitter
                  </Link>
                  {` • `}
                  <Link href={editUrl(filePath)}>View on GitHub</Link>
                </div>
              </Animate>
              {/* {siteMetadata.comments && (
                <div
                  className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300"
                  id="comment"
                >
                  <Comments slug={slug} />
                </div>
              )} */}
            </div>
            <Animate>
              <dl className="xl:border-gray-200 xl:dark:border-gray-700 pt-6 xl:pt-11 pb-10 xl:border-b">
                <dt className="sr-only">Authors</dt>
                <dd>
                  <ul className="xl:block flex flex-wrap justify-center gap-3 sm:space-x-12 xl:space-x-0 xl:space-y-8">
                    {authorDetails.map((author) => (
                      <li className="flex items-center space-x-2" key={author.name}>
                        {author.avatar && (
                          <Image
                            src={author.avatar}
                            width={38}
                            height={38}
                            alt="avatar"
                            className="rounded-full w-10 h-10"
                          />
                        )}
                        <dl className="font-medium text-sm leading-5 whitespace-nowrap">
                          <dt className="sr-only">Name</dt>
                          <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
                          <dt className="sr-only">Twitter</dt>
                          <dd>
                            {author.twitter && (
                              <Link
                                href={author.twitter}
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                              >
                                {author.twitter
                                  .replace('https://twitter.com/', '@')
                                  .replace('https://x.com/', '@')}
                              </Link>
                            )}
                          </dd>
                        </dl>
                      </li>
                    ))}
                  </ul>
                </dd>
              </dl>
            </Animate>
            <footer>
              <Animate>
                <div className="divide-y divide-gray-200 dark:divide-gray-700 font-medium text-sm leading-5">
                  {(next || prev) && <PostsNavigationButtons next={next} prev={prev} />}
                </div>
                <div className="pt-4 xl:pt-8">
                  <Link
                    href={`/${basePath}`}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label="Back to the blog"
                  >
                    Back to the blog
                  </Link>
                </div>
              </Animate>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  );
}
