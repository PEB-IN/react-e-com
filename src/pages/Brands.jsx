import React from 'react'

const Brands = (props) => {

  return (
    <>
        <div className='slide-content'>
            <div className='png'>
                <img src={props.item.image}/>    
            </div>
        </div>
 
    </>
    )
};


export default Brands
