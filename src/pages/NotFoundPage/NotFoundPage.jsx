import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <p>
        Sorry, page not found! Pleas come back to <Link to="/">home</Link>
      </p>
    </div>
  );
}
export default NotFoundPage;
