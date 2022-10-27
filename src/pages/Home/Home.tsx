import { MediaItem } from "../../types/types";
import useFetch from "../../hooks/useFetch";
import { REQUESTS } from "../../requests/requests";

const Home: React.FC = () => {
  const { data, error, loading } = useFetch<MediaItem>(REQUESTS.trending, 1);

  if (loading) return <p>Loading....</p>;

  if (error) return <p>Error</p>;

  if (data !== undefined) {
    return <div>Home</div>;
  }

  return <p>No data found</p>;
};

export default Home;
