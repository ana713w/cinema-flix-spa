import { useParams, Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { getMovieDetail, getPosterUrl, getBackdropUrl, formatRuntime, formatDate, formatVote } from '../services/tmdb'
import Spinner from '../components/Spinner'

function MovieDetailPage() {
  const { id } = useParams<{ id: string }>()
  const movieId = Number(id)

  const { data: movie, loading, error } = useFetch(
    () => getMovieDetail(movieId),
    [movieId],
  )

  if (loading) return <Spinner />

  if (error || !movie) {
    return (
      <div className="error-msg">
        <h2>No se pudo cargar la película</h2>
        <p>{error ?? 'Película no encontrada'}</p>
        <Link to="/" className="detail__back" style={{ marginTop: '1rem', display: 'inline-flex' }}>
          ← Volver al inicio
        </Link>
      </div>
    )
  }

  const backdropUrl = getBackdropUrl(movie.backdrop_path)
  const posterUrl = getPosterUrl(movie.poster_path)
  const runtime = formatRuntime(movie.runtime)
  const year = movie.release_date ? movie.release_date.slice(0, 4) : '—'

  return (
    <article className="detail">
      {backdropUrl ? (
        <img className="detail__backdrop" src={backdropUrl} alt="" aria-hidden="true" />
      ) : (
        <div className="detail__backdrop-placeholder" />
      )}

      <div className="detail__content">
        <div>
          {posterUrl ? (
            <img className="detail__poster" src={posterUrl} alt={`Póster de ${movie.title}`} />
          ) : (
            <div className="detail__poster detail__poster--placeholder" />
          )}
        </div>

        <div className="detail__info">
          <Link to="/" className="detail__back">← Volver</Link>

          <h1 className="detail__title">{movie.title}</h1>

          {movie.original_title !== movie.title && (
            <p className="detail__original-title">{movie.original_title}</p>
          )}

          <div className="detail__meta">
            <span className="detail__rating">★ {formatVote(movie.vote_average)} / 10</span>
            <span>({movie.vote_count.toLocaleString('es-ES')} votos)</span>
            <span>{year}</span>
            {runtime && <span>{runtime}</span>}
            {movie.release_date && <span>{formatDate(movie.release_date)}</span>}
          </div>

          {movie.genres.length > 0 && (
            <div className="detail__genres">
              {movie.genres.map(g => (
                <span key={g.id} className="detail__genre-tag">{g.name}</span>
              ))}
            </div>
          )}

          {movie.overview && (
            <>
              <p className="detail__overview-heading">Sinopsis</p>
              <p className="detail__overview">{movie.overview}</p>
            </>
          )}
        </div>
      </div>
    </article>
  )
}

export default MovieDetailPage
