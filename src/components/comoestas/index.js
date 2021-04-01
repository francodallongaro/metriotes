import { getFirestore } from "../../firebase";
import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar";
import MainPage from "../mainPage";
import { useComoEstasContext } from "../../context/como-estas-context";

function ComoEstas() {
  // const [diaryPages, setDiaryPages] = useState([]);

  // const [currentPage, setCurrentPage] = useState(diaryPages[0]);
  // const [addPage, setAddPage] = useState(false);

  // useEffect(() => {
  //   let localDiaryPages = localStorage.getItem("diaryPages");
  //   if (localDiaryPages) {
  //     setDiaryPages(JSON.parse(localDiaryPages));
  //   } else {
  //     localStorage.setItem("diaryPages", JSON.stringify([]));
  //   }
  // }, []);

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
  const a = useComoEstasContext();
  console.log(`a`, a);
  return (
    <div className="layout">
      <Sidebar />
      <MainPage />
    </div>
  );
}

export default ComoEstas;
