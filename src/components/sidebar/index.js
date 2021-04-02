import { getFirestore } from "../../firebase";
import React, { useEffect } from "react";
import { useComoEstasContext } from "../../context/como-estas-context";
import s from "./sidebar.module.css";

function Sidebar() {
  const { diaryPages, setCurrentPage, setAddPage } = useComoEstasContext();

  const handleClick = (page) => {
    setCurrentPage(page);
    setAddPage(false);
  };
  return (
    <aside>
      <button onClick={() => setAddPage(true)}>Agregar pagina</button>
      {diaryPages.map((page, i) => (
        <div onClick={() => handleClick(page)} className={s.card} key={i}>
          <h3>{page.title}</h3>
          <p>{page.gratitude}</p>
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;
