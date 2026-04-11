import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Mastodon,
  Medium,
  Threads,
  Twitter,
  X,
  Youtube
} from './icons';

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  x: X,
  mastodon: Mastodon,
  threads: Threads,
  instagram: Instagram,
  medium: Medium
};

const labels: Record<string, string> = {
  mail: 'Email',
  github: 'GitHub',
  facebook: 'Facebook',
  youtube: 'YouTube',
  linkedin: 'LinkedIn',
  twitter: 'Twitter',
  x: 'X',
  mastodon: 'Mastodon',
  threads: 'Threads',
  instagram: 'Instagram',
  medium: 'Medium'
};

type SocialIconProps = {
  kind: keyof typeof components;
  href: string | undefined;
  size?: number;
};

const SocialIcon = ({ kind, href, size = 8 }: SocialIconProps) => {
  if (
    !href ||
    (kind === 'mail' && !/^mailto:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(href))
  )
    return null;

  const SocialSvg = components[kind];

  return (
    <a
      className="text-muted-foreground transition-colors hover:text-foreground"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      aria-label={labels[kind] || kind}
    >
      <span className="sr-only">{labels[kind] || kind}</span>
      <SocialSvg className={`fill-current size-${size}`} />
    </a>
  );
};

export default SocialIcon;
