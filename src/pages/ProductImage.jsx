import React from 'react'

const ProductImage = (props) => {

  return (
    <div>
        <span id='offer-sale'>{props.item.tag}</span>
        <img src={props.item.image}/>
        <div id='sub-heading'>
          <h6 id='sub-name'>{props.item.heading}</h6>
          <p>{props.item.content}</p>
          <span id='product-amount'>{props.item.rate}</span>
          <span id='product-amount1'><del>{props.item.rate1}</del></span><span id='product-amount2'>{props.item.rate2}</span>
        </div>
    </div>
  )
}

export default ProductImage