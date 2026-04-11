'use client';

import { Animate } from '@/components/Animate';

interface TimelineEntry {
  year: string;
  endYear?: string;
  title: string;
  org: string;
  type: 'work' | 'education' | 'project';
  branch?: boolean;
  description?: string;
}

const timeline: TimelineEntry[] = [
  {
    year: '2025',
    title: 'Senior Full Stack Engineer / Solution Architect',
    org: 'Aperience',
    type: 'work',
    description:
      'Diseño de arquitecturas para plataformas enterprise con IA. Integración de LLMs, Salesforce y vector search.'
  },
  {
    year: '2025',
    title: "Master's in AI Development",
    org: 'BIG School',
    type: 'education',
    branch: true
  },
  {
    year: '2025',
    title: 'Yappie',
    org: 'Open Source',
    type: 'project',
    branch: true,
    description: 'Voice-to-Jira: convierte notas de voz en tickets estructurados con GPT-4o.'
  },
  {
    year: '2024',
    title: 'Cloud Full Stack Engineer',
    org: 'Holcim EMEA',
    type: 'work',
    description:
      'Sistema de pedidos por WhatsApp con ChatGPT. Plataforma de sostenibilidad Geocycle.'
  },
  {
    year: '2023',
    title: 'Senior Full Stack Engineer',
    org: 'IKEA — Ingka Group',
    type: 'work',
    description: 'Assisted Shopping: plataforma B2B que reemplazó flujos legacy en Excel.'
  },
  {
    year: '2022',
    title: 'Senior Full Stack Developer',
    org: 'Alicunde Systems',
    type: 'work',
    description:
      'Calculadora de huella de carbono. App React Native para terminales Adyen en vuelos.'
  },
  {
    year: '2020',
    title: 'Senior Full Stack Developer',
    org: 'Iguana IT',
    type: 'work',
    description: 'PWA y CMS para SATSE (sindicato de enfermería). E-commerce B2B para Spyro.'
  },
  {
    year: '2020',
    title: 'MBA',
    org: 'EUDE Business School',
    type: 'education',
    branch: true
  },
  {
    year: '2018',
    title: 'Full Stack Developer',
    org: 'Independiente',
    type: 'work',
    branch: true,
    description: 'Monitorización eléctrica en Liberia (Indra). Apps web, mobile y backend.'
  },
  {
    year: '2016',
    title: 'Team Lead / Senior Developer',
    org: 'ANF Certificación',
    type: 'work',
    description:
      'Suites de seguridad PKI para certificación digital de documentos médicos y legales.'
  },
  {
    year: '2011',
    title: 'B.Sc. Computer Engineering',
    org: 'CUJAE — La Habana',
    type: 'education',
    description: '2× ganador ICPC Regional. Mejor investigador estudiantil CITI.'
  }
];

const dotColors: Record<string, string> = {
  work: '#e5e5e5',
  education: '#3B82F6',
  project: '#10B981'
};

export function GitTimeline() {
  return (
    <div className="relative mt-12">
      {timeline.map((entry, i) => (
        <Animate key={`${entry.year}-${entry.org}`} delay={i * 60}>
          <div className="relative flex gap-6 pb-8 last:pb-0">
            {/* Git line */}
            <div className="flex flex-col items-center">
              {/* Dot */}
              <div
                className="relative z-10 mt-1.5 h-3 w-3 shrink-0 rounded-full border-2 border-background"
                style={{ background: dotColors[entry.type] }}
              />
              {/* Vertical line */}
              {i < timeline.length - 1 && (
                <div
                  className={`w-px flex-1 ${entry.branch ? 'border-l border-dashed border-border' : 'bg-border'}`}
                />
              )}
            </div>

            {/* Branch indicator */}
            <div className="flex-1 pb-2">
              <div className="flex items-baseline gap-2">
                <span className="shrink-0 font-mono text-sm text-muted-foreground">
                  {entry.year}
                </span>
                {entry.branch && (
                  <span className="font-mono text-sm text-muted-foreground">─┐</span>
                )}
              </div>
              <h3 className="mt-0.5 mb-0.5 font-medium">{entry.title}</h3>
              <p className="text-sm text-muted-foreground mb-1">{entry.org}</p>
              {entry.description && (
                <p className="mt-0 text-sm text-muted-foreground">{entry.description}</p>
              )}
            </div>
          </div>
        </Animate>
      ))}
    </div>
  );
}
