import { getFirestore } from "../firebase";
import React, { useContext, useEffect, useState } from "react";

export const ComoEstasContext = React.createContext();

export const useComoEstasContext = () => useContext(ComoEstasContext);

export default function ComoEstasProvider({ children }) {
  const [diaryPages, setDiaryPages] = useState([]);

  const [currentPage, setCurrentPage] = useState(diaryPages[0]);
  const [addPage, setAddPage] = useState(false);
  const [editor, setEditor] = useState(false);

  useEffect(() => {
    console.log("alskhdaslkhdlaksd");
    let localDiaryPages = localStorage.getItem("diaryPages");
    if (localDiaryPages) {
      setDiaryPages(JSON.parse(localDiaryPages));
    } else {
      localStorage.setItem("diaryPages", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("diaryPages", JSON.stringify(diaryPages));
    (async function () {
      const db = getFirestore();
      const diario = db.collection("diario");
      const docs = await diario.get();
      console.log(docs.size);
      docs.forEach((doc) => console.log(doc.data()));
    })();
  }, [diaryPages]);

  return (
    <ComoEstasContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        addPage,
        setDiaryPages,
        setAddPage,
        diaryPages,
        editor,
        setEditor,
      }}
    >
      {children}
    </ComoEstasContext.Provider>
  );
}
