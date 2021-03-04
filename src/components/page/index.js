import React from "react";

function PageDetail({ currentPage }) {
  return (
    <div>
      <h1>{currentPage || "no hay nada"}</h1>
      <h3>¿Qué pasó hoy?</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ad a quis
        quasi laudantium obcaecati qui, nostrum officiis totam ea nobis, modi,
        deleniti repellat perspiciatis minima quidem. Sed dignissimos nostrum
        illum! Veniam corporis omnis magnam accusamus, provident vitae. Nam,
        explicabo perferendis modi dignissimos nobis illum delectus aut quod
        quibusdam ducimus!
      </p>
      <h3>¿Qué agradezco?</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo dolorum
        animi quidem dolorem perspiciatis exercitationem qui, atque doloremque
        minima nulla.
      </p>
    </div>
  );
}

export default PageDetail;
