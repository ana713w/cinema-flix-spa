import type { Movie, MovieDetail, MoviesResponse } from '../types'

const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL as string
const API_KEY = import.meta.env.VITE_TMDB_API_KEY as string

export const IMAGE_BASE_URL = import.meta.env.VITE_TMDB_IMAGE_BASE_URL as string

async function request<T>(endpoint: string, params: Record<string, string> = {}): Promise<T> {
  const url = new URL(`${BASE_URL}${endpoint}`)
  url.searchParams.set('api_key', API_KEY)
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value)
  }
  const res = await fetch(url.toString())
  if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`)
  return res.json() as Promise<T>
}

export function getPopularMovies(page = 1): Promise<MoviesResponse> {
  return request('/movie/popular', { page: String(page) })
}

export function getMovieDetail(id: number): Promise<MovieDetail> {
  return request(`/movie/${id}`)
}

export function searchMovies(query: string, page = 1): Promise<MoviesResponse> {
  return request('/search/movie', { query, page: String(page) })
}

export function getPosterUrl(path: string | null): string {
  return path ? `${IMAGE_BASE_URL}${path}` : ''
}

export function getBackdropUrl(path: string | null): string | null {
  return path ? `https://image.tmdb.org/t/p/original${path}` : null
}

export function formatRuntime(minutes: number | null): string | null {
  if (!minutes) return null
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return m > 0 ? `${h}h ${m}m` : `${h}h`
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return 'Fecha desconocida'
  return new Date(dateStr).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function formatVote(vote: number): string {
  return vote.toFixed(1)
}

export type { Movie, MovieDetail }
