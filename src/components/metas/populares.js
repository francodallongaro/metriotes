import React, { useEffect, useState } from "react";
import Meta from "./meta";

const populares = [
  {
    id: 1,
    title: "Dormirme mas temprano",
    description: "Esta es una meta para ayudarme a dormir mas temprano",
  },
  {
    id: 2,
    title: "Levantarme mas temprano",
    description: "Esta es una meta para ayudarme a levantarme mas temprano",
  },
];

function Populares({ setMetasGuardadas, setCurrentMeta }) {
  const [metas, setMetas] = useState(populares);

  useEffect(() => {
    let localPopulares = localStorage.getItem("localPopulares");
    if (localPopulares) {
      setMetas(JSON.parse(localPopulares));
    } else {
      setMetas(populares);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("localPopulares", JSON.stringify(metas));
  }, [metas]);

  return (
    <>
      <h1>Populares</h1>
      {metas.map((popular, i) => (
        <Meta
          key={i}
          popular={popular}
          setMetasGuardadas={setMetasGuardadas}
          setMetas={setMetas}
          setCurrentMeta={setCurrentMeta}
        />
      ))}
    </>
  );
}

export default Populares;
