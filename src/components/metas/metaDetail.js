import React from "react";
import moment from "moment";
import { useMetasContext } from "../../context/metasContext";

function MetaDetail() {
  const { setCurrentMeta } = useMetasContext();
  const { currentMeta } = useMetasContext();
  const onClick = () => {
    setCurrentMeta({
      ...currentMeta,
      dates: {
        ...currentMeta.dates,
        [moment().startOf("day").format("x")]: true,
      },
    });
  };

  if (!currentMeta) return <p>Hace clic en alguna meta para ver tu avance.</p>;
  return (
    <>
      <h2>{currentMeta.title}</h2>
      <p>{currentMeta.description}</p>
      <h4>Cumpliste el objetivo hoy?</h4>
      {currentMeta.dates[moment().startOf("day").format("x")] || (
        <button onClick={onClick}>SI</button>
      )}
      <p>
        {Object.entries(currentMeta.dates).map((meta, i) => (
          <span key={i}>
            {meta[0]} {meta[1] && "si"}
          </span>
        ))}
      </p>
    </>
  );
}

export default MetaDetail;
