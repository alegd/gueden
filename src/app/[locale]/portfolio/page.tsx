import { genPageMetadata } from '@/app/seo';
import { Animate } from '@/components/Animate';
import projectsData from '@/data/projectsData';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = () => genPageMetadata({ title: 'Portfolio' });

const defaultDotColors: Record<string, string> = {
  live: '#10B981',
  building: '#3B82F6',
  beta: '#F59E0B'
};

export default async function PortfolioPage() {
  const t = await getTranslations('home');
  const tNav = await getTranslations('nav');
  const tStatus = await getTranslations('status');
  const tProjects = await getTranslations('projects');

  return (
    <div>
      <Animate>
        <section className="py-14">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">{t('eyebrow')}</p>
          <h1 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
            {tNav('portfolio')}
          </h1>
        </section>
      </Animate>

      <div className="divide-y divide-border">
        {projectsData.map((project, i) => (
          <Animate key={project.title} delay={i * 80}>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={project.title}
              className="group block py-6 transition-transform hover:translate-x-1"
            >
              <div className="flex items-center gap-3">
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
                {project.status && (
                  <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] uppercase text-muted-foreground">
                    {tStatus(project.status)}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {tProjects(project.descriptionKey)}
              </p>
              {project.tech && (
                <p className="mt-2 text-sm text-muted-foreground">{project.tech.join(' · ')}</p>
              )}
            </a>
          </Animate>
        ))}
      </div>
    </div>
  );
}
