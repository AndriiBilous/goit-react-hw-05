import { Route, Routes } from "react-router-dom";
import HomePage from "..//../pages/HomePage/HomePage";
import MovieDetailsPage from "..//../pages/MovieDetailsPage/MovieDetailsPage";
import MoviesPage from "..//../pages/MoviesPage/MoviesPage";
import NotFoundPage from "..//../pages/NotFoundPage/NotFoundPage";
import Navigation from "../Navigation/Navigation";
function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie" element={<MoviesPage />} />
        <Route path="/movie/:movieId" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
export default App;
