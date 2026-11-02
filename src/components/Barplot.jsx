import Rectangle from "./Rectangle";

const Barplot = ({ color }) => {
  return (
    <div>
      <Rectangle color={color} />
      <Rectangle color={color} />
      <Rectangle color={color} />
      <Rectangle color={color} />
    </div>
  );
};

export default Barplot;
