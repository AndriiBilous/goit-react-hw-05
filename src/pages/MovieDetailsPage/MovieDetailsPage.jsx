import { Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { fetchDetailsMovies } from "..//../Api";
import { fetchConfiguration } from "..//../Api";
import Loader from "..//../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useLocation } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [details, setDetails] = useState([]);
  const [configuration, setConfiguration] = useState([]);
  const [size, setSize] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const locationRef = useRef(location.state ?? "/");

  useEffect(() => {
    async function fetchDetails() {
      try {
        setLoading(true);
        setError(false);
        const fetch = await fetchDetailsMovies(movieId);
        setDetails(fetch);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchDetails();
  }, [movieId]);

  useEffect(() => {
    async function fetchImageDetails() {
      try {
        setLoading(true);
        setError(false);
        const fetch = await fetchConfiguration();
        setConfiguration(fetch);
        setSize(fetch.logo_sizes);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchImageDetails();
  }, []);

  const { title, genres, overview, vote_average, poster_path } = details;

  const { base_url } = configuration;

  return (
    <div className={css.container}>
      <div className={css.wrap}>
        <Link to={locationRef.current} className={css.back}>
          Go back
        </Link>
        {loading && <Loader />}
        {error && <ErrorMessage />}
        {details && (
          <div>
            <div className={css.card}>
              <img src={`${base_url}${size[4]}${poster_path}`} />
              <div className={css.text}>
                <h2>{title}</h2>
                <p>{vote_average}</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h4>Genres</h4>
                <div className={css.genres}>
                  {genres &&
                    genres.map(({ id, name }) => {
                      return <p key={id}>{name}</p>;
                    })}
                </div>
              </div>
            </div>
            <div className={css.info}>
              <p>Additional information</p>

              <div className={css.content}>
                <Link to="cast" className={css.back}>
                  Cast
                </Link>
                <Link to="reviews" className={css.back}>
                  Reviews
                </Link>
              </div>
              <Suspense fallback={<div>Loading details...</div>}>
                <Outlet />
              </Suspense>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default MovieDetailsPage;
