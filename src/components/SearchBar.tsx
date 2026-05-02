import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

function SearchBar() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [query, setQuery] = useState(searchParams.get('query') ?? '')

  useEffect(() => {
    setQuery(searchParams.get('query') ?? '')
  }, [searchParams])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = query.trim()
    if (trimmed) navigate(`/search?query=${encodeURIComponent(trimmed)}`)
  }

  return (
    <form className="search-form" onSubmit={handleSubmit} role="search">
      <input
        type="text"
        placeholder="Buscar películas..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        aria-label="Buscar películas"
      />
      <button type="submit">Buscar</button>
    </form>
  )
}

export default SearchBar
