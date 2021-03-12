import React from "react";

function Meta({ setMetaGuardada, popular }) {
  function handleClick(popular) {
    const nuevaMeta = popular;
    setMetaGuardada((prev) => [nuevaMeta, ...prev]);
  }
  return <h4 onClick={() => handleClick(popular)}>{popular}</h4>;
}

export default Meta;
