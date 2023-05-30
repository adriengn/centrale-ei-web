import { Route, Routes } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext.jsx';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Layout from './components/Layout/Layout';
import Counter from './pages/Counter/Counter';
import Users from './pages/Users/Users';
import MovieDetails from './pages/MovieDetails/MovieDetails';

function App() {
  return (
    <Layout>
      <MovieProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="counter" element={<Counter />} />
          <Route path="users" element={<Users />} />
          <Route path="about" element={<About />} />
          <Route path="movies/:id" element={<MovieDetails />} />
        </Routes>
      </MovieProvider>
    </Layout>
  );
}

export default App;
