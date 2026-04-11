import siteMetadata from '@/data/siteMetadata';
import Link from 'next/link';

export function Logo() {
  return (
    <Link
      href="/"
      className="font-medium tracking-tight text-xl transition-opacity hover:opacity-70"
      aria-label={siteMetadata.headerTitle}
    >
      {siteMetadata.headerTitle}
    </Link>
  );
}
