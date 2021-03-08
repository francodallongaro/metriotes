import React, { useState } from "react";
import s from "./inputpage.module.css";

function InputPage({ setDiaryPages, setAddPage, setCurrentPage, diaryPages }) {
  const [input, setInput] = useState({
    title: "",
    text: "",
    gratitude: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDiaryPages((prev) => [input, ...prev]);
    setAddPage(false);
    setCurrentPage(input);
  };

  return (
    <div className={s.inputpage}>
      <form onSubmit={handleSubmit} autocomplete="off">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Título"
          name="title"
          value={input.title}
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Empezá a contar tu día"
          name="text"
          value={input.text}
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Agradeciemiento"
          name="gratitude"
          value={input.gratitude}
        />

        <button>Agregar</button>
      </form>
    </div>
  );
}

export default InputPage;
