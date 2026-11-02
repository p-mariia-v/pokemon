const Rectangle = ({ color }) => {
  return (
    <div
      style={{
        width: 120,
        height: 60,
        backgroundColor: color,
        borderRadius: 4,
        margin: 4,
      }}
    />
  );
};

export default Rectangle;
