import React from "react";

function Meta({ setMetasGuardadas, populares }) {
  function handleClick(popular) {
    const nuevaMeta = popular;
    console.log(nuevaMeta);
    setMetasGuardadas((prev) => [nuevaMeta, ...prev]);
  }
  return populares.map((popular, i) => (
    <h4 key={i} onClick={() => handleClick(popular)}>
      {popular}
    </h4>
  ));
}

export default Meta;
