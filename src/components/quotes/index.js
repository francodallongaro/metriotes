import React, { useEffect, useState } from "react";

function Quotes({ quotes, setRefetch }) {
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    if (contador === quotes.length - 1) {
      setRefetch(prev => !prev);
      setContador(0);
    } else {
      setContador(contador + 1)
    }
  }

  return (
    <div>
      <p>{quotes[contador].text}</p>
      <h3>{quotes[contador].author}</h3>
      <button onClick={handleClick}>Siguiente</button>
      <button>Agregar</button>
    </div>
  );
}

export default Quotes;
