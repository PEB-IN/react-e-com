import React from "react";
import { Link } from "react-router-dom";
import login_img_1 from "./../assets/image/login_img_1.png";
import login_img_2 from "./../assets/image/login_img_2.png";
import login_img_3 from "./../assets/image/login_img_3.png";
import Slider from "react-slick";
import { PackSlider } from "../components/Common/slider/Settings";

const Recover = () => {
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
              to="#"
              className="leftarrow_icon text-white text-decoration-none"
            >
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="container know_more">
        <div className="empty_100"></div>
        <div className="row align-items-center text-center mb-5 align-items-center">
          <div className="col-md-7 login_image_col">
            <div className="login_slider">
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
          </div>
          <div className="col-md-5 login_form_col">
            <form className="recovery_form px-4">
              <h6 className="text-left">Recovery Your Password</h6>

              <div className="form_input">
                <input
                  type="password"
                  placeholder="New password"
                  name=""
                  required
                />
                <i className="fa fa-lock" aria-hidden="true"></i>
              </div>
              <div className="form_input">
                <input
                  type="password"
                  placeholder="Confirm Your password"
                  name=""
                  required
                />
                <i className="fa fa-lock" aria-hidden="true"></i>
              </div>
              <button type="submit" className="submit_btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recover;
