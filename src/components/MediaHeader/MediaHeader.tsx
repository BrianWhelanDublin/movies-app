import { IMAGES } from "../../requests/requests";
import { MovieDetails, TvDetails } from "../../types/types";
import HeaderWrapper from "../HeaderWrapper/HeaderWrapper";

interface MediaHeaderProps {
  media: MovieDetails | TvDetails;
}

const MediaHeader: React.FC<MediaHeaderProps> = ({ media }) => {
  const background = `${IMAGES.baseUrl}${IMAGES.backdropSizes.original}${media?.backdrop_path}`;
  const poster = `${IMAGES.baseUrl}${IMAGES.posterSizes[500]}${media?.poster_path}`;
  return <HeaderWrapper background={background}>movie</HeaderWrapper>;
};

export default MediaHeader;
