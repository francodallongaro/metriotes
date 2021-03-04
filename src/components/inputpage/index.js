import React, { useState } from "react";

function InputPage({ setDiaryPages, setAddPage, setCurrentPage, diaryPages }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDiaryPages((prev) => [input, ...prev]);
    setAddPage(false);
    setCurrentPage(input);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="" id="" />
        <button>Agregar</button>
      </form>
    </div>
  );
}

export default InputPage;
