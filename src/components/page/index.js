import React from "react";
import s from "./page.module.css";

function PageDetail({ currentPage }) {
  if (!currentPage)
    return (
      <h3>
        Este espacio es unicamente tuyo, sentite libre de escribir todo lo que
        pensas.
      </h3>
    );
  return (
    <div className={s.detail}>
      <h1>{currentPage.title || "no hay nada"}</h1>
      <h3>¿Qué pasó hoy?</h3>
      <p>{currentPage.text}</p>
      <h3>¿Qué agradezco?</h3>
      <p>{currentPage.gratitude}</p>
    </div>
  );
}

export default PageDetail;
