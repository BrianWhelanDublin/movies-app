import useFetch from "../../hooks/useFetch";

import { MediaItem, MediaRequest } from "../../types/types";
import Loading from "../Loading/Loading";
import MediaCard from "../MediaCard/MediaCard";
import Slider from "../Slider/Slider";
import { RowTitle, StyledRow } from "./Row.styles";

interface RowProps {
  request: string;
  title: string;
}

const Row: React.FC<RowProps> = ({ request, title }) => {
  const { data, error, loading } = useFetch<MediaRequest>(request);

  const mediaType = request.includes("tv") ? "tv" : "movie";

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error loading items</p>;
  }
  return (
    <StyledRow>
      <RowTitle>{title}</RowTitle>

      {data && (
        <Slider>
          {data.results.map((el) => (
            <MediaCard media={el} key={el.id} href={`/${el.media_type ?? mediaType}/${el.id}`} />
          ))}
        </Slider>
      )}
    </StyledRow>
  );
};

export default Row;
