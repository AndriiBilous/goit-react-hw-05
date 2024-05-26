import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
const linkStyle = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
function Navigation() {
  return (
    <header className={css.header}>
      <nav className={css.navigation}>
        <NavLink to="/" className={linkStyle}>
          Home
        </NavLink>
        <NavLink to="/movie" className={linkStyle}>
          Movie
        </NavLink>
      </nav>
    </header>
  );
}
export default Navigation;
