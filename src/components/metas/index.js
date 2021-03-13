import { useEffect, useState } from "react";
import MisMetas from "./misMetas";
import Populares from "./populares";

function Metas() {
  const [metasGuardadas, setMetasGuardadas] = useState([]);

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
      <MisMetas metasGuardadas={metasGuardadas} />
      <Populares setMetasGuardadas={setMetasGuardadas} />
    </>
  );
}

export default Metas;
