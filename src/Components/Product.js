import "./Product.css";

function Product({ name, desc }) {
  function handleClick() {
    window.alert("hello");
  }
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
