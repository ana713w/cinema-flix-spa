import useFetch from '../hooks/useFetch'
import { getPopularMovies } from '../services/tmdb'
import MovieCard from '../components/MovieCard'
import Spinner from '../components/Spinner'

function HomePage() {
  const { data, loading, error } = useFetch(() => getPopularMovies(), [])

  if (loading) return <Spinner />

  if (error) {
    return (
      <div className="error-msg">
        <h2>No se pudo cargar</h2>
        <p>{error}</p>
      </div>
    )
  }

  return (
    <main className="page">
      <h1 className="page__title">Películas Populares</h1>
      <div className="movie-grid">
        {data?.results.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  )
}

export default HomePage
