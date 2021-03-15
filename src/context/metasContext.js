import React, { useContext, useEffect, useState } from "react";

export const MetasContext = React.createContext();

export const useMetasContext = () => useContext(MetasContext);

export default function MetasProvider({ children }) {
  const [metasGuardadas, setMetasGuardadas] = useState([]);
  const [currentMeta, setCurrentMeta] = useState(metasGuardadas[0]);

  useEffect(() => {
    let localMetas = localStorage.getItem("localMetas");
    if (localMetas) {
      setMetasGuardadas(JSON.parse(localMetas));
    } else {
      localStorage.setItem("localMetas", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("localMetas", JSON.stringify(metasGuardadas));
  }, [metasGuardadas]);

  const addMetas = (item) => {
    // agrega item
  };

  const addCurrent = (item) => {
    // agrega item
  };

  const remove = (itemId) => {
    // remueve item
  };

  return (
    <MetasContext.Provider
      value={{
        metasGuardadas,
        setMetasGuardadas,
        currentMeta,
        setCurrentMeta,
        addMetas,
        addCurrent,
        remove,
      }}
    >
      {children}
    </MetasContext.Provider>
  );
}
