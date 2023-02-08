import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Adopt Me :)"),
  //   React.createElement(Pet, {
  //     animal: "Perro",
  //     name: "Canela",
  //     breed: "Kilterrier",
  //   }),
  //   React.createElement(Pet, {
  //     animal: "Pato",
  //     name: "Pata China",
  //     breed: "Flor de Haba",
  //   }),
  //   React.createElement(Pet, {
  //     animal: "Gato",
  //     name: "Caqui",
  //     breed: "Gato con Botas",
  //   }),
  //   React.createElement(Pet, {
  //     animal: "Perro",
  //     name: "Sombra",
  //     breed: "Kilterrier",
  //   })
  // );

  <div>
    <h1>Adopt Me :</h1>
    <Pet name="canela" animal="perro" breed="kilterrier" />
    <Pet name="sombra" animal="perro" breed="kilterrier" />
    <Pet name="caqui" animal="gato" breed="gato con botas" />
  </div>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
