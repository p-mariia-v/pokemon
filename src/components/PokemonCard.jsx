import Slider from "./Slider";

const PokemonCard = ({ id, name, type, hp, attack }) => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  return (
    <div
      style={{
        width: "100%",
        height: 300,
        backgroundColor: "#f5f5f5",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#f5f5f5",
        borderRadius: 10,
        boxShadow: "5px 5px 15px rgba(78, 78, 78, 0.3)",
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
