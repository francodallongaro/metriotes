import React, { useState } from "react";
import Meta from "./meta";

function MisMetas({ metasGuardadas }) {
  return (
    <>
      <h1>Mis Metas</h1>
      {metasGuardadas.map((meta) => (
        <Meta meta={meta} />
      ))}
    </>
  );
}

export default MisMetas;
