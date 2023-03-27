import React from "react";

const Summer = (props) => {
return(
<>
    <div className="slide-content">
        <div className="collections" style={{backgroundImage:`url(${props.item.image})`}}>
            <div className="heading">
                <h3 id="summer">Level up with your style with our<br/> summer collections</h3>
                <button className="btn btn1">Shop now <i class="fa fa-arrow-right arrow" aria-hidden="true"></i></button>
            </div>
        </div>
    </div>
</>

)};

export default Summer