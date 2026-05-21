import { ButtonLink } from '@/components/button/ButtonLink';
import { getTranslations } from 'next-intl/server';

export default async function NotFound() {
  const t = await getTranslations('not_found');

  return (
    <div className="flex md:flex-row flex-col justify-start md:justify-center items-start md:items-center md:space-x-6 md:mt-24">
      <div className="space-x-2 md:space-y-5 pt-6 pb-8">
        <h1 className="md:px-6 md:border-r-2 font-medium text-6xl text-foreground md:text-8xl leading-9 md:leading-14 tracking-tight">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 font-medium text-xl md:text-2xl leading-normal">{t('title')}</p>
        <p className="mb-8 text-foreground">{t('description')}</p>
        <ButtonLink href="/" label={t('back_home')} variant="outline" />
      </div>
    </div>
  );
}
