import { GenreRequest, MediaRequest } from "../../types/types";
import useFetch from "../../hooks/useFetch";
import { REQUESTS } from "../../requests/requests";
import { GenresRow, Loading, Row, Hero } from "../../components";
import { randomNumber } from "../../utils/helpers";

const Series: React.FC = () => {
  const { data, error, loading } = useFetch<MediaRequest>(REQUESTS.trending, 1);
  const { data: tvGenres, loading: tvGenresLoading } = useFetch<GenreRequest>(REQUESTS.tvGenres);

  if (loading || tvGenresLoading) {
    return <Loading />;
  }

  if (error) return <p>Error</p>;

  if (data) {
    const series = data?.results.filter((el) => el.media_type === "tv");
    const random = randomNumber(1, series.length);
    const headerMedia = series[random - 1];

    return (
      <>
        <Hero media={headerMedia} genres={tvGenres?.genres} />
        <GenresRow mediaType="series" />
        <Row request={REQUESTS.tvNowOnAir} title="Tv on Air Now" />
        <Row request={REQUESTS.topRatedTv} title="Top Rated Tv" />
        <Row request={REQUESTS.popularTv} title="Popular Tv" />
        <Row request={REQUESTS.trendingTv} title="Trending Tv" />
      </>
    );
  }

  return <p>No data found</p>;
};

export default Series;
