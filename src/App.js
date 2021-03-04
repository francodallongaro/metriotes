import "./App.css";
import PageDetail from "./components/page";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import { useState } from "react";
import MainPage from "./components/mainPage";

function App() {
  const [diaryPages, setDiaryPages] = useState([
    "pagina1",
    "pagina2",
    "pagina3",
  ]);

  const [currentPage, setCurrentPage] = useState(diaryPages[0]);
  const [addPage, setAddPage] = useState(false);

  return (
    <>
      <Navbar />

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
    </>
  );
}

export default App;
