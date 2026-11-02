import { useState } from "react";
import Slider from "./Slider";
import typeColors from "../data/typeColors.js";

const PokemonCard = ({ id, name, type, hp, attack }) => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  const typeColor = typeColors[type] ?? "#a8a8a8";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: "100%",
        height: 300,
        backgroundColor: "#f5f5f5",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#f5f5f5",
        borderRadius: 10,
        boxShadow: isHovered
          ? `5px 5px 20px ${typeColor}`
          : "5px 5px 15px rgba(78, 78, 78, 0.3)",
        transition: "box-shadow 0.25s ease",
        margin: 4,
        paddingTop: 40,
      }}
    >
      <img
        src={imageUrl}
        alt={name}
        style={{ width: 125, height: 125, imageRendering: "pixelated" }}
      />
      <h2 style={{ color: "#373737" }}>{name}</h2>
      <p>Type: {type}</p>
      <Slider label="HP" value={hp} max={160} />
      <Slider label="Attack" value={attack} max={160} />
    </div>
  );
};

export default PokemonCard;
