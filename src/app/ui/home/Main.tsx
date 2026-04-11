import { CustomLink as Link } from '@/components/Link';
import Tag from '@/components/Tag';
import siteMetadata from '@/data/siteMetadata';
import NewsletterForm from 'pliny/ui/NewsletterForm';
import { formatDate } from 'pliny/utils/formatDate';

const MAX_DISPLAY = 5;

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 md:space-y-5 py-8">
          <h1 className="font-medium text-3xl text-gray-900 sm:text-4xl md:text-6xl dark:text-gray-100 leading-9 sm:leading-10 md:leading-14 tracking-tight">
            Latest
          </h1>
          <p className="text-gray-500 text-lg dark:text-gray-400 leading-7">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post;
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="xl:items-baseline space-y-2 xl:space-y-0 xl:grid xl:grid-cols-4">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="font-medium text-base text-gray-500 dark:text-gray-400 leading-6">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-4">
                        <h2 className="font-medium text-2xl leading-8 tracking-tight">
                          <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                            {title}
                          </Link>
                        </h2>

                        <div className="flex flex-wrap gap-3">
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>

                        <div className="max-w-none text-gray-500 dark:text-gray-400 prose">
                          {summary}
                        </div>
                      </div>
                      <div className="font-medium text-base leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end font-medium text-base leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex justify-center items-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  );
}
