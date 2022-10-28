import { Genres, MediaItem } from "../../types/types";
import useFetch from "../../hooks/useFetch";
import { REQUESTS } from "../../requests/requests";
import { Loading, Row } from "../../components";
import { randomNumber } from "../../utils/helpers";
import Hero from "../../components/Hero/Hero";

const Home: React.FC = () => {
  const { data, error, loading } = useFetch<MediaItem>(REQUESTS.trending, 1);
  const { data: tvGenres, loading: tvGenresLoading } = useFetch<Genres>(REQUESTS.tvGenres);
  const { data: movieGenres, loading: movieGenresLoading } = useFetch<Genres>(REQUESTS.movieGenres);

  if (loading || tvGenresLoading || movieGenresLoading) {
    return <Loading />;
  }

  if (error) return <p>Error</p>;

  if (data !== undefined) {
    const random = randomNumber(1, 20);
    const headerMedia = data[random];

    let genres: Array<Genres> | undefined = [];

    if (headerMedia?.media_type === "tv") {
      genres = tvGenres;
    } else {
      genres = movieGenres;
    }

    return (
      <>
        <Hero media={headerMedia} genres={genres} />
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
