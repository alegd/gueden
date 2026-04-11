'use client';

import headerNavLinks from '@/data/headerNavLinks';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { parseUrl } from 'src/lib/urls';
import { CustomLink as Link } from '../Link';

export function NavigationLinks({ keepInDark: _keepInDark }: { keepInDark?: boolean } = {}) {
  const localePathanme = usePathname();
  const pathname = parseUrl(localePathanme);
  const t = useTranslations('nav');

  return (
    <div className="sm:flex items-center space-x-1 hidden">
      {headerNavLinks.map((link) => (
        <Link
          key={link.titleKey}
          href={link.href}
          className={clsx(
            'block px-3 py-2 text-sm transition-colors',
            pathname === link.href
              ? 'text-black dark:text-white'
              : 'text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white'
          )}
        >
          {t(link.titleKey)}
        </Link>
      ))}
    </div>
  );
}
