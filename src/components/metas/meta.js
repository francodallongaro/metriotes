import React from "react";
import { useMetasContext } from "../../context/metasContext";

function Meta({ popular, setMetas }) {
  const { setMetasGuardadas } = useMetasContext();
  const { setCurrentMeta } = useMetasContext();
  function handleClick() {
    const popularWithDate = {
      ...popular,
      dates: {},
    };
    setMetasGuardadas((prev) => [popularWithDate, ...prev]);
    setMetas((prev) => prev.filter((meta) => meta.id !== popular.id));
    setCurrentMeta();
  }

  return <h4 onClick={handleClick}>{popular.title}</h4>;
}

export default Meta;
