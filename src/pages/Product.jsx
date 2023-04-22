import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <>
      <Link to={`/single/${props.item.id}`}>
        <div className="slide-content swiper-slide">
          <div className="dress">
            <div className="coloumn sale">{props.item.sale}</div>
            <img id="prod_img" src={props.item.image} />
            <div className="head">
              <div className="detail">
                <p id="details">{props.item.description}</p>
                <p id="price">
                  {props.item.price} <del id="off">{props.item.category}</del>
                </p>
              </div>
              <div className="icon1">
                <i className="fa fa-shopping-cart icon" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </Link>

      <div className="dresses-pagination"></div>
    </>
  );
};

export default Product;
