'use client';

import { Loader } from '@/components/loader/Loader';
import clsx from 'clsx';
import { Icon } from '../icon/Icon';
import styles from './IconButton.module.css';
import { IconButtonProps } from './IconButton.props';

export default function IconButton(props: IconButtonProps) {
  const { size = 'md', variant = 'flat', color, loading, disabled } = props;

  const classNames = clsx(
    styles.IconButton,
    props.className ? props.className : '',
    styles.base,
    styles[size],
    styles[variant],
    color && styles[color],
    loading && 'relative',
    disabled && 'opacity-50 cursor-not-allowed'
  );

  return (
    <button
      type={props.type ?? 'button'}
      className={classNames}
      aria-label="submit"
      disabled={props.disabled ?? props.loading}
      onClick={props.onClick}
    >
      {props.loading && (
        <div>
          <Loader size={40} />
        </div>
      )}

      <Icon name={props.icon} className="size-5" />
    </button>
  );
}
