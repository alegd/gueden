import { Animate } from '@/components/Animate';
import { ButtonLink } from '@/components/button/ButtonLink';
import { useTranslations } from 'next-intl';

export function HeroSection() {
  const t = useTranslations('home');

  return (
    <section className="py-14">
      <Animate>
        <p className="text-sm uppercase tracking-widest text-muted-foreground">{t('eyebrow')}</p>
      </Animate>

      <h1 className="mt-4 text-4xl font-medium tracking-tight md:text-5xl leading-tight">
        <Animate>{t('title_line1')}</Animate>
        <Animate delay={200}>{t('title_line2')}</Animate>
      </h1>

      <Animate delay={400}>
        <p className="mt-6 max-w-xl text-muted-foreground">{t('intro')}</p>
        <div className="mt-8 flex items-center gap-4">
          <ButtonLink href="/portfolio" label={t('cta_portfolio')} variant="outline" />
          <ButtonLink href="/contact" label={`${t('cta_contact')} \u2192`} variant="ghost" />
        </div>
      </Animate>
    </section>
  );
}
