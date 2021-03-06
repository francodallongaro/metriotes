import React, { useState } from "react";
import { useComoEstasContext } from "../../context/como-estas-context";
import s from "./page.module.css";

function Page() {
  const {
    currentPage,
    editor,
    setEditor,
    setDiaryPages,
    setCurrentPage,
  } = useComoEstasContext();

  const [input, setInput] = useState(currentPage);

  const onClick = () => {
    setEditor((prev) => !prev);
  };

  const onClickGuardar = () => {
    setDiaryPages((prev) =>
      prev.map((diary) => (diary.id === input.id ? input : diary))
    );
    setCurrentPage(input);
    setEditor((prev) => !prev);
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {editor ? (
        <button onClick={onClickGuardar}>Guardar</button>
      ) : (
        <button onClick={onClick}>Edit</button>
      )}
      {editor ? (
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={input.title}
        />
      ) : (
        <h1>{currentPage.title}</h1>
      )}

      <h3>¿Qué pasó hoy?</h3>
      <p>{currentPage.text}</p>
      <h3>¿Qué agradezco?</h3>
      <p>{currentPage.gratitude}</p>
    </div>
  );
}

function PageDetail() {
  const { currentPage } = useComoEstasContext();

  if (!currentPage)
    return (
      <h3>
        Este espacio es unicamente tuyo, sentite libre de escribir todo lo que
        pensas.
      </h3>
    );

  return (
    <div className={s.detail}>
      <Page />
    </div>
  );
}

export default PageDetail;
