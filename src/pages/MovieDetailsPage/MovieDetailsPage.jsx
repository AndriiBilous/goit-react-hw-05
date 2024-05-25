import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchDetailsMovies } from "..//../Api";
import { fetchConfiguration } from "..//../Api";
import { createLogger } from "vite";
function MovieDetailsPage() {
  const { movieId } = useParams();
  const [details, setDetails] = useState([]);
  const [configuration, setConfiguration] = useState([]);
  useEffect(() => {
    async function fetchDetails() {
      try {
        const fetch = await fetchDetailsMovies(movieId);
        setDetails(fetch);
      } catch (error) {
        console.log("error");
      }
    }
    fetchDetails();
  }, [movieId]);
  useEffect(() => {
    async function fetchImageDetails() {
      try {
        const fetch = await fetchConfiguration();
        setConfiguration(fetch);
      } catch (error) {
        console.log("Error");
      }
    }
    fetchImageDetails();
  }, []);

  const { title, genres, overview, vote_average, poster_path } = details;

  const { base_url, logo_sizes } = configuration;
  //==================URL_IMAGE==================

  return (
    <div>
      <Link to="/">Go back</Link>
      <div>
        <div></div>
        <div>
          <h2>{title}</h2>
          <p>{vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <div>
            {genres &&
              genres.map(({ id, name }) => {
                return <p key={id}>{name}</p>;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default MovieDetailsPage;
