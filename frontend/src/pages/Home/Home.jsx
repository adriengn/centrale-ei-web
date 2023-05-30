import logo from './logo.svg';
import './Home.css';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../../components/Movie/Movie.jsx';
import { MovieContext } from '../../context/MovieContext.jsx';

function Home() {
  const [movieName, setMovieName] = useState('');
  const [movies, setMovieList] = useState([]);
  const { setMovies } = useContext(MovieContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
          {
            headers: {
              accept: 'application/json',
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjlmNjAwMzY4MzMzODNkNGIwYjNhNzJiODA3MzdjNCIsInN1YiI6IjY0NzA5YmE4YzVhZGE1MDBkZWU2ZTMxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Em7Y9fSW94J91rbuKFjDWxmpWaQzTitxRKNdQ5Lh2Eo',
            },
          }
        );
        setMovieList(response.data.results);
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(movieName.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Mon site yes</h1>
        <input
          value={movieName}
          onChange={(event) => setMovieName(event.target.value)}
          type="text"
          placeholder="Nom du film"
        />
        <p>Vous écrivez {movieName}</p>
        <div className="movie-grid">
          {filteredMovies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>

        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <style>
        {`
          .movie img {
            width: 150px;
            height: auto;
            object-fit: cover;
            margin-bottom: 10px;
          }
        `}
      </style>
    </div>
  );
}

export default Home;
