declare module 'pliny/mdx-components' {
  import type { ComponentType } from 'react';

  export const MDXLayoutRenderer: ComponentType<{
    code: string;
    components?: any;
    toc?: unknown;
    [key: string]: unknown;
  }>;
}

declare module 'pliny/utils/contentlayer' {
  export function allCoreContent<T>(content: T[]): T[];
  export function coreContent<T>(content: T): T;
  export function sortPosts<T>(posts: T[]): T[];
  export type CoreContent<T> = T;
}

declare module 'pliny/utils/formatDate' {
  export function formatDate(date: string, locale?: string): string;
}

declare module 'pliny/search' {
  import type { ComponentType, ReactNode } from 'react';
  export interface SearchConfig {
    provider: string;
    [key: string]: unknown;
  }
  export const SearchProvider: ComponentType<{
    searchConfig: SearchConfig;
    children: ReactNode;
  }>;
}

declare module 'pliny/search/KBarButton' {
  import type { ComponentType, ReactNode } from 'react';
  export const KBarButton: ComponentType<{
    children: ReactNode;
    [key: string]: unknown;
  }>;
}

declare module 'pliny/search/AlgoliaButton' {
  import type { ComponentType, ReactNode } from 'react';
  export const AlgoliaButton: ComponentType<{
    children: ReactNode;
    [key: string]: unknown;
  }>;
}

declare module 'pliny/ui/Pre' {
  import type { ComponentType } from 'react';
  const Pre: ComponentType<Record<string, unknown>>;
  export default Pre;
}

declare module 'pliny/ui/TOCInline' {
  import type { ComponentType } from 'react';
  const TOCInline: ComponentType<Record<string, unknown>>;
  export default TOCInline;
}

declare module 'pliny/ui/BlogNewsletterForm' {
  import type { ComponentType } from 'react';
  const BlogNewsletterForm: ComponentType<Record<string, unknown>>;
  export default BlogNewsletterForm;
}

declare module 'pliny/ui/Bleed' {
  import type { ComponentType, ReactNode } from 'react';
  const Bleed: ComponentType<{ children: ReactNode; [key: string]: unknown }>;
  export default Bleed;
}

declare module 'pliny/ui/NewsletterForm' {
  import type { ComponentType } from 'react';
  const NewsletterForm: ComponentType<Record<string, unknown>>;
  export default NewsletterForm;
}

declare module 'pliny/comments' {
  import type { ComponentType } from 'react';
  export const Comments: ComponentType<Record<string, unknown>>;
}

declare module 'pliny/config' {
  export interface PlinyConfig {
    [key: string]: unknown;
  }
}
