import React from "react";

function MetaPersonal({ meta, setCurrentMeta }) {
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
