import { Images, Requests } from "../types/types";

export const tmdbUrl = `https://api.themoviedb.org/3/`;

export const REQUESTS: Requests = {
  baseUrl: tmdbUrl,
  trending: `${tmdbUrl}trending/all/day?api_key=${process.env.REACT_APP_IMDB_API_KEY}`,
  movieGenres: `${tmdbUrl}genre/movie/list?api_key=${process.env.REACT_APP_IMDB_API_KEY}`,
  tvGenres: `${tmdbUrl}genre/tv/list?api_key=${process.env.REACT_APP_IMDB_API_KEY}`,
  upcommingMovies: `${tmdbUrl}movie/upcoming?api_key=${process.env.REACT_APP_IMDB_API_KEY}`,
  topRatedTv: `${tmdbUrl}tv/top_rated?api_key=${process.env.REACT_APP_IMDB_API_KEY}`,
  moviesNowPlaying: `${tmdbUrl}movie/now_playing?api_key=${process.env.REACT_APP_IMDB_API_KEY}`,
  tvNowOnAir: `${tmdbUrl}tv/on_the_air?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-gb`,
};

export const IMAGES: Images = {
  baseUrl: "https://image.tmdb.org/t/p/",

  backdropSizes: {
    300: "w300",
    780: "w780",
    1280: "w1280",
    original: "original",
  },
  logoSizes: {
    45: "w45",
    92: "w92",
    154: "w154",
    185: "w185",
    300: "w300",
    500: "w500",
    original: "original",
  },
  posterSizes: {
    92: "w92",
    154: "w154",
    185: "w185",
    342: "w342",
    500: "w500",
    780: "w780",
    original: "original",
  },
  profileSizes: {
    45: "w45",
    185: "w185",
    632: "w632",
    original: "original",
  },
};
