import React, { useEffect, useState } from "react";

function Quotes({ quotes }) {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>{quotes[contador].text}</p>
      <h3>{quotes[contador].author}</h3>
      <button onClick={() => setContador(contador + 1)}>Siguiente</button>
      <button>Agregar</button>
    </div>
  );
}

export default Quotes;
