import React from "react";

function SidebarQuotes({ misquotes }) {
  return (
    <aside>
      {misquotes.map((quote, i) => (
        <div key={i}>
          <p>{quote.text}</p>
          <h3>{quote.author}</h3>
        </div>
      ))}
    </aside>
  );
}

export default SidebarQuotes;
