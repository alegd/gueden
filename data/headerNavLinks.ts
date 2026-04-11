interface NavLink {
  href: string;
  title: string;
  titleKey: 'home' | 'portfolio' | 'blog' | 'about' | 'contact';
}

const headerNavLinks: NavLink[] = [
  { href: '/portfolio', title: 'Portfolio', titleKey: 'portfolio' },
  { href: '/blog', title: 'Blog', titleKey: 'blog' },
  { href: '/about', title: 'Sobre mí', titleKey: 'about' },
  { href: '/contact', title: 'Contacto', titleKey: 'contact' }
];

export default headerNavLinks;
