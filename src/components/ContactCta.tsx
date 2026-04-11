'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function ContactCta() {
  const pathname = usePathname();
  const t = useTranslations('home');

  if (pathname.includes('/contact')) return null;

  return (
    <section className="py-14">
      <div className="mx-auto p-4 flex flex-col items-center gap-5 sm:flex-row sm:justify-between border rounded-lg">
        <div>
          <p className="text-lg font-medium">{t('cta_bottom_title')}</p>
          <p className="mt-2 text-muted-foreground text-base">{t('cta_bottom_subtitle')}</p>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-md border border-emerald-500/40 px-4 py-2 text-sm font-medium text-emerald-600 transition-colors hover:border-emerald-500 hover:bg-emerald-500/10 dark:text-emerald-400 dark:hover:bg-emerald-500/10"
        >
          {t('cta_bottom_link')}
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
        </Link>
      </div>
    </section>
  );
}
