import React from 'react'

const Picks = (props) => {
  return (
    <div className="slide-content">
        <div className="order" style={{backgroundImage:`url(${props.item.image})`}}>
            <div className="heading">
                <button className="btn btn2">{props.item.button}<i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
               
            </div>
        </div>
    </div>
  )
};


export default Picks
