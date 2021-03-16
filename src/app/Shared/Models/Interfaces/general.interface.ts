export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: MovieCategory[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  favorite: boolean;
  watchList: boolean;
}

export interface MovieCategory {
  id: number;
  name: string;
}
