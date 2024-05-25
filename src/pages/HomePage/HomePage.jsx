import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTrendingMovies } from "..//../Api";

function HomePage() {
  const [movies, setMovie] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      try {
        const fetch = await fetchTrendingMovies();
        setMovie(fetch.results);
      } catch (error) {
        console.log("error");
      }
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <div>
        <h1>Trending today</h1>
        <ul>
          {movies.length > 0 &&
            movies.map(({ id, title }) => {
              return (
                <li key={id}>
                  <Link to={`/movie/${id}`}>{title}</Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
export default HomePage;
