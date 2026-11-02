import { useState } from "react";
import pokemons from "./data/pokemons.js";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import PokemonCard from "./components/PokemonCard";
import "./App.css";
import * as d3 from "d3";

console.log(pokemons);

function App() {
  const [color, setColor] = useState("dodgerblue");
  console.log("Pokemon list:", pokemons);

  return (
    <div className="pokemon-grid">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          name={pokemon.name}
          type={pokemon.type}
          hp={pokemon.hp}
          attack={pokemon.attack}
        />
      ))}
    </div>
  );
}

export default App;

const data = [4, 8, 15, 16, 23, 42];
console.log("Max:", d3.max(data));
