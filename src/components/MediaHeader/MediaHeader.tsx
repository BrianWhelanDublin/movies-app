import { useParams } from "react-router-dom";
import { IMAGES } from "../../requests/requests";
import { Genres, MovieDetails, TvDetails } from "../../types/types";
import GenresList from "../GenresList/GenresList";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import HeaderWrapper from "../HeaderWrapper/HeaderWrapper";
import MediaInfo from "../MediaInfo/MediaInfo";
import { MediaHeaderContent, MediaHeaderPoster, MediaHeaderText } from "./MediaHeader.styles";

interface MediaHeaderProps {
  media: MovieDetails | TvDetails;
}

const MediaHeader: React.FC<MediaHeaderProps> = ({ media }) => {
  let params = useParams();
  const background = `${IMAGES.baseUrl}${IMAGES.backdropSizes.original}${media?.backdrop_path}`;
  const poster = `${IMAGES.baseUrl}${IMAGES.posterSizes[500]}${media?.poster_path}`;
  const title = (media as MovieDetails)?.title || (media as TvDetails)?.name;

  const mediaGenres = media?.genres as Array<Genres>;

  return (
    <HeaderWrapper background={background}>
      <MediaHeaderContent>
        <MediaHeaderPoster>
          <img src={poster} alt="" />
        </MediaHeaderPoster>
        <MediaHeaderText>
          <HeaderTitle>{title}</HeaderTitle>
          <MediaInfo media={media} />
          <GenresList genres={mediaGenres} mediaType={params.type as string} />
          <p>{media?.overview}</p>
        </MediaHeaderText>
      </MediaHeaderContent>
    </HeaderWrapper>
  );
};

export default MediaHeader;
