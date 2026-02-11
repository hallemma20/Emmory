import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Emmory</h1>
      <nav>
        <NavLink
          to="/wardrobe"
          className={({ isActive }) => `nav-button${isActive ? " active" : ""}`}
        >
          Wardrobe
        </NavLink>
        <NavLink
          to="/outfits"
          className={({ isActive }) => `nav-button${isActive ? " active" : ""}`}
        >
          Outfits
        </NavLink>
        <NavLink
          to="/add-item"
          className={({ isActive }) => `nav-button primary${isActive ? " active" : ""}`}
        >
          Add Clothing Item
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
