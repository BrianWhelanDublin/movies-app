import "styled-components";

export type Maybe<T> = T | null;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/**
 * Default theme types for styled components
 */

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: Scalars["String"];
      white: Scalars["String"];
      background: Scalars["String"];
      grey1: Scalars["String"];
      grey2: Scalars["String"];
      grey3: Scalars["String"];
      grey4: Scalars["String"];
      brand1: Scalars["String"];
    };
    font: Scalars["String"];
    fontWeights: {
      light: Scalars["Int"];
      medium: Scalars["Int"];
      regular: Scalars["Int"];
      bold: Scalars["Int"];
      extra: Scalars["Int"];
    };
    fontSizes: {
      h1Mobile: Scalars["Int"];
      h1Desktop: Scalars["Int"];
      h2Mobile: Scalars["Int"];
      h2Desktop: Scalars["Int"];
      h3Mobile: Scalars["Int"];
      h3Desktop: Scalars["Int"];
      h4Mobile: Scalars["Int"];
      h4Desktop: Scalars["Int"];
      bodyFontSize: Scalars["Int"];
      bodyFontSizeSmall: Scalars["Int"];
    };
    gradient: Scalars["String"];
  }
}

/**
 * Default styled component Props
 */

export interface DefaultStyleProps {
  theme: DefaultTheme;
}

/**
 * Requests to the Tmdb Api and images types
 */

export interface Requests {
  baseUrl: Scalars["String"];
  trending: Scalars["String"];
  movieGenres: Scalars["String"];
  tvGenres: Scalars["String"];
  upcommingMovies: Scalars["String"];
  topRatedTv: Scalars["String"];
  moviesNowPlaying: Scalars["String"];
  tvNowOnAir: Scalars["String"];
  popularMovies: Scalars["String"];
  topRatedMovies: Scalars["String"];
  popularTv: Scalars["String"];
  trendingTv: Scalars["String"];
  moviesByGenre: Scalars["String"];
  tvByGenre: Scalars["String"];
}

export interface Images {
  baseUrl: Scalars["String"];

  backdropSizes: {
    300: Scalars["String"];
    780: Scalars["String"];
    1280: Scalars["String"];
    original: Scalars["String"];
  };
  logoSizes: {
    45: Scalars["String"];
    92: Scalars["String"];
    154: Scalars["String"];
    185: Scalars["String"];
    300: Scalars["String"];
    500: Scalars["String"];
    original: Scalars["String"];
  };
  posterSizes: {
    92: Scalars["String"];
    154: Scalars["String"];
    185: Scalars["String"];
    342: Scalars["String"];
    500: Scalars["String"];
    780: Scalars["String"];
    original: Scalars["String"];
  };
  profileSizes: {
    45: Scalars["String"];
    185: Scalars["String"];
    632: Scalars["String"];
    original: Scalars["String"];
  };
}

/**
 * Media item type for Movie and Tv Series
 */

export interface MediaRequest {
  page: Scalars["Int"];
  results: Array<MediaItem>;
  total_pages: Scalars["Int"];
  total_results: Scalars["Int"];
}

export interface MediaItem {
  adult?: Maybe<Scalars["Boolean"]>;
  backdrop_path?: Maybe<Scalars["String"]>;
  first_air_date?: Maybe<Scalars["String"]>;
  genre_ids?: Maybe<Array<Scalars["Int"]>>;
  id?: Maybe<Scalars["Int"]>;
  media_type?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  origin_country?: Maybe<Array<Scalars["String"]>>;
  original_language?: Maybe<Scalars["String"]>;
  original_name?: Maybe<Scalars["String"]>;
  overview?: Maybe<Scalars["String"]>;
  popularity?: Maybe<Array<Scalars["Int"]>>;
  poster_path?: Maybe<Scalars["String"]>;
  vote_average?: Scalars["Int"];
  vote_count?: Maybe<Array<Scalars["Int"]>>;
  original_title?: Maybe<Scalars["String"]>;
  release_date?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  video?: Maybe<Scalars["Boolean"]>;
}

export interface MediaDetails {
  adult?: Maybe<Scalars["Boolean"]>;
  backdrop_path?: Maybe<Scalars["String"]>;
  genres?: Maybe<Array<Genres>>;
  homepage?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  original_language?: Maybe<Scalars["String"]>;
  overview?: Maybe<Scalars["String"]>;
  popularity?: Maybe<Scalars["Int"]>;
  poster_path?: Maybe<Scalars["String"]>;
  production_companies?: Maybe<Array<Company>>;
  production_countries?: Maybe<Array<Country>>;
  vote_average: Maybe<Scalars["Int"]>;
  vote_count: Maybe<Scalars["Int"]>;
  spoken_languages?: Maybe<Array<Language>>;
  status: Maybe<Scalars["String"]>;
  tagline: Maybe<Scalars["String"]>;
}

export interface MovieDetails extends MediaDetails {
  belongs_to_collection: Maybe<Collection>;
  budget?: Maybe<Scalars["Int"]>;
  imdb_id?: Maybe<Scalars["String"]>;
  original_title?: Maybe<Scalars["String"]>;
  release_date?: Maybe<Scalars["String"]>;
  revenue?: Maybe<Scalars["Int"]>;
  runtime?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["String"]>;
  video?: Maybe<Scalars["Boolean"]>;
}

export interface TvDetails extends MediaDetails {
  created_by?: Maybe<Array<Person>>;
  episode_run_time?: Maybe<Array<number>>;
  first_air_date?: Maybe<Scalars["String"]>;
  in_production?: Maybe<Scalars["Boolean"]>;
  languages?: Maybe<Array<Scalars["String"]>>;
  last_air_date?: Maybe<Episode>;
  name?: Maybe<Array<Scalars["String"]>>;
  networks?: Maybe<Array<Network>>;
  next_episode_to_air?: Maybe<Episode>;
  number_of_episodes?: Maybe<Scalars["Int"]>;
  number_of_seasons?: Maybe<Scalars["Int"]>;
  origin_country?: Maybe<Array<Scalars["String"]>>;
  original_name?: Maybe<Scalars["String"]>;
  seasons?: Maybe<Array<Season>>;
  type: Maybe<Scalars["String"]>;
}

export interface Genres {
  id: Scalars["Int"];
  name: Scalars["String"];
}

export interface GenreRequest {
  genres: Array<Genres>;
}
