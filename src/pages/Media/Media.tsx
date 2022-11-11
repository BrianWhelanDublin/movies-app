import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { REQUESTS } from "../../requests/requests";
import { MovieDetails, TvDetails } from "../../types/types";

const Media: React.FC = () => {
  let params = useParams();
  let request = `${REQUESTS.baseUrl}${params.type}/${params.id}?api_key=${process.env.REACT_APP_IMDB_API_KEY}`;
  const { data, error, loading } = useFetch<MovieDetails | TvDetails>(request);

  console.log(data);
  return <div>Media</div>;
};

export default Media;
