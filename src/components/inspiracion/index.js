import React, { useEffect, useState } from "react";
import Quotes from "../quotes";
import SidebarQuotes from "../SidebarQuotes";

function Inspiracion() {
  return (
    <div className="layout">
      <SidebarQuotes />
      <Quotes />
    </div>
  );
}

export default Inspiracion;
