import React, { useState } from "react";

//create your first component
export function Home() {

  const [selectedColor, setSelectedColor] = useState("red");

  const cambiarColor = () => {
    if (selectedColor === "red") {
      setSelectedColor("yellow");
    } else if (selectedColor === "yellow") {
      setSelectedColor("green");
    } else {
      setSelectedColor("red");
    }
  };

  return (
    <>
      <div className="contenedorSemaforo">
        <div className="paloSemaforo"></div>
        <div className="semaforo">
          <div className={"light red" + ((selectedColor === "red") ? " encender-red" : "")} onClick={() => setSelectedColor("red")}> </div>
          <div className={"light yellow" + ((selectedColor === "yellow") ? " encender-yellow" : "")} onClick={() => setSelectedColor("yellow")} > </div>
          <div className={"light green" + ((selectedColor === "green") ? " encender-green" : "")} onClick={() => setSelectedColor("green")}> </div>
        </div>
      </div>

      <button className="boton" onClick={cambiarColor}>
        Cambiar color
      </button>


    </>
  );
};



export default Home;