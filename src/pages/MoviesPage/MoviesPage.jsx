import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { fetchMovieSearch } from "..//../Api";
import MovieList from "..//../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import css from "./MoviesPage.module.css";

function MoviesPage() {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [value, setValue] = useSearchParams();
  const query = value.get("query") ?? "";

  const changeValue = (newValue) => {
    value.set("query", newValue);
    setValue(value);
  };

  useEffect(() => {
    async function fetchMovie() {
      try {
        setLoading(true);
        setError(false);
        const fetch = await fetchMovieSearch(query);
        setResponse(fetch);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, [query]);

  return (
    <main className={css.main}>
      <div className={css.container}>
        <SearchBar onSearch={changeValue} />
        {response.length > 0 && (
          <MovieList movies={response} loading={loading} error={error} />
        )}
      </div>
    </main>
  );
}
export default MoviesPage;
