import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Product4 } from "../Common/slider/Settings";
import SingleProduct from "../../pages/singleproduct/SingleProduct";
import ProductImage from "../../pages/ProductImage";
import girl from "../../assets/image/img.jpg";
import image23 from "../../assets/image/raamin-ka-uR51HXLO7G0-unsplash.jpg";
import image24 from "../../assets/image/napat-saeng-mVGW8j9rrC4-unsplash.jpg";
import image25 from "../../assets/image/alexandru-zdrobau-juESZxMhtXk-unsplash.jpg";
import image26 from "../../assets/image/alireza-dolati-OVS3rqXq9gg-unsplash.jpg";
import image27 from "../../assets/image/mike-von-7qW_FmptFzQ-unsplash.jpg";
import SingleProductLeft from "./SingleProductLeft";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext } from "@mui/lab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import image32 from "../../assets/image/diah-ayu-mTw2fL9Pwh8-unsplash.jpg";
import image33 from "../../assets/image/h-f-e-co-studio-QqAD-IPX4xw-unsplash.jpg";
import image34 from "../../assets/image/nikhil-uttam-NNbMVCMOEb4-unsplash.jpg";
import image35 from "../../assets/image/oleg-ivanov-sg_gRhbYXhc-unsplash.jpg";
import image36 from "../../assets/image/nikhil-uttam-QrOdhsMAQw8-unsplash.jpg";
import image37 from "../../assets/image/suheyl-burak-p7I07kuPSyU-unsplash.jpg";
import image38 from "../../assets/image/anna-logacheva-d00FZ5Yfhxc-unsplash.jpg";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const [value, setValue] = useState("1");
  const [singleproduct, setsingleproduct] = useState({});
  const params = useParams();

  const [multiple, setMultiple] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setMultiple(res.data);
    });
  }, []);

  // console.log(params);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${params.id}`).then((res) => {
      setsingleproduct(res.data);
      console.log(res.data, "from single product");
    });
  }, [params.id]);

  const singleproductimages = {
    image: girl,
    images: [image23, image24, image25, image26, image27],
  };

  const singleprd1 = {
    heading: "(Product 27) Samle-Clothing And Accesory Boutiques For Sale",
    review: "No Reviews",
    sold: "12 sold in last 25 hours",
    description:
      "Nam tempus turpiso metus scelerisque placerat nulla deumantos solicitud fells.Pellentesquediam dolor, elementum etos lobortis...",
    category: "dress",
    detail: "Vendor: Anna",
    detail1: "SKU: W0690062",
    detail2: "Availability: In Stock",
    detail3: "Proudct Type:  Cosmopolis",
    rate: "$36.99",
    day: "272 Days",
    hour: "7 Hours",
    mins: "43 Mins",
    sec: "45 Secs",
  };

  const imagegroup = [
    {
      image: image32,
      heading: "PAUL SMITH",
      content: "(Product1) Sample-Clothing And Accessory Boutiques For Sale",
      rate: "$86.00",
    },
    {
      image: image33,
      heading: "MANGO",
      content: "(Product2) Sample-Clothing And Accessory Boutiques For Sale",
      rate1: "$200.00",
      rate2: "$128.00",
    },
    {
      tag: "Sale",
      image: image34,
      heading: "FRENCH CONNECTION",
      content: "(Product3) Sample-Clothing And Accessory Boutiques For Sale",
      rate1: "$86.00",
      rate2: "$69.99",
    },
    {
      image: image35,
      heading: "DAVENTRY MEERS",
      content: "(Product4) Sample-Clothing And Accessory Boutiques For Sale",
      rate: "$286.00",
    },
    {
      image: image36,
      heading: "ANNA",
      content: "(Product5) Sample-Clothing And Accessory Boutiques For Sale",
      rate: "$199.00",
    },
    {
      image: image37,
      heading: "JIMMY CHOO",
      content: "(Product6) Sample-Clothing And Accessory Boutiques For Sale",
      rate: "$86.00",
    },
    {
      image: image38,
      heading: "DONATELLO",
      content: "(Product7) Sample-Clothing And Accessory Boutiques For Sale",
      rate: "$418.99",
    },
  ];

  const recentimage = [
    {
      image: image37,
      heading: "JIMMY CHOO",
      content: "(Product6) Sample-Clothing And Accessory Boutiques For Sale",
      rate: "$86.00",
    },
    {
      image: image35,
      heading: "DAVENTRY MEERS",
      content: "(Product4) Sample-Clothing And Accessory Boutiques For Sale",
      rate: "$286.00",
    },
    {
      image: image33,
      heading: "MANGO",
      content: "(Product2) Sample-Clothing And Accessory Boutiques For Sale",
      rate1: "$200.00",
      rate2: "$128.00",
    },
    {
      image: image38,
      heading: "DONATELLO",
      content: "(Product7) Sample-Clothing And Accessory Boutiques For Sale",
      rate: "$418.99",
    },
    {
      image: image34,
      heading: "FRENCH CONNECTION",
      content: "(Product3) Sample-Clothing And Accessory Boutiques For Sale",
      rate1: "$86.00",
      rate2: "$69.99",
    },
    {
      image: image36,
      heading: "ANNA",
      content: "(Product5) Sample-Clothing And Accessory Boutiques For Sale",
      rate: "$199.00",
    },
  ];

  return (
    <>
      <section>
        <div className="single">
          <div className="container">
            <div className="row">
              <div className="col-md-6 spliter1">
                <SingleProductLeft
                  singleproductimages={singleproductimages}
                  single={singleproduct}
                />
              </div>
              <div className="col-md-6 spliter2">
                <SingleProduct item={singleprd1} single={singleproduct} />
              </div>
              {/* {singleprd1.map((item, i) =>(
                <Single_product key={i} item={item}/>
              ))} */}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="information">
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="Description" value="1" />
                    <Tab label="Additional Information" value="2" />
                    <Tab label="Shipping & Return" value="3" />
                    <Tab label="Custom Tab" value="4" />
                    <Tab label="Review" value="5" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <div id="desc-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor.
                    </p>
                  </div>
                  <div id="unorder">
                    <h6>Sample Unordered List</h6>
                    <ul>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </li>
                      <li> Excepteur sint occaecat cupidatat non proident</li>
                      <li>
                        sunt in culpa qui officia deserunt mollit anim id est
                        laborum
                      </li>
                      <li>
                        The discovery of the text's origin is attributed to
                        Richard McClintock
                      </li>
                    </ul>
                  </div>
                  <div id="ordered">
                    <h6>Sample ordered List</h6>
                    <ol>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </li>
                      <li> Excepteur sint occaecat cupidatat non proident</li>
                      <li>
                        sunt in culpa qui officia deserunt mollit anim id est
                        laborum
                      </li>
                      <li>
                        The discovery of the text's origin is attributed to
                        Richard McClintock
                      </li>
                    </ol>
                  </div>
                </TabPanel>
                <TabPanel value="2">
                  <div id="desc-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut .
                    </p>
                  </div>
                  <div id="unorder">
                    <h6>Sample Unordered List</h6>
                    <ul>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </li>
                      <li> Excepteur sint occaecat cupidatat non proident</li>
                      <li>
                        sunt in culpa qui officia deserunt mollit anim id est
                        laborum
                      </li>
                      <li>
                        The discovery of the text's origin is attributed to
                        Richard McClintock
                      </li>
                    </ul>
                  </div>
                  <div id="ordered">
                    <h6>Sample ordered List</h6>
                    <ol>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </li>
                      <li> Excepteur sint occaecat cupidatat non proident</li>
                      <li>
                        sunt in culpa qui officia deserunt mollit anim id est
                        laborum
                      </li>
                      <li>
                        The discovery of the text's origin is attributed to
                        Richard McClintock
                      </li>
                      <li> Excepteur sint occaecat cupidatat non proident</li>
                    </ol>
                  </div>
                </TabPanel>
                <TabPanel value="3">
                  <div id="desc-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor.
                    </p>
                  </div>
                  <div id="unorder">
                    <h6>Sample Unordered List</h6>
                    <ul>
                      <li> Excepteur sint occaecat cupidatat non proident</li>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </li>
                      <li> Excepteur sint occaecat cupidatat non proident</li>
                      <li>
                        sunt in culpa qui officia deserunt mollit anim id est
                        laborum
                      </li>
                      <li> Excepteur sint occaecat cupidatat non proident</li>
                      <li>
                        The discovery of the text's origin is attributed to
                        Richard McClintock
                      </li>
                    </ul>
                  </div>
                  <div id="ordered">
                    <h6>Sample ordered List</h6>
                    <ol>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </li>
                      <li> Excepteur sint occaecat cupidatat non proident</li>
                      <li>
                        sunt in culpa qui officia deserunt mollit anim id est
                        laborum
                      </li>
                      <li>
                        The discovery of the text's origin is attributed to
                        Richard McClintock
                      </li>
                    </ol>
                  </div>
                </TabPanel>
                <TabPanel value="4">
                  <div id="desc-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor.
                    </p>
                  </div>
                  <div id="unorder">
                    <h6>Sample Unordered List</h6>
                    <ul>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </li>
                      <li> Excepteur sint occaecat cupidatat non proident</li>
                      <li>
                        sunt in culpa qui officia deserunt mollit anim id est
                        laborum
                      </li>
                      <li>
                        The discovery of the text's origin is attributed to
                        Richard McClintock
                      </li>
                    </ul>
                  </div>
                  <div id="ordered">
                    <h6>Sample ordered List</h6>
                    <ol>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </li>
                      <li> Excepteur sint occaecat cupidatat non proident</li>
                      <li>
                        sunt in culpa qui officia deserunt mollit anim id est
                        laborum
                      </li>
                      <li>
                        The discovery of the text's origin is attributed to
                        Richard McClintock
                      </li>
                    </ol>
                  </div>
                </TabPanel>
                <TabPanel value="5">
                  <div id="desc-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor.
                    </p>
                  </div>
                  <div id="unorder">
                    <h6>Sample Unordered List</h6>
                    <ul>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </li>
                      <li> Excepteur sint occaecat cupidatat non proident</li>
                      <li>
                        sunt in culpa qui officia deserunt mollit anim id est
                        laborum
                      </li>
                      <li>
                        The discovery of the text's origin is attributed to
                        Richard McClintock
                      </li>
                    </ul>
                  </div>
                  <div id="ordered">
                    <h6>Sample ordered List</h6>
                    <ol>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </li>
                      <li> Excepteur sint occaecat cupidatat non proident</li>
                      <li>
                        sunt in culpa qui officia deserunt mollit anim id est
                        laborum
                      </li>
                    </ol>
                  </div>
                </TabPanel>
              </TabContext>
            </Box>
          </div>
          <hr />
        </div>
      </section>

      <section className="product-hr">
        <div className="container">
          <div className="endimage">
            <h6 id="product-heading">RELATED PRODUCTS</h6>
            <Slider {...Product4}>
              {imagegroup.map((item, i) => (
                <ProductImage key={i} item={item} />
              ))}
            </Slider>
          </div>
          <hr />
        </div>
      </section>

      <section>
        <div className="container">
          <h6 id="product-heading">RECENTLY VIEWED PRODUCT</h6>
          <div className="recent-views">
            <Slider {...Product4}>
              {recentimage.map((item, i) => (
                <ProductImage next={multiple} key={i} item={item} />
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
