import React from "react";
import s from "./navbar.module.css";

function Navbar() {
  return (
    <div className={s.navbar}>
      <h1 id={s.metas}>Metas</h1>
      <h1 id={s.como}>¿Cómo estás?</h1>
      <h1 id={s.inspiracion}>Inspiración</h1>
    </div>
  );
}

export default Navbar;
