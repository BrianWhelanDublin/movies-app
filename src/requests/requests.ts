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
  popularMovies: `${tmdbUrl}movie/popular?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US`,
  topRatedMovies: `${tmdbUrl}movie/top_rated?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US`,
  popularTv: `${tmdbUrl}tv/popular?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US`,
  trendingTv: `${tmdbUrl}trending/tv/week?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US`,
  moviesByGenre: `${tmdbUrl}discover/movie?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=`,
  tvByGenre: `${tmdbUrl}discover/tv?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=`,
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
