import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar";
import MainPage from "../mainPage";

function ComoEstas() {
  const [diaryPages, setDiaryPages] = useState([]);

  const [currentPage, setCurrentPage] = useState(diaryPages[0]);
  const [addPage, setAddPage] = useState(false);

  useEffect(() => {
    let localDiaryPages = localStorage.getItem("diaryPages");
    if (localDiaryPages) {
      setDiaryPages(JSON.parse(localDiaryPages));
    } else {
      localStorage.setItem("diaryPages", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("diaryPages", JSON.stringify(diaryPages));
  }, [diaryPages]);

  return (
    <div className="layout">
      <Sidebar
        diaryPages={diaryPages}
        setCurrentPage={setCurrentPage}
        setAddPage={setAddPage}
      />
      <MainPage
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        add={addPage}
        setDiaryPages={setDiaryPages}
        setAddPage={setAddPage}
        diaryPages={diaryPages}
      />
    </div>
  );
}

export default ComoEstas;
