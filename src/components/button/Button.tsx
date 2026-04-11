import clsx from 'clsx';

import { Loader } from '../loader/Loader';
import styles from './Button.module.css';
import type { ButtonProps } from './Button.props';

export function Button({
  children,
  className,
  label,
  loading,
  size = 'md',
  disabled,
  variant = 'outline',
  type = 'button',
  ...rest
}: Readonly<ButtonProps>) {
  return (
    <button
      className={clsx(className, styles.base, styles[size], styles[variant], loading && 'relative')}
      name={label}
      disabled={disabled ?? loading}
      type={type}
      {...rest}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center rounded-md bg-background">
          <Loader />
        </div>
      )}

      {label && <span>{label}</span>}
      {children}
    </button>
  );
}
