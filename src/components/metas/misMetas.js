import React, { useState } from "react";

import MetaPersonal from "./metaPersonal";

function MisMetas({ metasGuardadas, setCurrentMeta }) {
  return (
    <>
      <h1>Mis Metas</h1>
      {metasGuardadas.map((meta) => (
        <MetaPersonal meta={meta} setCurrentMeta={setCurrentMeta} />
      ))}
    </>
  );
}

export default MisMetas;
