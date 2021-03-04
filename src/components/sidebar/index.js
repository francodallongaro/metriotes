import React from "react";
import s from "./sidebar.module.css";

function Sidebar({ diaryPages, setCurrentPage, setAddPage }) {
  const handleClick = (page) => {
    setCurrentPage(page);
    setAddPage(false);
  };
  return (
    <aside>
      <button onClick={() => setAddPage(true)}>Agregar pagina</button>
      {diaryPages.map((page, i) => (
        <div onClick={() => handleClick(page)} className={s.card} key={i}>
          <h3>{page}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
            delectus dolorum earum soluta eum aliquam!
          </p>
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;
