import { ButtonLink } from '@/components/button/ButtonLink';

export default function NotFound() {
  return (
    <div className="flex md:flex-row flex-col justify-start md:justify-center items-start md:items-center md:space-x-6 md:mt-24">
      <div className="space-x-2 md:space-y-5 pt-6 pb-8">
        <h1 className="md:px-6 md:border-r-2 font-medium text-6xl text-gray-900 md:text-8xl dark:text-gray-100 leading-9 md:leading-14 tracking-tight">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 font-medium text-xl md:text-2xl leading-normal">
          Sorry we couldn't find this page.
        </p>
        <p className="mb-8 text-gray-500 dark:text-gray-400">
          But dont worry, you can find plenty of other things on our homepage.
        </p>
        <ButtonLink href="/" label="Back to homepage" variant="outline" />
      </div>
    </div>
  );
}
