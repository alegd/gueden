import { genPageMetadata } from '@/app/seo';
import { Animate } from '@/components/Animate';
import SectionContainer from '@/components/SectionContainer';
import { getTranslations } from 'next-intl/server';
import { ContactForm } from '../../ui/contact/ContactForm';

export const generateMetadata = () => genPageMetadata({ title: 'Contact' });

export default async function Page() {
  const t = await getTranslations('contact');

  return (
    <SectionContainer>
      <Animate>
        <h1 className="text-3xl font-medium tracking-tight md:text-4xl">{t('title')}</h1>
        <p className="mt-2 mb-4 text-muted-foreground">{t('subtitle')}</p>
      </Animate>

      <Animate delay={100}>
        <ContactForm />
      </Animate>
    </SectionContainer>
  );
}
