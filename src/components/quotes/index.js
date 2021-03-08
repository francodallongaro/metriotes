import React, { useEffect, useState } from "react";

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [contador, setContador] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=10")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data.quotes);
        setLoading(false);
        console.log("quotes", quotes);
      });
  }, []);

  if (loading) <h1>Loading</h1>;
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
