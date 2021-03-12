import React from "react";

function Meta({ meta, setMetaGuardada, popular }) {
  function handleClick(popular) {
    const nuevaMeta = popular;
    setMetaGuardada((prev) => [nuevaMeta, ...prev]);
  }
  return (
    <div>
      <h4 onClick={() => handleClick(popular)}>{popular}</h4>
    </div>
  );
}

export default Meta;
