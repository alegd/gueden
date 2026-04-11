import { Animate } from '@/components/Animate';
import Image from '@/components/Image';
import type { Authors } from 'contentlayer/generated';
import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  content: Omit<Authors, '_id' | '_raw' | 'body'>;
}

export default function AuthorLayout({ children, content }: Props) {
  const t = useTranslations();

  const { name, avatar, occupation, company } = content;

  return (
    <div>
      <Animate>
        <section className="pt-12 pb-8">
          <p className="text-sm uppercase tracking-widest text-gray-500">{t('about')}</p>
          <div className="mt-6 flex items-center gap-4">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={64}
                height={64}
                className="h-16 w-16 rounded-full grayscale"
              />
            )}
            <div>
              <h1 className="text-xl font-medium tracking-tight">{name}</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {occupation}
                {company && ` · ${company}`}
              </p>
            </div>
          </div>
        </section>
      </Animate>

      <Animate delay={100}>
        <div className="prose prose-gray dark:prose-invert">{children}</div>
      </Animate>
    </div>
  );
}
