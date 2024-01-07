import Product from "./Product";
import "./Product.css";
import { useState } from "react";
import productList from "../Data/productList";

function Products() {
  const [message, setMessage] = useState("");
  function handleClick(val) {
    setMessage(val);
  }
  return (
    <div>
      <div className="products">
        {productList.map((prod) => {
          return (
            <Product
              key = {prod.name}
              name={prod.name}
              desc={prod.desc}
              handleClick={() => {
                handleClick(prod.name);
              }}
              isSelected={message === prod.name}
            />
          );
        })}
      </div>
      <p>{message}</p>
    </div>
  );
}

export default Products;
