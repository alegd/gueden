import clsx from 'clsx';
import Link from 'next/link';

import styles from './Button.module.css';

interface ButtonLinkProps {
  href: string;
  label: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outline' | 'ghost';
  className?: string;
}

export function ButtonLink({
  href,
  label,
  size = 'md',
  variant = 'outline',
  className,
}: Readonly<ButtonLinkProps>) {
  return (
    <Link href={href} className={clsx(className, styles.base, styles[size], styles[variant])}>
      {label}
    </Link>
  );
}
