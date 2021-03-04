import React from "react";
import InputPage from "../inputpage";
import PageDetail from "../page";

function MainPage({
  currentPage,
  add,
  setDiaryPages,
  setAddPage,
  setCurrentPage,
  diaryPages,
}) {
  return (
    <main>
      {add ? (
        <InputPage
          setDiaryPages={setDiaryPages}
          setAddPage={setAddPage}
          setCurrentPage={setCurrentPage}
          diaryPages={diaryPages}
        />
      ) : (
        <PageDetail currentPage={currentPage} />
      )}
    </main>
  );
}

export default MainPage;
