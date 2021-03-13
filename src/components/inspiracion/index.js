import React, { useEffect, useState } from "react";
import Quotes from "../quotes";
import SidebarQuotes from "../SidebarQuotes";

function Inspiracion() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refetch, setRefetch] = useState(true);
  const [misquotes, setMisQuotes] = useState([]);

  useEffect(() => {
    let localQuotes = localStorage.getItem("localQuotes");
    if (localQuotes) {
      setMisQuotes(JSON.parse(localQuotes));
    } else {
      localStorage.setItem("localQuotes", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("localQuotes", JSON.stringify(misquotes));
  }, [misquotes]);

  useEffect(() => {
    setLoading(true);
    fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=10")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data.quotes);
        setLoading(false);
      });
  }, [refetch]);

  if (loading) return <h1>Loading</h1>;
  return (
    <div className="layout">
      <SidebarQuotes misquotes={misquotes} />
      <Quotes
        quotes={quotes}
        setRefetch={setRefetch}
        setMisQuotes={setMisQuotes}
      />
    </div>
  );
}

export default Inspiracion;
