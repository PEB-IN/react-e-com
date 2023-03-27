import React from 'react'

const Card = (props) => {
  return (
    <>
        <div className="col-md-3">
            <div className='delivery'>
                <span id="hed">{props.item.icon}</span>
            </div>
            <br></br>
            <div className='Subhead'>
                <h5>{props.item.heading}</h5>
            </div>
            <div className='paragh'>
                <p>{props.item.content}</p>
            </div>
        </div>
    </>
  )
};


export default Card