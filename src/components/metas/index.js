import { useEffect, useState } from "react";
import MetaDetail from "./metaDetail";
import MisMetas from "./misMetas";
import Populares from "./populares";

function Metas() {
  const [metasGuardadas, setMetasGuardadas] = useState([]);
  const [currentMeta, setCurrentMeta] = useState(metasGuardadas[0]);

  useEffect(() => {
    let localMetas = localStorage.getItem("localMetas");
    if (localMetas) {
      setMetasGuardadas(JSON.parse(localMetas));
    } else {
      localStorage.setItem("localMetas", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("localMetas", JSON.stringify(metasGuardadas));
  }, [metasGuardadas]);

  return (
    <>
      <MisMetas
        metasGuardadas={metasGuardadas}
        setCurrentMeta={setCurrentMeta}
      />
      <Populares
        setMetasGuardadas={setMetasGuardadas}
        setCurrentMeta={setCurrentMeta}
      />
      <MetaDetail currentMeta={currentMeta} setCurrentMeta={setCurrentMeta} />
    </>
  );
}

export default Metas;
