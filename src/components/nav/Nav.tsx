import siteMetadata from '@/data/siteMetadata';
import clsx from 'clsx';
import { Logo } from '../logo/Logo';
import SearchButton from '../SearchButton';
import MobileNav from './MobileNav';
import styles from './Nav.module.css';
import { NavigationLinks } from './NavigationLinks';

export function Nav() {
  return (
    <header className={clsx(styles.container, siteMetadata.stickyNav && styles['sticky-nav'])}>
      <div className="mx-auto max-w-7xl px-4">
        <div className={styles.nav}>
          <Logo />

          <nav className="flex items-center space-x-4 sm:space-x-6" aria-label="Main navigation">
            <NavigationLinks />
            <SearchButton />
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  );
}
