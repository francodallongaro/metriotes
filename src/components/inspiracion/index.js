import React, { useEffect, useState } from "react";
import Quotes from "../quotes";
import SidebarQuotes from "../SidebarQuotes";

function Inspiracion() {
  const [quotes, setQuotes] = useState([]);
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
    <div className="layout">
      <SidebarQuotes />
      <Quotes quotes={quotes} />
    </div>
  );
}

export default Inspiracion;
