import React from "react";
import { createRoot } from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me :)"),
    React.createElement(Pet, {
      animal: "Perro",
      name: "Canela",
      breed: "Kilterrier",
    }),
    React.createElement(Pet, {
      animal: "Pato",
      name: "Pata China",
      breed: "Flor de Haba",
    }),
    React.createElement(Pet, {
      animal: "Gato",
      name: "Caqui",
      breed: "Gato con Botas",
    }),
    React.createElement(Pet, {
      animal: "Perro",
      name: "Sombra",
      breed: "Kilterrier",
    })
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
