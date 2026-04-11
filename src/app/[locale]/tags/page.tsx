import { genPageMetadata } from '@/app/seo';
import tagData from '@/app/tag-data.json';
import Tag from '@/components/Tag';

export const metadata = genPageMetadata({ title: 'Tags', description: 'Things I blog about' });

export default async function Page() {
  const tagCounts = tagData as Record<string, number>;
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
