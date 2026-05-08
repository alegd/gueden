declare module '@/data/siteMetadata' {
  interface SiteMetadata {
    title: string;
    author: string;
    headerTitle: string;
    description: string;
    descriptionEs: string;
    language: string;
    theme: string;
    siteUrl: string;
    siteRepo: string;
    siteLogo: string;
    socialBanner: string;
    email: string;
    social: Array<{
      name:
        | 'github'
        | 'linkedin'
        | 'twitter'
        | 'x'
        | 'mail'
        | 'facebook'
        | 'youtube'
        | 'medium'
        | 'mastodon'
        | 'threads'
        | 'instagram';
      link: string;
    }>;
    locale: string;
    stickyNav: boolean;
    analytics: {
      umamiAnalytics?: { umamiWebsiteId?: string };
      googleAnalytics?: { googleAnalyticsId: string };
    };
    newsletter: {
      provider: string;
    };
    comments: {
      provider: string;
      giscusConfig: {
        repo: string;
        repositoryId: string;
        category: string;
        categoryId: string;
        mapping: string;
        reactions: string;
        metadata: string;
        theme: string;
        darkTheme: string;
        themeURL: string;
        lang: string;
      };
    };
    search: {
      provider: string;
      kbarConfig?: {
        searchDocumentsPath: string;
      };
    };
  }

  const siteMetadata: SiteMetadata;
  export default siteMetadata;
}
