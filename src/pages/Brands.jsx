import React from 'react'

const Brands = (props) => {

  return (
    <>
        <div className='slide-content'>
            <div className='png'>
                <a href='https://www.honda2wheelersindia.com/' target="_blank"><img src={props.item.image}/></a>
            </div>
        </div>
 
    </>
    )
};


export default Brands
