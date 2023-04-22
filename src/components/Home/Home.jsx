import React from "react";
import Slider from "react-slick";
import SliderWrapper from "../Common/slider/_SlickSliderStyle";
import {
  Brandsbanner,
  Mainbanner,
  Academybanner,
  Products,
} from "../Common/slider/Settings";
import LoginForms from "./LoginForms";
import Otp from "../../pages/Otp";
import FacingIssue from "../../pages/FacingIssue";
import Registration from "../../pages/Registration";
import Recover from "../../pages/Recover";
import Summer from "../../pages/Banner";
import Brands from "../../pages/Brands";
import Card from "../../pages/Card";
import Picks from "../../pages/Picks";
import Product from "../../pages/Product";
import Adds from "../../pages/Adds";
import image1 from "../../assets/image/group-gcca0dda7a_1920.jpg";
import image2 from "../../assets/image/children-g84e280728_1920.jpg";
import image3 from "../../assets/image/man-gd192732a7_1280.jpg";
import image4 from "../../assets/image/doodoosonic-0t7PNNZlTC0-unsplash.jpg";
import image5 from "../../assets/image/helena-lopes-e3OUQGT9bWU-unsplash.jpg";
import image6 from "../../assets/image/Chanel.png";
import image7 from "../../assets/image/Honda.png";
import image8 from "../../assets/image/Yamaha.png";
import image9 from "../../assets/image/images.png";
import image10 from "../../assets/image/D$G.png";
import image11 from "../../assets/image/download.png";
import image12 from "../../assets/image/download (1).png";
import image13 from "../../assets/image/Benz.png";
import image14 from "../../assets/image/man-g440f1723f_1920.jpg";
import image15 from "../../assets/image/male-gccc934111_1920.jpg";
import image16 from "../../assets/image/mustache-g1af3c6819_1920.jpg";
import image17 from "../../assets/image/img.jpg";
import image18 from "../../assets/image/austin-wade-d2s8NQ6WD24-unsplash.jpg";
import image19 from "../../assets/image/luobulinka-FO4mQZi1c0M-unsplash.jpg";
import image20 from "../../assets/image/img2.jpg";
import image21 from "../../assets/image/img1.jpg";
import axios from "axios";
import Loader from "../Common/Loader/Loader";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Home = () => {
  const params = useParams();
  let data = [
    { name: "Joe", age: 17 },
    { name: "Bob", age: 17 },
    { name: "Carl", age: 35 },
  ];

  // const unique = [...new Set(data.map(item => item.age))];
  // console.log(unique);

  const [online, setOnline] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        //console.log(res.data.slice(5,9));
        setOnline(res.data.slice(5, 9));
        const unique = [...new Set(res.data.map((item) => item.category))];
        setCategory(unique);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  // console.log(category);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        setProducts(res.data.slice(0, 4));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const first = [
    {
      image: image1,
    },
    {
      image: image2,
    },
    {
      image: image3,
    },
    {
      image: image4,
    },
    {
      image: image5,
    },
  ];
  const branding = [
    {
      image: image6,
    },
    {
      image: image7,
    },
    {
      image: image8,
    },
    {
      image: image9,
    },
    {
      image: image10,
    },
    {
      image: image11,
    },
    {
      image: image12,
    },
    {
      image: image13,
    },
    {
      image: image6,
    },
  ];

  const review = [
    {
      icon: <i className="fa fa-truck" aria-hidden="true"></i>,
      heading: "Origial products",
      content:
        "We provide money back guarantee if the product are not original",
    },
    {
      icon: <i className="fa fa-truck" aria-hidden="true"></i>,
      heading: "Satisfaction Guarantee",
      content: "Exchange the product you've purchased if it dosen't it on you",
    },
    {
      icon: <i className="fa fa-truck" aria-hidden="true"></i>,
      heading: "New Arrival Everday",
      content: "We updates out collection almost everyday",
    },
    {
      icon: <i className="fa fa-truck" aria-hidden="true"></i>,
      heading: "Fast & Free Shipping",
      content: "We offer fast and free shipping for our loyal customers",
    },
  ];

  const slide = [
    {
      image: image14,
      button: "Best Seller",
    },
    {
      image: image15,
      button: "Shop Men",
    },
    {
      image: image16,
      button: "Shop Women",
    },
    {
      image: image17,
      button: "Shop Casual",
    },
    {
      image: image18,
      button: "Best Seller",
    },
  ];

  const prod = [
    {
      image: image17,
      detail: "Leather Coat",
      cost: "$32",
    },
    {
      image: image18,
      detail: "Stylish Coat",
      cost: "$82",
    },
    {
      image: image19,
      detail: "Buffy",
      cost: "$56",
    },
    {
      image: image20,
      detail: "Checked",
      cost: "$65",
      offer: "$72",
      sale: "SALE",
    },
  ];

  const last = {
    image: image21,
    heading: "LIMITED OFFER",
    content: "35% off only this friday and get special gift",
  };

  return (
    <>
      <section className="pic1">
        <div className="container">
          <Slider {...Mainbanner}>
            {first.map((item, i) => (
              <Summer key={i} item={item} />
            ))}
          </Slider>
        </div>
      </section>

      <section>
        <div className="container">
          <div>
            <h4 id="sub">Brands</h4>
          </div>
          <Slider {...Brandsbanner}>
            {branding.map((item, i) => (
              <Brands key={i} item={item} />
            ))}
          </Slider>
        </div>
      </section>

      <section>
        <LoginForms />
        <Otp />
        <FacingIssue />
        <Registration />
        <Recover />
      </section>

      <section>
        <div className="space"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 id="customer">
                We provide best
                <br /> customer experiences
              </h3>
            </div>
            <div className="col-md-6 vertical">
              <p id="shoping">
                We ensure our customers have the best shoping experience
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="products">
          <div className="container">
            <div className="row">
              {review.map((item, i) => (
                <Card key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Currated Picks Image*/}

      <section>
        <div className="currated">
          <div className="container">
            <h3>Currated Picks</h3>
            {loading ? (
              "Loading"
            ) : (
              <>
                <Slider {...Academybanner}>
                  {products.map((item, i) => (
                    <Picks key={i} item={item} />
                  ))}
                </Slider>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Products */}

      <section>
        <div className="dresses">
          <div className="slick-dots-wrapper">
            <div className="js-slick-dots"></div>
          </div>
          <div className="container">
            <h3>Products</h3>
            {loading ? (
              <Loader />
            ) : (
              <>
                <SliderWrapper>
                  <Slider {...Products}>
                    {online.map((item, i) => (
                      <Product key={i} item={item} />
                    ))}
                  </Slider>
                </SliderWrapper>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="lastone">
        <div className="container">
          <div className="row">
            <Adds item={last} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
