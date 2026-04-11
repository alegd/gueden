import * as Heroicons from '@heroicons/react/24/outline';

export function Icon(props: { name: string; className?: string }): React.ReactElement {
  const { className, name } = props;

  const { ...icons } = Heroicons;

  // @ts-ignore
  const IconElement = icons[name];

  return <IconElement className={className ? className : 'w-6 h-6'} aria-hidden="true" />;
}
