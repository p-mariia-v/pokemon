import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import PokemonCard from "./components/PokemonCard";
import Barplot from "./components/Barplot";
import "./App.css";

function App() {
  const [color, setColor] = useState("dodgerblue");

  return (
    <div
      style={{
        display: "flex",
        gap: 24,
        margin: 30,
      }}
    >
      <PokemonCard />
    </div>
  );
}

export default App;

import * as d3 from "d3";

const data = [4, 8, 15, 16, 23, 42];
console.log("Max:", d3.max(data));
