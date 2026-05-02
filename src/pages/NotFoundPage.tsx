import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="not-found">
      <div className="not-found__code">404</div>
      <h1>Página no encontrada</h1>
      <p className="not-found__msg">La ruta que buscas no existe.</p>
      <Link to="/">← Volver al inicio</Link>
    </div>
  )
}

export default NotFoundPage
