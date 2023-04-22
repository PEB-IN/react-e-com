import React from "react";

const Adds = (props) => {
  return (
    <>
      <div className="col-md-5 shoe">
        <img src={props.item.image} />
      </div>
      <div className="col-md-7 back">
        <p id="ltr">{props.item.heading}</p>
        <h2 id="letter">{props.item.content}</h2>
        <button className="btn btn3">
          Grab it now{" "}
          <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </button>
      </div>
    </>
  );
};

export default Adds;
