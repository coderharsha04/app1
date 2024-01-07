import Product from "./Product";
import "./Product.css";
import { useState } from "react";

function Products() {
  const [message, setMessage] = useState("");
  function handleClick(val) {
    if (val === "1") {
      setMessage("First Product clicked");
    }
    else if (val === "2") {
      setMessage("Second Product clicked");
    }
    else{
      setMessage("Third Product clicked");
    }
  }
  return (
    <div>
      <div className="products">
        <Product
          name="Bajaj Kettle"
          desc="Thik hi chalti hai"
          handleClick={() => {
            handleClick("1");
          }}
        />
        <Product
          name="Bajaj Tea"
          desc="Thik hi chalti hogi"
          handleClick={() => {
            handleClick("2");
          }}
        />
        <Product
          name="Bajaj Roaster"
          desc="Thik hi chalti hogi"
          handleClick={() => {
            handleClick("3");
          }}
        />
      </div>
      <p>{message}</p>
    </div>
  );
}

export default Products;
