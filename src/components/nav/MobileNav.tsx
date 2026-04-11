'use client';

import headerNavLinks from '@/data/headerNavLinks';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/app/components/ui/sheet';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { CustomLink as Link } from '../Link';
import { VisuallyHidden } from 'radix-ui';

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const t = useTranslations('nav');

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button aria-label="Toggle Menu" className="sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-7 w-7 text-gray-900 dark:text-gray-100"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full border-0 bg-background">
        <VisuallyHidden.Root>
          <SheetTitle>Navigation</SheetTitle>
        </VisuallyHidden.Root>
        <nav className="flex flex-col items-start mt-8 pt-2 pl-12 w-full h-full text-left overflow-y-auto">
          {headerNavLinks.map((link) => (
            <Link
              key={link.titleKey}
              href={link.href}
              className="mb-4 py-2 pr-4 text-3xl font-medium tracking-tight text-gray-900 dark:text-gray-100"
              onClick={() => setOpen(false)}
            >
              {t(link.titleKey)}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
