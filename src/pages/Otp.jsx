import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import login_img_1 from "./../assets/image/login_img_1.png";
import login_img_2 from "./../assets/image/login_img_2.png";
import login_img_3 from "./../assets/image/login_img_3.png";
import { PackSlider } from "../components/Common/slider/Settings";
const Otp = () => {
  const Loginimg = [
    {
      image: login_img_1,
      heading: "Customize Your Order",
    },
    {
      image: login_img_2,
      heading: "Catagorized Interface",
    },
    {
      image: login_img_3,
      heading: "Secured Payment",
    },
  ];
  return (
    <section className="otp_section">
      <div className="container-fluid">
        <div className="empty_50"></div>
        <div className="row">
          <div className="col-md-4  left_arrow_col justify-content-start">
            <Link
              to="/loginforms"
              className="leftarrow_icon text-white text-decoration-none"
            >
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="container know_more">
        <div className="empty_50"></div>
        <div className="row text-center mb-5 align-items-center">
          <div className="col-md-7 login_image_col">
            <Slider {...PackSlider}>
              {Loginimg.map((item) => (
                <div>
                  <p>{item.heading}</p>
                  <img
                    src={item.image}
                    className="img-fluid loginimg"
                    alt="Login Image"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="col-md-5 login_form_col">
            <form className="blue_bg otp_form px-4">
              <h6 className="text-left">Enter Your OTP Number</h6>

              <div className="form_input">
                <input
                  type="tel"
                  placeholder="+91"
                  name=""
                  required
                  className="form-control"
                />
                <i className="fa fa-mobile" aria-hidden="true"></i>
              </div>
              <div className="form_input">
                <input
                  type="Number"
                  placeholder="****"
                  name=""
                  required
                  className="form-control"
                />
                <i className="fa fa-lock" aria-hidden="true"></i>
              </div>

              <p className="text-right py-3">
                {" "}
                <a href="#">OTP is avil for 2mins</a>{" "}
              </p>
              <button type="submit" className="submit_btn">
                Submit
              </button>
              <p className="text-right facing_pblm">
                {" "}
                <Link to="/facingissue">Facing an problem?</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Otp;
