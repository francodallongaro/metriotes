import { getFirestore } from "../firebase";
import React, { useContext, useEffect, useState } from "react";

export const ComoEstasContext = React.createContext();

export const useComoEstasContext = () => useContext(ComoEstasContext);

export default function ComoEstasProvider({ children }) {
  const [diaryPages, setDiaryPages] = useState([]);

  const [currentPage, setCurrentPage] = useState(diaryPages[0]);
  const [addPage, setAddPage] = useState(false);
  const [editor, setEditor] = useState(false);

  // useEffect(() => {
  //   console.log("alskhdaslkhdlaksd");
  //   let localDiaryPages = localStorage.getItem("diaryPages");
  //   if (localDiaryPages) {
  //     setDiaryPages(JSON.parse(localDiaryPages));
  //   } else {
  //     localStorage.setItem("diaryPages", JSON.stringify([]));
  //   }
  // }, []);

  useEffect(() => {
    const array = [];
    const db = getFirestore();
    db.collection("diario")
      .get()
      .then((doc) => {
        if (doc) {
          doc.forEach((page) => {
            array.push({ id: page.id, ...page.data() });
          });
          setDiaryPages(array);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("diaryPages", JSON.stringify(diaryPages));
  //   (async function () {
  //     const db = getFirestore();
  //     const diario = db.collection("diario");
  //     const docs = await diario.get();
  //     console.log(docs.size);
  //     docs.forEach((doc) => console.log(doc.data()));
  //   })();
  // }, [diaryPages]);

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
