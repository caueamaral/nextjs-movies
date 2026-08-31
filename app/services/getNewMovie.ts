import type { Movie } from "@/app/types/movie";

export default async function getNewMovie() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`,
    },
  };

  const response = await fetch(
    "https://api.themoviedb.org/3/discover/movie",
    options,
  );

  const data = await response.json();
  const results: Movie[] = data.results ?? [];
  const movie = results[0];

  return movie;
}
