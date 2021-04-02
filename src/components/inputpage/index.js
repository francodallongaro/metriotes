import { getFirestore } from "../../firebase";
import React, { useState } from "react";
import { useComoEstasContext } from "../../context/como-estas-context";
import s from "./inputpage.module.css";

function InputPage() {
  const a = useComoEstasContext(),
    { setDiaryPages, setAddPage, setCurrentPage } = useComoEstasContext();
  console.log(`a`, a);
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
    setDiaryPages((prev) => [
      { ...input, id: Math.floor(Math.random() * 9999999) },
      ...prev,
    ]);

    const db = getFirestore();
    db.collection("diario")
      .doc()
      .set({ ...input, user: "userid" });

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
        <textarea
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
