import { useLocation, Link } from "react-router-dom";
import Loader from "..//../components/Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import css from "./MovieList.module.css";

function MovieList({ movies, loading, error }) {
  const location = useLocation();
  return (
    <ul className={css.container}>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {movies.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link to={`/movie/${id}`} state={location} className={css}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
export default MovieList;
