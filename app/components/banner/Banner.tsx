import styled from "styled-components";
import Image from "next/image";
import { bebas_neue } from "@/app/fonts/googleFonts";
import type { Movie } from "@/app/types/movie";

const Container = styled.section`
  aspect-ratio: 1440 / 574;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  width: 100%;

  &::after {
    background: url(/images/banner-overlay.png) no-repeat;
    content: "";
    inset: 0;
    position: absolute;
  }

  @media (max-width: 1099px) {
    align-items: center;
    height: 320px;

    &::after {
      background-position: left -150px bottom 0;
    }
  }

  @media (min-width: 1100px) {
    height: 573px;
    margin-top: calc((var(--headerHeight) + var(--headerMargin)) * -1);

    &::after {
      background-position: left bottom;
    }
  }
`;

const BannerImage = styled(Image)`
  height: 100%;
  inset: 0;
  margin: auto;
  object-fit: cover;
  object-position: top;
  position: absolute;
  width: 100%;
`;

const Limit = styled.div`
  display: flex;
  justify-content: space-between;
  margin-inline: var(--lateralMargin);
  max-width: 1280px;
  position: relative;
  width: 100%;
  z-index: 1;

  @media (min-width: 1100px) {
    margin-top: calc(var(--headerHeight) + 100px);
  }
`;

const Info = styled.div`
  @media (min-width: 1100px) {
    max-width: 700px;
  }
`;

const Title = styled.h1`
  line-height: 0.9em;
  text-transform: uppercase;

  @media (max-width: 1099px) {
    font-size: 35px;
  }

  @media (min-width: 1100px) {
    font-size: 72px;
  }
`;

const Text = styled.p`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  display: -webkit-box;
  line-clamp: 6;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 1099px) {
    font-size: 14px;
    margin-top: 15px;
  }

  @media (min-width: 1100px) {
    font-size: 18px;
    margin-top: 25px;
  }
`;

const Button = styled.button`
  background: var(--purple);
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;

  @media (max-width: 1099px) {
    margin-top: 20px;
    padding: 12px 70px;
  }

  @media (min-width: 1100px) {
    margin-top: 60px;
    padding: 15px 85px;
  }
`;

const Box = styled.div`
  @media (max-width: 1099px) {
    display: none;
  }

  @media (min-width: 1100px) {
    border: 2px solid var(--white);
    box-shadow: 0 30px 20px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    flex-shrink: 0;
    height: 266px;
    overflow: hidden;
    position: relative;
    width: 266px;
  }
`;

const BoxImage = styled(Image)`
  @media (min-width: 1100px) {
    position: relative;
  }
`;

const BoxPlay = styled.button`
  @media (min-width: 1100px) {
    background: url(/images/banner-box-play.png);
    cursor: pointer;
    height: 64px;
    left: 50%;
    position: absolute;
    top: 50%;
    transition: transform 300ms;
    translate: -50% -50%;
    width: 64px;

    &:hover {
      transform: scale(1.3);
    }
  }
`;

const BoxScore = styled.div`
  align-items: center;
  background: url(/images/banner-box-score.png);
  bottom: 10px;
  display: flex;
  font-size: 19px;
  font-weight: 600;
  height: 64px;
  justify-content: center;
  left: 10px;
  position: absolute;
  width: 64px;
`;

export default async function Banner() {
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

  function truncateToOneDecimal(value: number): number {
    return Math.trunc(value * 10) / 10;
  }

  function getImageFullUrl(
    url: string,
    file_size: string = "original",
  ): string {
    const base_url = "https://image.tmdb.org/t/p/";

    return base_url + file_size + url;
  }

  const data = await response.json();
  const results: Movie[] = data.results;
  const movie = results[0];

  if (!movie) {
    return;
  }

  return (
    <Container>
      <BannerImage
        src={getImageFullUrl(movie.backdrop_path)}
        alt="Banner"
        width={1440}
        height={572}
      />
      <Limit>
        <Info>
          <Title className={bebas_neue.className}>{movie.title}</Title>
          <Text>{movie.overview}</Text>
          <Button type="button" aria-label="Watch Furiosa: A Mad Max Saga">
            Watch
          </Button>
        </Info>
        <Box>
          <BoxImage
            src={getImageFullUrl(movie.poster_path, "w300")}
            alt="Box"
            width={267}
            height={267}
          />
          <BoxPlay aria-label="Play Furiosa: A Mad Max Saga trailer" />
          <BoxScore>{truncateToOneDecimal(movie.vote_average)}</BoxScore>
        </Box>
      </Limit>
    </Container>
  );
}
