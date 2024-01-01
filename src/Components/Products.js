import Product from "./Product";
import "./Product.css";

function Products() {
  return (
    <div className="products">
      <Product name="Bajaj Kettle" desc="Thik hi chalti hai" />
      <Product name="Bajaj Tea" desc="Thik hi chalti hogi" />
      <Product name="Bajaj Tea" desc="Thik hi chalti hogi" />
      <Product name="Bajaj Tea" desc="Thik hi chalti hogi" />
      <Product name="Bajaj Tea" desc="Thik hi chalti hogi" />
    </div>
  );
}

export default Products;
