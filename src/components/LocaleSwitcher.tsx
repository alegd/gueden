'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

const locales = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
];

export function LocaleSwitcher() {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchTo = (targetLocale: string) => {
    if (targetLocale === currentLocale) return;

    const segments = pathname.split('/');
    if (['en', 'es'].includes(segments[1])) {
      segments[1] = targetLocale;
    } else {
      segments.splice(1, 0, targetLocale);
    }
    router.push(segments.join('/') || '/');
  };

  return (
    <div className="flex items-center gap-1 text-sm">
      {locales.map((locale, i) => (
        <span key={locale.code} className="flex items-center gap-1">
          {i > 0 && <span className="text-muted-foreground">/</span>}
          <button
            onClick={() => switchTo(locale.code)}
            aria-label={`Switch to ${locale.label}`}
            className={
              currentLocale === locale.code
                ? 'text-foreground font-medium'
                : 'text-muted-foreground transition-colors hover:text-foreground'
            }
          >
            {locale.label}
          </button>
        </span>
      ))}
    </div>
  );
}
