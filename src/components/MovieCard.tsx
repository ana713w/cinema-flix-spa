import { Link } from 'react-router-dom'
import { getPosterUrl, formatVote } from '../services/tmdb'
import type { Movie } from '../types'

interface Props {
  movie: Movie
}

function MovieCard({ movie }: Props) {
  const poster = getPosterUrl(movie.poster_path)

  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      {poster ? (
        <img
          className="movie-card__poster"
          src={poster}
          alt={movie.title}
          loading="lazy"
        />
      ) : (
        <div className="movie-card__poster movie-card__poster--placeholder">
          <span>{movie.title}</span>
        </div>
      )}
      <div className="movie-card__info">
        <h3 className="movie-card__title">{movie.title}</h3>
        <div className="movie-card__rating">
          ★ {formatVote(movie.vote_average)}
        </div>
      </div>
    </Link>
  )
}

export default MovieCard
