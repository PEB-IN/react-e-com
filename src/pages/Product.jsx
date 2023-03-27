import React from 'react'

const Product = (props) => {
  return (
    <>
    <div className="slide-content swiper-slide">
        <div className="dress">
        <div className='coloumn sale'>{props.item.sale}</div>
          <img src={props.item.image}/>
            <div className="head">
              <div className="detail">
                <p id='details'>{props.item.detail}</p>
                <p id='price'>{props.item.cost} <del id='off'>{props.item.offer}</del></p>  
              </div>
              <div className='icon1'>
                <i className="fa fa-shopping-cart icon" aria-hidden="true"></i>
              </div>  
            </div>
        </div>
    </div>
    <div className='dresses-pagination'></div>
    </>
  )
};

export default Product
