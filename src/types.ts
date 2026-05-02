export interface Movie {
  id: number
  title: string
  original_title: string
  poster_path: string | null
  backdrop_path: string | null
  overview: string
  vote_average: number
  vote_count: number
  release_date: string
}

export interface MovieDetail extends Movie {
  runtime: number | null
  genres: { id: number; name: string }[]
}

export interface MoviesResponse {
  results: Movie[]
  total_pages: number
  page: number
}
