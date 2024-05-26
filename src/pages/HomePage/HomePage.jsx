import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "..//../Api";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "..//../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

function HomePage() {
  const [movies, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        setError(false);
        const fetch = await fetchTrendingMovies();
        setMovie(fetch.results);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <div>
        <h1>Trending today</h1>
        {loading && <Loader />}
        {error && <ErrorMessage />}
        {movies.length > 0 && <MovieList movies={movies} />}
      </div>
    </div>
  );
}
export default HomePage;
