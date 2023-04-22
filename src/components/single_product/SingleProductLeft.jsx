import React, { useState } from "react";
import Slider from "react-slick";
import { page_product } from "../Common/slider/Settings";

const SingleProductLeft = ({ singleproductimages }, props) => {
  const [singleimage, setsingleimage] = useState(0);
  const changeimg = (indesid) => {
    console.log(indesid);

    setsingleimage(indesid);
  };

  return (
    <>
      {/* //{singleproductimages?.images?.[singleimage]} */}
      <div>
        <div className="big-screen">
          <img id="bigimg" src={props.single?.image} alt="girl_pic" />
        </div>

        <div className="oneproduct">
          <Slider {...page_product}>
            {singleproductimages?.images?.map((imgdata, i) => (
              <img
                src={imgdata}
                id={i}
                width={"50px"}
                onClick={() => changeimg(i)}
              />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default SingleProductLeft;
