import React from "react";
import { Genres } from "../../types/types";
import { StyledGenresItem, StyledGenresList } from "./GenresList.styles";

interface GenresListProps {
  genres: Array<Genres>;
  mediaType: string;
}

const GenresList: React.FC<GenresListProps> = ({ genres, mediaType }) => {
  return (
    <StyledGenresList>
      {genres.map((genre) => (
        <StyledGenresItem key={genre.id}>
          <a href={`/genres/${mediaType === "movie" ? "movie" : "tv"}/${genre.id}`}>{genre.name ?? ""}</a>
        </StyledGenresItem>
      ))}
    </StyledGenresList>
  );
};

export default GenresList;
