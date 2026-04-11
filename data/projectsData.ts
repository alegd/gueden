interface Project {
  title: string;
  descriptionKey: string;
  href?: string;
  imgSrc?: string;
  tech?: string[];
  status?: 'live' | 'building' | 'beta';
  dotColor?: string;
}

const projectsData: Project[] = [
  {
    title: 'Zendinit',
    descriptionKey: 'zendinit',
    href: 'https://www.zendinit.com',
    tech: ['Next.js', 'NestJS', 'PostgreSQL', 'Stripe Connect'],
    status: 'building',
    dotColor: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
  },
  {
    title: 'Yappie',
    descriptionKey: 'yappie',
    href: 'https://github.com/alegd/yappie',
    tech: ['Next.js', 'NestJS', 'OpenAI', 'BullMQ'],
    status: 'live',
    dotColor: '#10B981',
  },
  {
    title: '¡Uy! El arte',
    descriptionKey: 'uyelarte',
    href: 'https://uyelarte.com/',
    tech: ['Podcast'],
    status: 'live',
    dotColor: '#F59E0B',
  },
];

export default projectsData;
