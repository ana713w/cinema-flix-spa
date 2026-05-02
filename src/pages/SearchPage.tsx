import { useSearchParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { searchMovies } from '../services/tmdb'
import MovieCard from '../components/MovieCard'
import Spinner from '../components/Spinner'

function SearchPage() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('query') ?? ''

  const { data, loading, error } = useFetch(
    () => query ? searchMovies(query) : Promise.resolve({ results: [], total_pages: 0, page: 1 }),
    [query],
  )

  if (!query) {
    return (
      <main className="page">
        <p className="empty-msg">Ingresa un término en el buscador para encontrar películas.</p>
      </main>
    )
  }

  if (loading) return <Spinner />

  if (error) {
    return (
      <div className="error-msg">
        <h2>No se pudo buscar</h2>
        <p>{error}</p>
      </div>
    )
  }

  const results = data?.results ?? []

  return (
    <main className="page">
      <h1 className="page__title">
        {results.length > 0
          ? `Resultados para "${query}"`
          : `Sin resultados para "${query}"`}
      </h1>
      {results.length === 0 ? (
        <p className="empty-msg">Intenta con otro título o término diferente.</p>
      ) : (
        <div className="movie-grid">
          {results.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </main>
  )
}

export default SearchPage
