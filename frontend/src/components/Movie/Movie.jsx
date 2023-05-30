import React, { useContext } from 'react'; // Ajoutez ceci
import './Movie.css';
import { Link } from 'react-router-dom';
import { MovieContext } from '../../context/MovieContext'; // Ajoutez ceci

const Movie = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const { setSelectedMovie } = useContext(MovieContext); // Ajoutez ceci

  return (
    <div className="movie">
      <Link to={`/movies/${movie.id}`} onClick={() => setSelectedMovie(movie)}>
        <img src={imageUrl} alt={movie.title} />
      </Link>
      <h2>{movie.title}</h2>
      <p>Date de sortie : {movie.release_date}</p>
    </div>
  );
};

export default Movie;
