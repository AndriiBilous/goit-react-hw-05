import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { fetchMovieSearch } from "..//../Api";
import MovieList from "..//../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

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
    <div>
      <SearchBar onSearch={changeValue} />

      <main>
        {response.length > 0 && (
          <MovieList movies={response} loading={loading} error={error} />
        )}
      </main>
    </div>
  );
}
export default MoviesPage;
