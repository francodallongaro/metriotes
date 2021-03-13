import React from "react";

function Meta({ setMetasGuardadas, popular, setMetas }) {
  function handleClick() {
    const popularWithDate = {
      ...popular,
      dates: {},
    };
    setMetasGuardadas((prev) => [popularWithDate, ...prev]);
    setMetas((prev) => prev.filter((meta) => meta.id !== popular.id));
  }

  return <h4 onClick={handleClick}>{popular.title}</h4>;
}

export default Meta;
