import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesCast } from "..//../Api";
import { fetchConfiguration } from "..//../Api";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import css from "./MovieCast.module.css";

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [configuration, setConfiguration] = useState([]);
  const [size, setSize] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchCast() {
      try {
        setLoading(true);
        setError(false);
        const fetch = await fetchMoviesCast(movieId);
        setCast(fetch);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchCast();
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
        setError(false);
      } finally {
        setLoading(false);
      }
    }
    fetchImageDetails();
  }, []);
  const { base_url } = configuration;
  console.log(cast);
  return (
    <ul className={css.container}>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {cast &&
        cast.map(({ profile_path, name, character, id }) => {
          return (
            <li key={id} className={css.item}>
              <img
                src={
                  profile_path
                    ? `${base_url}${size[3]}${profile_path}`
                    : "http://www.suryalaya.org/images/no_image.jpg"
                }
                width="120"
              />

              <div className={css.text}>
                <p>{name}</p>
                <p>Character: {character}</p>
              </div>
            </li>
          );
        })}
    </ul>
  );
}
export default MovieCast;
