import { MediaItem } from "../../types/types";
import { ImStarFull } from "react-icons/im";
import { MediaInfoList, MediaInfoListItem } from "./MediaInfo.styles";

interface MediaInfoProps {
  media: MediaItem;
}

const MediaInfo: React.FC<MediaInfoProps> = ({ media }) => {
  const date = media?.release_date || media?.first_air_date;
  return (
    <MediaInfoList>
      <MediaInfoListItem>{date?.split("-")[0]}</MediaInfoListItem>
      <MediaInfoListItem>{media?.media_type === "tv" ? "Series" : "Movie"}</MediaInfoListItem>
      <MediaInfoListItem>
        <ImStarFull /> {media?.vote_average ? `${Math.ceil(media?.vote_average * 10)}%` : ""}
      </MediaInfoListItem>
    </MediaInfoList>
  );
};

export default MediaInfo;
