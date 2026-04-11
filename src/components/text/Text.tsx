import clsx from 'clsx';
import { TextConstants } from './Text.constants';
import styles from './Text.module.css';
import type { TextProps } from './Text.props';

export function Text(props: Readonly<TextProps>) {
  const { variant = 'p', className, content } = props;

  const Parent = variant === 'error' ? 'label' : variant;

  const classNames = clsx(
    styles.text,
    props.as && styles[props.as],
    variant === TextConstants.ERROR_CLASSNAME ? TextConstants.ERROR_CLASSNAME : null,
    className
  );

  return <Parent className={classNames}>{content}</Parent>;
}
