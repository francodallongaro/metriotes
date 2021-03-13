import React from "react";

function MetaPersonal({ meta }) {
  const onClick = () => {};

  return (
    <div>
      <h4 onClick={onClick}>{meta.title}</h4>
    </div>
  );
}

export default MetaPersonal;
