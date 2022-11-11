import React from "react";
import useFetch from "../../hooks/useFetch";
import { REQUESTS } from "../../requests/requests";
import { GenreRequest, Genres } from "../../types/types";
import { GenreCard, StyledGenresRow } from "./GenresRow.styles";
import Loading from "../Loading/Loading";
import Slider from "../Slider/Slider";

interface GenresRowProps {
  mediaType: "movie" | "series";
}

const GenresRow: React.FC<GenresRowProps> = ({ mediaType }) => {
  const request = mediaType === "movie" ? REQUESTS.movieGenres : REQUESTS.tvGenres;
  const { data, error, loading } = useFetch<GenreRequest>(request);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Something has gone wrong.... </p>;
  }

  return (
    <StyledGenresRow>
      {data && (
        <Slider>
          {data.genres.map((genre) => (
            <GenreCard href={`/genres/${mediaType === "movie" ? "movie" : "tv"}/${genre.id}`} key={genre.id}>
              {genre.name}
            </GenreCard>
          ))}
        </Slider>
      )}
    </StyledGenresRow>
  );
};

export default GenresRow;
