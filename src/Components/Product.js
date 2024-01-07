import "./Product.css";

function Product({name, desc, handleClick, isSelected }) {
  return (
    <div className={isSelected?"activeProduct":"product"} onClick={handleClick}>
      <h1>{name}</h1>
      <p>
        {desc}
      </p>
    </div>
  );
}

export default Product;
