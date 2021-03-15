import React from "react";
import { useMetasContext } from "../../context/metasContext";

function MetaPersonal({ meta }) {
  const { setCurrentMeta } = useMetasContext();

  const onClick = () => {
    setCurrentMeta(meta);
  };

  return (
    <div>
      <h4 onClick={onClick}>{meta.title}</h4>
    </div>
  );
}

export default MetaPersonal;
