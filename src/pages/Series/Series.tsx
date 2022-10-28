import { Genres, MediaItem } from "../../types/types";
import useFetch from "../../hooks/useFetch";
import { REQUESTS } from "../../requests/requests";
import { Loading } from "../../components";
import { randomNumber } from "../../utils/helpers";
import Hero from "../../components/Hero/Hero";

const Series: React.FC = () => {
  const { data, error, loading } = useFetch<MediaItem>(REQUESTS.trending, 1);
  const { data: tvGenres, loading: tvGenresLoading } = useFetch<Genres>(REQUESTS.tvGenres);

  if (loading || tvGenresLoading) {
    return <Loading />;
  }

  if (error) return <p>Error</p>;

  if (data) {
    const series = data?.filter((el) => el.media_type === "tv");
    const random = randomNumber(1, series?.length);
    const headerMedia = series[random - 1];

    return <Hero media={headerMedia} genres={tvGenres} />;
  }

  return <p>No data found</p>;
};

export default Series;
