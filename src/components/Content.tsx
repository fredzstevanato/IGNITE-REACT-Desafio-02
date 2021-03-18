import { MovieCard } from "./MovieCard";

import '../styles/content.scss';

import { MovieProps } from '../interfaces';

interface GenereMovieReponse {
  genre: string;
  movies: MovieProps[];
}

export function Content({genre, movies}: GenereMovieReponse) {

  console.log(genre);

  return (
    <div className="container">
      <header>
        <span className="category">Categoria: <span>{genre}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}