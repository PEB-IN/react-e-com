import React, { useState } from "react";

const SizeSelect = () => {
  const [size, setsize] = useState("M");
  const sizes = ["S", "XS", "M", "L", "XL", "XXL"];

  const Addtocart = (e) => {
    e.preventDefault();
    console.log(size, "selected size");
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={Addtocart}>
        Addtocart
      </button>
      <p>Select your size:</p>
      <div id="group">
        {sizes.map((item, i) => (
          <div id="size" key={i}>
            <input
              id={item}
              type="radio"
              name="two"
              checked={size === item}
              onChange={(e) => setsize(e.target.id)}
            />
            <label className="sizebox" htmlFor={item}>
              {item}
            </label>
          </div>
        ))}
      </div>

      <p id="output"></p>
    </div>
  );
};

export default SizeSelect;
