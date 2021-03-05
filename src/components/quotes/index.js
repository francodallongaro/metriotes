import React from "react";

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=10")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data.quotes);
        setLoading(false);
      });
  }, []);

  if (loading) <h1>Loading</h1>;
  return (
    <div>
      {quotes.map((quote, i) => (
        <div key={i}>
          <p>{quote.text}</p>
          <h3>{quote.author}</h3>
        </div>
      ))}
    </div>
  );
}

export default Quotes;
