import { NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__logo">
        🎬 Cinema Flix
      </NavLink>
      <SearchBar />
    </nav>
  )
}

export default Navbar
