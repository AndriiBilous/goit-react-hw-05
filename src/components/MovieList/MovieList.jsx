import { useLocation, Link } from "react-router-dom";
import Loader from "..//../components/Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function MovieList({ movies, loading, error }) {
  const location = useLocation();
  return (
    <>
      <ul>
        {loading && <Loader />}
        {error && <ErrorMessage />}
        {movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`/movie/${id}`} state={location}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default MovieList;
