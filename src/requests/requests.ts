import { Requests } from "../types/types";

export const tmdbUrl = `https://api.themoviedb.org/3/`;

export const REQUESTS: Requests = {
  baseUrl: tmdbUrl,
  trending: `${tmdbUrl}trending/all/day?api_key=${process.env.REACT_APP_IMDB_API_KEY}`,
};
