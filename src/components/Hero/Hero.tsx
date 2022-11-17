import { IMAGES } from "../../requests/requests";
import { Genres, MediaItem } from "../../types/types";
import Button from "../Button/Button";
import GenresList from "../GenresList/GenresList";
import HeaderWrapper from "../HeaderWrapper/HeaderWrapper";
import MediaInfo from "../MediaInfo/MediaInfo";
import { HeroContent, HeroSubtitle, HeroTitle } from "./Hero.styles";

interface HeroProps {
  media: MediaItem;
  genres?: Array<Genres>;
}

const Hero: React.FC<HeroProps> = ({ media, genres }) => {
  const background = `${IMAGES.baseUrl}${IMAGES.backdropSizes.original}${media?.backdrop_path}`;
  const title = media?.title || media?.name;

  let mediaGenres: Array<Genres>;

  if (genres) {
    mediaGenres = genres?.filter((el) => media?.genre_ids?.includes(el.id));
  } else {
    mediaGenres = [];
  }

  return (
    <HeaderWrapper background={background}>
      <HeroContent>
        <HeroSubtitle>Spotlight</HeroSubtitle>
        <HeroTitle>{title}</HeroTitle>
        <MediaInfo media={media} />
        {mediaGenres.length && <GenresList genres={mediaGenres} mediaType={media?.media_type as string} />}
        <Button href={`${media?.media_type === "tv" ? "tv" : "movie"}/${media?.id}`}>Find Out More</Button>
      </HeroContent>
    </HeaderWrapper>
  );
};

export default Hero;
