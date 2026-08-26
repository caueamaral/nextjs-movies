export default function getImageUrl(
  path: string,
  size: string = "original",
): string {
  const base_url = "https://image.tmdb.org/t/p/";

  return base_url + size + path;
}
