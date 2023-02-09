import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <BrowserRouter>
      <h1>Adopt Me :</h1>
      <Routes>
        <Route path="/details/:id" />
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

// TODO llevarse al form a un componente separado
