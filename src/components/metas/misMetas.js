import React, { useState } from "react";
import { useMetasContext } from "../../context/metasContext";

import MetaPersonal from "./metaPersonal";

function MisMetas() {
  // const {setCurrentMeta} = useMetasContext()
  const { metasGuardadas } = useMetasContext();

  return (
    <>
      <h1>Mis Metas</h1>
      {metasGuardadas.map((meta) => (
        <MetaPersonal meta={meta} />
        // <MetaPersonal meta={meta} setCurrentMeta={setCurrentMeta} />
      ))}
    </>
  );
}

export default MisMetas;
