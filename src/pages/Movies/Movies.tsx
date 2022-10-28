import { Genres, MediaItem } from "../../types/types";
import useFetch from "../../hooks/useFetch";
import { REQUESTS } from "../../requests/requests";
import { GenresRow, Loading, Row } from "../../components";
import { randomNumber } from "../../utils/helpers";
import Hero from "../../components/Hero/Hero";

const Movies: React.FC = () => {
  const { data, error, loading } = useFetch<MediaItem>(REQUESTS.trending, 1);
  const { data: movieGenres, loading: movieGenresLoading } = useFetch<Genres>(REQUESTS.movieGenres);

  if (loading || movieGenresLoading) {
    return <Loading />;
  }

  if (error) return <p>Error</p>;

  if (data) {
    const movies = data?.filter((el) => el.media_type === "movie");
    const random = randomNumber(1, movies?.length);
    const headerMedia = movies[random - 1];

    return (
      <>
        <Hero media={headerMedia} genres={movieGenres} />
        <GenresRow mediaType="movie" />
        <Row request={REQUESTS.moviesNowPlaying} title="Movies in Cinemas Now" />
        <Row request={REQUESTS.topRatedMovies} title="Top Rated Movies" />
        <Row request={REQUESTS.popularMovies} title="Popular Movies" />
        <Row request={REQUESTS.upcommingMovies} title="Upcomming Movies" />
      </>
    );
  }

  return <p>No data found</p>;
};

export default Movies;
