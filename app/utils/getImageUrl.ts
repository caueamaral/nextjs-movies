export default function getImageUrl(
  path: string | null,
  size: string = "original",
): string | null {
  if (!path) return null;
  return `https://image.tmdb.org/t/p/${size}${path}`;
}
