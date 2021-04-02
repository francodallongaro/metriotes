import { getFirestore } from "../firebase";
import React, { useContext, useEffect, useState } from "react";

export const QuotesContext = React.createContext();

export const useQuotesContext = () => useContext(QuotesContext);

export default function QuotesProvider({ children }) {
  const [quotes, setQuotes] = useState([]);
  const [misquotes, setMisQuotes] = useState([]);
  const array = [];
  const db = getFirestore();
  db.collection("quotes")
    .get()
    .then((docs) => {
      if (docs) {
        docs.forEach((doc) => {
          array.push({ id: doc.id, ...doc.data() });
        });
        setQuotes(array);
      }
    });

  return (
    <QuotesContext.Provider
      value={{
        quotes,
        misquotes,
      }}
    >
      {children}
    </QuotesContext.Provider>
  );
}
