import { useState } from "react";
import MisMetas from "./misMetas";
import Populares from "./populares";

function Metas() {
  const [metasGuardadas, setMetasGuardadas] = useState([]);
  return (
    <>
      <MisMetas metasGuardadas={metasGuardadas} />
      <Populares setMetasGuardadas={setMetasGuardadas} />
    </>
  );
}

export default Metas;
