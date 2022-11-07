import { useState } from "react";
import { useParams } from "react-router-dom";
import { Genres as GenresType } from "../../types/types";
import { GenreLink, GenrePageList, StyledGenresSelect } from "./GenreSelect.styles";

interface GenresSelectProps {
  genres: GenresType[];
  currentGenre: GenresType;
  handleChange: (e: React.FormEvent<HTMLSelectElement>) => void;
  handleClick: (id: string) => void;
}

const GenresSelect: React.FC<GenresSelectProps> = ({ genres, currentGenre, handleChange, handleClick }) => {
  return (
    <>
      <StyledGenresSelect defaultValue={"DEFAULT"} onChange={handleChange}>
        {genres?.map((genre) => (
          <option key={genre?.id} value={genre?.id === currentGenre?.id ? "DEFAULT" : genre?.id}>
            {genre.name}
          </option>
        ))}
      </StyledGenresSelect>

      <GenrePageList>
        {genres?.map((genre) => {
          if (genre?.id !== currentGenre?.id) {
            return (
              <GenreLink key={genre?.id} onClick={() => handleClick(`${genre.id}`)}>
                {genre.name}
              </GenreLink>
            );
          }
        })}
      </GenrePageList>
    </>
  );
};

export default GenresSelect;
