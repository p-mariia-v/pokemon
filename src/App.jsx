import { useState } from "react";
import pokemons from "./data/pokemons.js";
import typeColors from "./data/typeColors.js";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import PokemonCard from "./components/PokemonCard";
import "./App.css";
import * as d3 from "d3";

console.log(pokemons);
const types = [...new Set(pokemons.map((pokemon) => pokemon.type))];

function App() {
  const [selectedType, setSelectedType] = useState(null);

  const filteredPokemons = selectedType
    ? pokemons.filter((pokemon) => pokemon.type === selectedType)
    : pokemons;

  return (
    <div>
      <div style={{ padding: 50 }}>
        <h1 style={{ color: "#1f1e1f" }}>Pokemon Card Collection</h1>
        <p>Twenty Pokemon | Ten types</p>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 8,
          margin: "30px 30px 0",
        }}
      >
        <button
          onClick={() => setSelectedType(null)}
          style={{
            padding: "4px 16px",
            borderRadius: 999,
            border: "0px solid #9ca3af",
            backgroundColor: selectedType === null ? "#9ca3af" : "#efefef",
            color: "#1f1e1f",
            fontSize: 12,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          all
        </button>

        {types.map((type) => {
          const color = typeColors[type] ?? "#a8a8a8";
          const isActive = selectedType === type;

          return (
            <button
              key={type}
              onClick={() => setSelectedType(isActive ? null : type)}
              style={{
                padding: "4px 16px",
                borderRadius: 999,
                border: `0px solid ${color}`,
                backgroundColor: isActive ? color : `${color}33`,
                color: "#1f1e1f",
                fontSize: 12,
                fontWeight: 600,
                textTransform: "lowercase",
                cursor: "pointer",
              }}
            >
              {type}
            </button>
          );
        })}
      </div>

      <div className="pokemon-grid">
        {filteredPokemons.map((pokemon) => (
          <PokemonCard
            id={pokemon.id}
            key={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            hp={pokemon.hp}
            attack={pokemon.attack}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
