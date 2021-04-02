import React, { useEffect, useState } from "react";
import { useQuotesContext } from "../../context/quotes-context";

function Quotes() {
  const { quotes, setMisQuotes } = useQuotesContext();
  // const [contador, setContador] = useState(0);

  // const handleClick = () => {
  //   if (contador === quotes.length - 1) {
  //     // setRefetch((prev) => !prev);
  //     setContador(0);
  //   } else {
  //     setContador(contador + 1);
  //   }
  // };

  // const handleAdd = (quote) => {
  //   setMisQuotes((prev) => [quote, ...prev]);
  // };

  // return (
  //   <div>
  //     <p>{quotes[contador].quote}</p>
  //     <h3>{quotes[contador].author}</h3>
  //     <button onClick={handleClick}>Siguiente</button>
  //     <button onClick={() => handleAdd(quotes[contador])}>Agregar</button>
  //   </div>
  // );

  return (
    <div>
      {quotes.map((quote) => (
        <div>
          <h3>{quote.quote}</h3>
          <p>{quote.author}</p>
        </div>
      ))}
    </div>
  );
}

export default Quotes;
