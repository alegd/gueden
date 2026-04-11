export const parseUrl = (url: string) => {
  // Remove locale from route (e.g. /en/nested/route -> /nested/route)
  const pathname = url.replace(/^\/[a-z]{2}\//, '/');

  if (!pathname) return '/';

  return pathname;
};
