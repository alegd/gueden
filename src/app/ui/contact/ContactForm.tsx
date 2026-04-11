'use client';

import { Button } from '@/components/button/Button';
import { ButtonLink } from '@/components/button/ButtonLink';
import { TextInput } from '@/components/form/text-input/TextInput';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import styles from './ContactForm.module.css';

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

export function ContactForm() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<FormStatus>('idle');
  const methods = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setStatus('sending');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus('sent');
      methods.reset();
    } else {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="flex flex-col items-start gap-6 py-12">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 dark:border-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5 text-emerald-500"
          >
            <path
              fillRule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <p className="text-lg font-medium">{t('form.success_title')}</p>
          <p className="mt-2 text-gray-500 dark:text-gray-400">{t('form.success')}</p>
        </div>
        <ButtonLink href="/" label={t('form.back_home')} variant="outline" />
      </div>
    );
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.container}>
        <TextInput
          name="name"
          placeholder={t('form.name.placeholder')}
          validation={{
            required: { value: true, message: t('form.name.errors.required') },
            maxLength: 255,
          }}
        />

        <TextInput
          name="email"
          placeholder={t('form.email.placeholder')}
          validation={{
            required: { value: true, message: t('form.email.errors.required') },
            pattern: { value: /^\S+@\S+$/i, message: t('form.email.errors.pattern') },
            maxLength: 255,
          }}
        />

        <TextInput
          name="subject"
          placeholder={t('form.subject.placeholder')}
          validation={{
            required: { value: true, message: t('form.subject.errors.required') },
            maxLength: 255,
          }}
        />

        <TextInput
          as="textarea"
          rows={5}
          name="message"
          placeholder={t('form.message.placeholder')}
          validation={{ required: { value: true, message: t('form.message.errors.required') } }}
        />

        {status === 'error' && (
          <p className="text-sm text-red-500">{t('form.error')}</p>
        )}

        <Button
          type="submit"
          label={status === 'sending' ? t('form.sending') : t('form.submit')}
          disabled={status === 'sending'}
        />
      </form>
    </FormProvider>
  );
}
