import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movie">Movie</NavLink>
      </nav>
    </header>
  );
}
export default Navigation;
