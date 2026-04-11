import { Text } from '@/components/text/Text';
import { XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';
import styles from './TextInput.module.css';
import { TextInputProps } from './TextInput.props';

const DEFAULT_INPUT_VARIANT = 'outlined';

export function TextInput(props: Readonly<TextInputProps>) {
  const { as, className, label, type, variant, name, validation, ...rest } = props;

  const {
    register,
    formState: { errors, isDirty, dirtyFields },
    resetField
  } = useFormContext();

  const currentVariant = variant ?? DEFAULT_INPUT_VARIANT;

  const fieldProps = {
    type: type ?? 'text',
    className: clsx('text-field', errors[name] ? 'text-field__error' : currentVariant, className),
    'aria-label': name,
    ...register(name, validation),
    ...rest
  };

  return (
    <div className={styles.textInput}>
      {label && (
        <label htmlFor={props.name}>
          {label}
          {props.required && <span className={styles.required}>*</span>}
        </label>
      )}

      {as === 'textarea' ? <textarea {...fieldProps} /> : <input {...fieldProps} />}

      {isDirty && dirtyFields[name] && !props.hideReset && (
        <button type="button" className={styles.resetButton} onClick={() => resetField(name)}>
          <XMarkIcon className="size-5" />
        </button>
      )}

      {errors[name] && (
        <Text
          className={styles.errorText}
          content={String(errors[name]?.message) ?? errors[name].type}
        />
      )}
    </div>
  );
}
