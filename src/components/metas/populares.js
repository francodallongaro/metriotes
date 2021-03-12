import React, { useState } from "react";
import Meta from "./meta";

const populares = [
  "Despertarme Temprano",
  "Dormirme Temprano",
  "Dejar de fumar",
];
function Populares({ setMetasGuardadas }) {
  const [metas, setMetas] = useState(populares);

  return (
    <>
      <h1>Populares</h1>
      {metas.map((popular, i) => (
        <Meta
          key={i}
          popular={popular}
          setMetasGuardadas={setMetasGuardadas}
          setMetas={setMetas}
        />
      ))}
    </>
  );
}

export default Populares;
