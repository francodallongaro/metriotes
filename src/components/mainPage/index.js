import React from "react";
import { useComoEstasContext } from "../../context/como-estas-context";
import InputPage from "../inputpage";
import PageDetail from "../page";

function MainPage() {
  const { addPage } = useComoEstasContext();
  return (
    <main>
      {addPage ? (
        <InputPage
        // setDiaryPages={setDiaryPages}
        // setAddPage={setAddPage}
        // setCurrentPage={setCurrentPage}
        // diaryPages={diaryPages}
        />
      ) : (
        <PageDetail
        // currentPage={currentPage}
        // setDiaryPages={setDiaryPages}
        // setCurrentPage={setCurrentPage}
        />
      )}
    </main>
  );
}

export default MainPage;
