import React, { useState } from "react";

function Formulario() {
  const [perguntas, setPerguntas] = useState([
    { id: 1, text: "Qual é o seu nome?", type: "text" },
    { id: 2, text: "Qual é a sua idade?", type: "number" },
    {
      id: 3,
      text: "Qual é a sua cor favorita?",
      type: "select",
      opcao: ["Vermelho", "Verde", "Azul"],
    },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.forEach((value, key) => {
      console.log(key, value);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {perguntas.map((pergunta) => {
        return (
          <div id={pergunta.id}>
            <label>{pergunta.text}</label>
            {pergunta.type === "select" ? (
              <select name={pergunta.text}>
                {pergunta.opcao.map((opcao, index) => {
                  return (
                    <option key={index} value={opcao}>
                      {opcao}
                    </option>
                  );
                })}
              </select>
            ) : (
              <input type={pergunta.type} name={pergunta.text} />
            )}
          </div>
        );
      })}
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
