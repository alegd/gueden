import clsx from 'clsx';
import styles from './Loader.module.css';
import type { LoaderProps } from './Loader.props';

export function Loader({ children, size, fullScreen }: Readonly<LoaderProps>) {
  return (
    <div
      className={clsx(
        fullScreen && 'fixed inset-0 h-screen bg-white',
        'z-50 flex items-center justify-center w-full h-full'
      )}
    >
      <span className="sr-only">Loading...</span>
      <div className="flex flex-col items-center justify-center">
        <span className={clsx(styles.loader, `w-${size ?? 6} h-${size ?? 6}`)} />

        {children}
      </div>
    </div>
  );
}
