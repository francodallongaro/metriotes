import React, { useState } from "react";
import Meta from "./meta";

function Populares({ setMetasGuardadas }) {
  const populares = [
    "Despertarme Temprano",
    "Dormirme Temprano",
    "Dejar de fumar",
  ];
  const [metas, setMetas] = useState([populares]);

  return (
    <>
      <h1>Populares</h1>

      <Meta populares={populares} setMetasGuardadas={setMetasGuardadas} />
    </>
  );
}

export default Populares;
