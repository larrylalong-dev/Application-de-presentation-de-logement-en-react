import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav">
      {/* Link to Homepage */}
      <NavLink
        to="/"
        className={(nav) =>
          nav.isActive ? "nav_item--active" : "nav_item--inactive"
        }
      >
        Accueil
      </NavLink>
      {/* Link to page About */}
      <NavLink
        to="/about"
        className={(nav) =>
          nav.isActive ? "nav_item--active" : "nav_item--inactive"
        }
      >
        A propos
      </NavLink>
    </nav>
  );
};

export default Navigation;
