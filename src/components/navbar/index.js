import React from "react";
import { Link } from "react-router-dom";
import s from "./navbar.module.css";

function Navbar() {
  return (
    <div className={s.navbar}>
      <Link to="/">
        <h1 id={s.metas}>Metas</h1>
      </Link>
      <Link to="/comoestas">
        <h1 id={s.como}>¿Cómo estás?</h1>
      </Link>
      <Link to="/inspiracion">
        <h1 id={s.inspiracion}>Inspiración</h1>
      </Link>
    </div>
  );
}

export default Navbar;
