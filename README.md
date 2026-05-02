# Cinema Flix

**Cinema Flix** es una aplicación web SPA (Single Page Application) moderna que permite explorar películas populares, ver información detallada de cada película y buscar títulos específicos. La aplicación consume datos de [The Movie Database (TMDB)](https://www.themoviedb.org/), una de las bases de datos de películas más completas disponibles.

## Descripción de la Aplicación

Cinema Flix ofrece una experiencia interactiva para los amantes del cine:

- **Página de inicio**: Visualiza las películas populares con sus pósters en una galería atractiva
- **Búsqueda**: Busca películas por título en tiempo real
- **Detalles de película**: Accede a información completa incluyendo sinopsis, calificación, fecha de lanzamiento y más
- **Interfaz responsive**: Diseño adaptable para diferentes dispositivos
- **Navegación fluida**: Navegación SPA sin recargas de página

## Tecnologías

- **React 19** - Biblioteca para interfaces de usuario
- **TypeScript** - Tipado estático de JavaScript
- **Vite 8** - Build tool y servidor de desarrollo de alto rendimiento
- **React Router DOM v7** - Enrutamiento de la aplicación
- **TMDB API** - Fuente de datos de películas
- **CSS3** - Estilos y diseño responsivo

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados:

- **Node.js** (versión 16 o superior)
- **npm** o **yarn** (gestor de paquetes)
- Una **API key de TMDB** (obtén una gratis en [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api))

## Instalación

### 1. Clonar el repositorio

```bash
git clone <tu-repositorio>
cd cinema-flix-spa
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
VITE_TMDB_API_KEY=tu_api_key_aqui
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p/w500
```

**Nota**: Reemplaza `tu_api_key_aqui` con tu clave API real de TMDB.

## Ejecutar el Proyecto

### Servidor de desarrollo

Para ejecutar la aplicación en modo de desarrollo con hot reload:

```bash
npm run dev
```

Accede a la aplicación en `http://localhost:5173` (el puerto puede variar).

### Build de producción

Para crear un build optimizado para producción:

```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`.

### Previsualizar el build

Para probar localmente el build de producción:

```bash
npm run preview
```

## Estructura del Proyecto

```
cinema-flix-spa/
├── public/                    # Archivos estáticos públicos
├── src/
│   ├── assets/               # Archivos multimedia (imágenes, iconos, etc.)
│   ├── components/           # Componentes reutilizables
│   │   ├── MovieCard.tsx     # Tarjeta individual de película
│   │   ├── Navbar.tsx        # Barra de navegación superior
│   │   ├── SearchBar.tsx     # Componente de búsqueda
│   │   └── Spinner.tsx       # Indicador de carga
│   ├── hooks/                # Custom hooks de React
│   │   └── useFetch.ts       # Hook para peticiones HTTP
│   ├── pages/                # Componentes de páginas/rutas
│   │   ├── HomePage.tsx      # Página de películas populares
│   │   ├── MovieDetailPage.tsx # Página de detalles de película
│   │   ├── NotFoundPage.tsx  # Página 404
│   │   └── SearchPage.tsx    # Página de resultados de búsqueda
│   ├── services/             # Servicios y utilidades
│   │   └── tmdb.ts          # Cliente para la API de TMDB
│   ├── App.tsx               # Componente principal de la app
│   ├── main.tsx              # Punto de entrada de la aplicación
│   ├── index.css             # Estilos globales
│   └── types.ts              # Definiciones de tipos TypeScript
├── .env                       # Variables de entorno (no commitar)
├── eslint.config.js          # Configuración de ESLint
├── tsconfig.json             # Configuración de TypeScript
├── tsconfig.app.json         # Configuración de TypeScript para la app
├── tsconfig.node.json        # Configuración de TypeScript para herramientas
├── vite.config.ts            # Configuración de Vite
├── package.json              # Dependencias y scripts del proyecto
└── README.md                 # Este archivo
```

### Descripción de directorios principales

- **`components/`**: Componentes React reutilizables que se utilizan en múltiples páginas
- **`pages/`**: Componentes de página que corresponden a rutas específicas de la aplicación
- **`hooks/`**: Custom hooks que encapsulan lógica React reutilizable
- **`services/`**: Capas de abstracción para APIs externas y utilidades
- **`assets/`**: Recursos estáticos como imágenes y estilos

## Rutas de la Aplicación

| Ruta | Descripción |
|---|---|
| `/` | Página de inicio - Películas populares |
| `/movie/:id` | Página de detalles - Información completa de una película |
| `/search?query=...` | Página de búsqueda - Resultados de búsqueda por título |
| `*` | Página 404 - Para rutas no encontradas |


## Recursos Útiles

- [Documentación de React](https://react.dev)
- [Documentación de Vite](https://vitejs.dev)
- [Documentación de React Router](https://reactrouter.com)
- [TMDB API Documentation](https://developer.themoviedb.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
