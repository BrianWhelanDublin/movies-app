import { GenreRequest, Genres, MediaRequest } from "../../types/types";
import useFetch from "../../hooks/useFetch";
import { REQUESTS } from "../../requests/requests";
import { Loading, Row } from "../../components";
import { randomNumber } from "../../utils/helpers";
import Hero from "../../components/Hero/Hero";

const Home: React.FC = () => {
  const { data, error, loading } = useFetch<MediaRequest>(REQUESTS.trending, 1);
  const { data: tvGenres, loading: tvGenresLoading } = useFetch<GenreRequest>(REQUESTS.tvGenres);
  const { data: movieGenres, loading: movieGenresLoading } = useFetch<GenreRequest>(REQUESTS.movieGenres);

  if (loading || tvGenresLoading || movieGenresLoading) {
    return <Loading />;
  }

  if (error) return <p>Error</p>;

  if (data !== undefined) {
    const random = randomNumber(1, data.results.length);
    const headerMedia = data.results[random];

    let genres: Array<Genres> | undefined = [];

    if (headerMedia?.media_type === "tv") {
      genres = tvGenres?.genres;
    } else {
      genres = movieGenres?.genres;
    }

    return (
      <>
        <Hero media={headerMedia} genres={genres as Genres[]} />
        <Row request={REQUESTS.trending} title="Trending" />
        <Row request={REQUESTS.upcommingMovies} title="Upcomming Movies" />
        <Row request={REQUESTS.moviesNowPlaying} title="Movies in Cinema Now" />
        <Row request={REQUESTS.topRatedTv} title="Top Rated Tv" />
        <Row request={REQUESTS.tvNowOnAir} title="Series on Tv Now" />
      </>
    );
  }

  return <p>No data found</p>;
};

export default Home;
