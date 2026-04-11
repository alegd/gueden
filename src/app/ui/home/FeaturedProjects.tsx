import { Animate } from '@/components/Animate';
import projectsData from '@/data/projectsData';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const defaultDotColors: Record<string, string> = {
  live: '#10B981',
  building: '#3B82F6',
  beta: '#F59E0B'
};

export function FeaturedProjects() {
  const t = useTranslations('home');
  const tProjects = useTranslations('projects');
  const featuredProjects = projectsData.slice(0, 2);

  return (
    <section className="py-14">
      <Animate>
        <p className="text-sm uppercase tracking-widest text-muted-foreground">
          {t('featured_projects')}
        </p>
      </Animate>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {featuredProjects.map((project, i) => (
          <Animate key={project.title} delay={i * 100}>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-lg border border-border p-5 transition-colors hover:border-foreground/30"
            >
              <div className="flex items-center gap-2">
                <span
                  className={`inline-block h-2 w-2 shrink-0 rounded-full ${project.status === 'building' ? 'animate-pulse' : ''}`}
                  style={{
                    background:
                      project.dotColor ||
                      (project.status && defaultDotColors[project.status]) ||
                      '#9ca3af'
                  }}
                />
                <span className="font-medium">{project.title}</span>
              </div>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">
                {tProjects(project.descriptionKey)}
              </p>
              {project.tech && (
                <p className="mt-3 text-sm text-muted-foreground/60">
                  {project.tech.join(' \u00B7 ')}
                </p>
              )}
            </a>
          </Animate>
        ))}
      </div>
      <Animate>
        <div className="mt-6">
          <Link
            href="/portfolio"
            className="group text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {t('all_projects')}{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      </Animate>
    </section>
  );
}
