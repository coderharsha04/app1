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
    else {
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
          isSelected={message === "First Product clicked"}
        />
        <Product
          name="Bajaj Tea"
          desc="Thik hi chalti hogi"
          handleClick={() => {
            handleClick("2");
          }}
          isSelected={message === "Second Product clicked"}
        />
        <Product
          name="Bajaj Roaster"
          desc="Thik hi chalti hogi"
          handleClick={() => {
            handleClick("3");
          }}
          isSelected={message === "Third Product clicked"}
        />
      </div>
      <p>{message}</p>
    </div>
  );
}

export default Products;
