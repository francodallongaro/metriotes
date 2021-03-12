import React from "react";

function Meta({ setMetasGuardadas, popular, setMetas }) {
  function handleClick() {
    setMetasGuardadas((prev) => [popular, ...prev]);
    setMetas((prev) => prev.filter((meta) => meta !== popular));
  }

  return <h4 onClick={handleClick}>{popular}</h4>;
}

export default Meta;
