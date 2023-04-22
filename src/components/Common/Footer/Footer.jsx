import React from "react";
import img from "../../../assets/image/master.png";
import img1 from "../../../assets/image/visa.png";
import img2 from "../../../assets/image/paytm.png";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Footer = () => {
  const [person, setPerson] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        setPerson(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="end">
      <div className="container gap">
        <div className="row">
          <div className="col-md-3">
            <h5>DRESS</h5>
            <p id="quality">
              design which can be worn with various accessories to suit
              different occasions.
            </p>
          </div>
          <div className="col-md-2">
            <h5>SHOP</h5>
            <h6>
              <a id="next" href="#">
                All Collections
              </a>
            </h6>
            <h6>
              <a id="next" href="#">
                Winter Edition
              </a>
            </h6>
            <h6>
              <a id="next" href="#">
                Discount
              </a>
            </h6>
          </div>
          <div className="col-md-2">
            <h5>COMPANY</h5>
            <h6>
              <a id="next" href="#">
                About Us
              </a>
            </h6>
            <h6>
              <a id="next" href="#">
                Contact
              </a>
            </h6>
            <h6>
              <a id="next" href="#">
                Afflicates
              </a>
            </h6>
          </div>
          <div className="col-md-2">
            <h5>SUPPORT</h5>
            <h6>
              <a id="next" href="#">
                FAQs
              </a>
            </h6>
            <h6>
              <a id="next" href="#">
                Cookie Policy
              </a>
            </h6>
            <h6>
              <a id="next" href="#">
                Terms of Use
              </a>
            </h6>
          </div>
          <div className="col-md-3">
            <h5>PAYMENTMETHODS</h5>
            <div className="row lay">
              <div className="column">
                <a
                  href="https://www.mastercard.co.in/en-in.html"
                  target="_blank"
                >
                  <img src={img} />
                </a>
              </div>
              <div className="column">
                <a href="https://www.visa.co.in/" target="_blank">
                  <img src={img1} />
                </a>
              </div>
              <div className="column">
                <a href="https://paytm.com/" target="_blank">
                  <img src={img2} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p id="bottom">Copyright &copy;2022 Nostra.All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
