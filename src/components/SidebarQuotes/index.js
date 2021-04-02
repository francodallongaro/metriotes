import React from "react";
import { useQuotesContext } from "../../context/quotes-context";

function SidebarQuotes() {
  const { misquotes } = useQuotesContext();
  if (misquotes)
    return (
      <aside>
        {misquotes.map((quote, i) => (
          <div key={i}>
            <p>{quote.quote}</p>
            <h3>{quote.author}</h3>
          </div>
        ))}
      </aside>
    );
}

export default SidebarQuotes;
