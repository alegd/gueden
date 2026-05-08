import Link from 'next/link';

interface PostsNavigationButtonsProps {
  prev?: {
    path: string;
    title: string;
  };
  next?: {
    path: string;
    title: string;
  };
}

export function PostsNavigationButtons({ prev, next }: PostsNavigationButtonsProps) {
  return (
    <div className="flex justify-between space-x-4 mx-auto py-4 w-full max-w-2xl">
      {prev && prev.path && (
        <Link
          className="flex items-center space-x-4 border-gray-400 hover:bg-primary-500/10 p-4 border rounded-2xl w-full text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer"
          href={`/${prev.path}`}
        >
          <span>&larr;</span>

          <div>
            <h2 className="text-gray-500 text-sm dark:text-gray-400 tracking-wide">
              Previous Article
            </h2>

            {prev.title}
          </div>
        </Link>
      )}
      {next && next.path && (
        <Link
          className="flex justify-end items-center space-x-4 border-gray-400 hover:bg-primary-500/10 p-4 border rounded-2xl w-full text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer"
          href={`/${next.path}`}
        >
          <div>
            <h2 className="text-gray-500 text-sm dark:text-gray-400 tracking-wide">Next Article</h2>

            {next.title}
          </div>

          <span>&rarr;</span>
        </Link>
      )}
    </div>
  );
}
