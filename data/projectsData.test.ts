import { describe, expect, it } from 'vitest';
import projectsData from './projectsData';
import en from '../locales/en/common.json';
import es from '../locales/es/common.json';

describe('projectsData', () => {
  it('lists Instacaribe as a live project linking to instacaribe.com', () => {
    const instacaribe = projectsData.find((project) => project.title === 'Instacaribe');

    expect(instacaribe).toMatchObject({
      descriptionKey: 'instacaribe',
      href: 'https://instacaribe.com',
      status: 'live'
    });
  });

  it.each([
    ['es', es],
    ['en', en]
  ])('resolves every project description in %s', (_locale, messages) => {
    const missing = projectsData
      .map((project) => project.descriptionKey)
      .filter((key) => !(key in messages.projects));

    expect(missing).toEqual([]);
  });
});
