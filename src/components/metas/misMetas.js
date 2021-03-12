import React, { useState } from "react";

import MetaPersonal from "./metaPersonal";

function MisMetas({ metasGuardadas }) {
  return (
    <>
      <h1>Mis Metas</h1>
      {metasGuardadas.map((meta) => (
        <MetaPersonal meta={meta} />
      ))}
    </>
  );
}

export default MisMetas;
