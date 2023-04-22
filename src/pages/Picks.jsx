import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Picks = (props) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="slide-content">
      <div
        className="order"
        style={{ backgroundImage: `url(${props.item.image})` }}
      >
        <div className="heading">
          <button className="btn btn2">
            {props.item.title}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Picks;
