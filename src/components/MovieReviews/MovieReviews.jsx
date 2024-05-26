import { useParams } from "react-router-dom";
import { fetchMoviesReview } from "..//../Api";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function MovieReviews() {
  const { movieId } = useParams();
  const [review, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchReview() {
      try {
        setLoading(true);
        setError(false);
        const fetch = await fetchMoviesReview(movieId);
        setReviews(fetch);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchReview();
  }, [movieId]);
  return (
    <div>
      <ul>
        {loading && <Loader />}
        {error && <ErrorMessage />}
        {review.length > 0 ? (
          review.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            );
          })
        ) : (
          <p>We don't have any reviews for this movie!</p>
        )}
      </ul>
    </div>
  );
}
export default MovieReviews;
