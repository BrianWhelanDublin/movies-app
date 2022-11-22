import { MediaItem, MovieDetails, TvDetails } from "../../types/types";
import { ImStarFull } from "react-icons/im";
import { MediaInfoList, MediaInfoListItem } from "./MediaInfo.styles";
import { useParams } from "react-router-dom";

interface MediaInfoProps {
  media: MediaItem | MovieDetails | TvDetails;
}

const MediaInfo: React.FC<MediaInfoProps> = ({ media }) => {
  let params = useParams();
  const date = (media as MediaItem | MovieDetails)?.release_date || (media as MediaItem | TvDetails)?.first_air_date;
  return (
    <MediaInfoList>
      <MediaInfoListItem>{date?.split("-")[0]}</MediaInfoListItem>
      <MediaInfoListItem>{params?.type ?? (media as MediaItem).media_type === "tv" ? "Series" : "Movie"}</MediaInfoListItem>
      <MediaInfoListItem>
        <ImStarFull /> {media?.vote_average ? `${Math.ceil(media?.vote_average * 10)}%` : ""}
      </MediaInfoListItem>
    </MediaInfoList>
  );
};

export default MediaInfo;
