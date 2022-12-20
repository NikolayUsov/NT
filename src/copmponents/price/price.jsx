import "./price.scss";

export default function Price({ type, price, setOrderValues, setIsOpen }) {
  const handleClickToPrice = () => {
    setOrderValues({ type, price });
    setIsOpen(true);
  };

  return (
    <div
      className={type === "buy" ? "green" : "red"}
      onClick={handleClickToPrice}
    >
      <b>{type.toUpperCase()}</b>
      <h3>{price}</h3>
    </div>
  );
}
