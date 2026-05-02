# Cinema Flix

SPA para explorar películas populares, ver detalles y buscar por título, consumiendo la API de [The Movie Database (TMDB)](https://www.themoviedb.org/).

## Tecnologías

- React 19 + TypeScript
- Vite 8
- React Router DOM v7
- TMDB API

## Rutas

| Ruta | Descripción |
|---|---|
| `/` | Películas populares |
| `/movie/:id` | Detalle de película |
| `/search?query=...` | Resultados de búsqueda |

## Instalación

```bash
npm install
```

Crea un archivo `.env` en la raíz con tu API key de TMDB:

```
VITE_TMDB_API_KEY=tu_api_key_aqui
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p/w500
```

## Scripts

```bash
npm run dev      # servidor de desarrollo
npm run build    # build de producción
npm run preview  # previsualizar el build
```
