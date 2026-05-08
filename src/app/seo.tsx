import siteMetadata from '@/data/siteMetadata';
import { Metadata } from 'next';
import { getLocale } from 'next-intl/server';

interface PageSEOProps {
  title: string;
  description?: string;
  image?: string;

  [key: string]: any;
}

export async function genPageMetadata({
  title,
  description,
  image,
  ...rest
}: PageSEOProps): Promise<Metadata> {
  const locale = await getLocale();
  const localizedDescription =
    description ?? (locale === 'es' ? siteMetadata.descriptionEs : siteMetadata.description);
  const ogLocale = locale === 'es' ? 'es_ES' : 'en_US';

  return {
    title,
    description: localizedDescription,
    openGraph: {
      title: `${title} | ${siteMetadata.title}`,
      description: localizedDescription,
      url: './',
      siteName: siteMetadata.title,
      images: image ? [image] : [siteMetadata.socialBanner],
      locale: ogLocale,
      type: 'website'
    },
    twitter: {
      title: `${title} | ${siteMetadata.title}`,
      card: 'summary_large_image',
      images: image ? [image] : [siteMetadata.socialBanner]
    },
    ...rest
  };
}
