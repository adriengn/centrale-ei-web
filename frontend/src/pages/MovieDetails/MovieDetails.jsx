import React, { useContext } from 'react';
import './MovieDetails.css';
import { MovieContext } from '../../context/MovieContext';

const MovieDetails = () => {
  const { selectedMovie } = useContext(MovieContext);

  if (!selectedMovie) {
    return <div>Aucun film sélectionné</div>;
  }

  const { poster_path, title, release_date, original_language, overview } =
    selectedMovie;

  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div className="movie-details">
      <div className="movie-details-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="movie-details-info">
        <h2>{title}</h2>
        <p>Date de sortie : {release_date}</p>
        <p>Langue : {original_language}</p>
        <p>Overview : {overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
