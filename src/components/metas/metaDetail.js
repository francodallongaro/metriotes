import React from "react";
import moment from "moment";

function MetaDetail({ currentMeta, setCurrentMeta }) {
  const onClick = () => {
    setCurrentMeta({ ...currentMeta, ["dates"]: true });
    console.log(`currentMeta`, currentMeta);
  };

  if (!currentMeta) return <p>Hace clic en alguna meta para ver tu avance.</p>;
  return (
    <>
      <h2>{currentMeta.title}</h2>
      <p>{currentMeta.description}</p>
      <h4>Cumpliste el objetivo hoy?</h4>
      <button onClick={onClick}>SI</button>
      <p>{currentMeta.date}</p>
    </>
  );
}

export default MetaDetail;
