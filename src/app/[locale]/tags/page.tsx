import { genPageMetadata } from '@/app/seo';
import Tag from '@/components/Tag';
import { allBlogs } from 'contentlayer/generated';
import { slug as slugify } from 'github-slugger';

export const generateMetadata = () =>
  genPageMetadata({ title: 'Tags', description: 'Things I blog about' });

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const tagCounts: Record<string, number> = {};
  for (const post of allBlogs) {
    if (post.language !== locale || post.draft === true) continue;
    for (const tag of post.tags ?? []) {
      const key = slugify(tag);
      tagCounts[key] = (tagCounts[key] ?? 0) + 1;
    }
  }
  const tagKeys = Object.keys(tagCounts);
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a]);

  return (
    <div>
      <div className="pt-6 pb-8">
        <h1 className="text-3xl font-medium tracking-tight md:text-4xl">Tags</h1>
      </div>
      <div className="flex flex-wrap gap-4">
        {tagKeys.length === 0 && <p className="text-muted-foreground">No tags found.</p>}
        {sortedTags.map((t) => (
          <span key={t} className="text-sm">
            <Tag text={t} />
            <span className="ml-1 text-muted-foreground">({tagCounts[t]})</span>
          </span>
        ))}
      </div>
    </div>
  );
}
