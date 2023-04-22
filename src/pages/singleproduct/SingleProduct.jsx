import React from "react";
import Timer from "../../components/single_product/Timer";
import Quantity from "../../components/single_product/Quantity";
import ColourCode from "../../components/single_product/ColourCode";
import SizeSelect from "../../components/single_product/SizeSelect";
import image28 from "../../assets/image/norton.png";
import image29 from "../../assets/image/truste.png";
import image30 from "../../assets/image/merchant.jpg";
import image31 from "../../assets/image/BBB.png";

const SingleProduct = (props) => {
  return (
    <>
      <div>
        <h3>
          {/* {props.item.heading} ||*/} {props.single?.title}
        </h3>
        <div className="product-rating">
          <span>
            <i className="fa fa-star" aria-hidden="true"></i>
          </span>
          <span>
            <i className="fa fa-star" aria-hidden="true"></i>
          </span>
          <span>
            <i className="fa fa-star" aria-hidden="true"></i>
          </span>
          <span>
            <i className="fa fa-star" aria-hidden="true"></i>
          </span>
          <span>
            <i className="fa fa-star" aria-hidden="true"></i>
          </span>
          <span id="feedback">{props.item.review}</span>
          <span id="sold1">
            <i className="fa fa-fire" aria-hidden="true"></i>
          </span>
          <span id="sold">{props.item.sold}</span>
        </div>
        <p>
          {/* {props.item.description} */}
          {props.single.description}
        </p>
        <p id="stock">Category: {props.single.category}</p>
        <p id="stock">{props.item.detail}</p>
        <p id="stock">{props.item.detail1}</p>
        <p id="stock">{props.item.detail2}</p>
        <p id="stock">{props.item.detail3}</p>
        <span id="price">
          {/* {props.item.rate} */}
          {props.single.price}
        </span>
        <Timer />
      </div>
      <div>
        <ColourCode />
      </div>
      <div>
        <h6 id="price">Size:</h6>
        <SizeSelect />
      </div>
      <div>
        <Quantity />
      </div>
      <div>
        <span>Size Guide </span>
        <span>Compare Color</span>
      </div>
      <div id="buttons">
        <button type="button" className="btn btn-dark btn-lg btn-block add1">
          ADD TO CART
        </button>
        <span id="heart">
          <i className="fa fa-heart-o" aria-hidden="true"></i>
        </span>
        <span>
          <i className="fa fa-share-alt share" aria-hidden="true"></i>
        </span>
      </div>
      <div>
        <input type="checkbox" />
        <span id="terms">I agree with</span>
        <a id="terms" href="#">
          Terms & Conditions
        </a>
      </div>
      <div id="buttons">
        <button type="button" className="btn btn-lg btn-block add2">
          Buy with{" "}
          <span id="shop">
            shop<span id="shop1">Pay</span>
          </span>
        </button>
      </div>
      <div>
        <p id="options">More payment options</p>
        <span>
          <i className="fa fa-eye eyes" aria-hidden="true"></i> 46 Customers are
          viewing this product
        </span>
      </div>
      <div id="poweredby">
        <img src={image28} />
        <img src={image29} />
        <img src={image30} />
        <img src={image31} />
      </div>
      <div>
        <span>
          <i className="fa fa-truck delivery" aria-hidden="true"></i>
          <span className="delivery">Free Shipping</span>
          <i className="fa fa-question-circle" aria-hidden="true"></i>
        </span>
        <p id="packdetails">Free standard shipping on orders over $99</p>
        <p id="packdetails">
          Estimated to be delivered on 02/04/2023 - 15/04/2023.
        </p>
      </div>
      <div>
        <span>
          <i className="fa fa-shield delivery" aria-hidden="true"></i>
          <span className="delivery">Free Returns</span>
          <i className="fa fa-question-circle" aria-hidden="true"></i>
        </span>
        <p id="packdetails">Learn More</p>
      </div>
      <div>
        <span>
          <i
            className="fa fa-exclamation-triangle delivery"
            aria-hidden="true"
          ></i>
          <span className="delivery">Covid-19 Shipping Delay Notice</span>
          <i className="fa fa-question-circle" aria-hidden="true"></i>
        </span>
      </div>
    </>
  );
};

export default SingleProduct;
