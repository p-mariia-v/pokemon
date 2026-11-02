const PokemonCard = ({ name, type, hp, attack }) => {
  return (
    <div
      style={{
        width: "100%",
        height: 300,
        backgroundColor: "#f5f5f5",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#d5d5d5",
        borderRadius: 4,
        boxShadow: "2px 2px 10px rgba(78, 78, 78, 0.3)",
        margin: 4,
      }}
    >
      <h2>{name}</h2>
      <p>Type: {type}</p>
      <p>HP: {hp}</p>
      <p>Attack: {attack}</p>
    </div>
  );
};

export default PokemonCard;
