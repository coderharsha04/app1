import "./Product.css";

function Product({ name, desc, handleClick }) {
  return (
    <div className="product" onClick={handleClick}>
      <h1>{name}</h1>
      <p className="description">
        {desc}
      </p>
    </div>
  );
}

export default Product;
