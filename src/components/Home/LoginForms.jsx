import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { PackSlider } from "../Common/slider/Settings";
import login_img_1 from "../../assets/image/login_img_1.png";
import login_img_2 from "../../assets/image/login_img_2.png";
import login_img_3 from "../../assets/image/login_img_3.png";

const LoginForms = () => {
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
    <section className="login_section">
      <div className="container-fluid know_more">
        <div className="empty_50"></div>
        <div className="row know_more_row justify-content-end">
          <div className=" col-md-4  know_more_col justify-content-end px-0">
            <span className="play_icon">
              <i
                className="fa fa-sharp fa-solid fa-play"
                aria-hidden="true"
              ></i>
            </span>
            <div className="play_icon_text">
              <p>
                Know more about{" "}
                <span>
                  <a href="#">imart</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-5">
        <div className="empty_50"></div>
        <div className="row text-center align-items-center">
          <div className="col-lg-7 col-md-5 login_image_col">
            <div className="login_slider">
              <Slider {...PackSlider}>
                {Loginimg.map((item) => (
                  <div item={item}>
                    <p>{item.heading}</p>
                    <img
                      src={item.image}
                      class="img-fluid loginimg"
                      alt="Login Image"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="col-lg-5 col-md-7 login_form_col">
            <form className="blue_bg">
              <h4 className="text-left">
                Welcome to <span>KINLONG</span>
              </h4>
              <input
                type="text"
                placeholder="Enter Mobile Number/Email"
                name=""
                required
              />
              <input type="password" placeholder="Password" name="" required />
              <p className="text-right py-3">
                {" "}
                <Link to="/otp">Forgot password</Link>{" "}
              </p>
              <input
                type="submit"
                name=""
                value="Login"
                className="login_btn"
              />
              <Link to="/registration" className="Register_btn">
                Register
              </Link>
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

// export const PackSlider = {
//   dots: false,
//   infinite: true,
//   arrows: false,
//   speed: 800,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 4000,
//   adaptiveHeight: true,
//   pauseOnHover: false,
//   fade: true,
//   cssEase: "linear",
// };

export default LoginForms;
