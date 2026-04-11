import SocialIcon from '@/components/social-icons';
import siteMetadata from '@/data/siteMetadata';

import { LocaleSwitcher } from './LocaleSwitcher';

export function Footer() {
  return (
    <footer className="border-t border-border w-full py-6">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            {siteMetadata.author} · © {new Date().getFullYear()}
          </p>

          <div className="flex items-center gap-6">
            <LocaleSwitcher />
            <div className="flex space-x-4">
              {siteMetadata.social.map((s) => (
                <SocialIcon key={s.name} kind={s.name} href={s.link} size={5} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
