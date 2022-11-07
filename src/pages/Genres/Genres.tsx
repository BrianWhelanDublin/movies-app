import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { REQUESTS } from "../../requests/requests";
import { Genres as GenresType, MediaItem } from "../../types/types";
import { useNavigate } from "react-router-dom";
import TextHeader from "../../components/TextHeader/TextHeader";

const Genres: React.FC = () => {
  const params = useParams();
  const [page, setPage] = useState<number>(1);
  const [genre, setGenre] = useState<string | undefined>(params?.genre);

  const request = `${params?.type === "movie" ? REQUESTS.moviesByGenre : REQUESTS.tvByGenre}${genre}`;
  const genreRequest = params.type === "movie" ? REQUESTS.movieGenres : REQUESTS.tvGenres;

  const { data, error, loading, hasMore } = useFetch<MediaItem>(request, page);
  const { data: genresList } = useFetch<GenresType>(genreRequest);

  const currentGenre = genresList?.filter((el) => `${el?.id}` === (genre as string))[0];

  const navigate = useNavigate();
  const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    navigate(`../genres/${params.type}/${e.currentTarget.value}`, { replace: true });
    setGenre(e.currentTarget.value);
    setPage(1);
  };

  const handleClick = (id: string) => {
    window.scrollTo(0, 0);
    navigate(`../genres/${params.type}/${id}`, { replace: true });
    setGenre(id);
    setPage(1);
  };

  if (error) {
    return <p>Something has gone wrong.... </p>;
  }

  return (
    <>
      <TextHeader title={`Results for ${currentGenre?.name}`} />
    </>
  );
};

export default Genres;
