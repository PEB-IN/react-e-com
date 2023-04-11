import React from 'react'
import { useState } from 'react';

const Quantity = () => {
    let [num, setNum]= useState(0);
    let incNum =()=>{
      if(num<10)
      {
      setNum(Number(num)+1);
      }
    };
    let decNum = () => {
       if(num>0)
       {
        setNum(num - 1);
       }
    }
   let handleChange = (e)=>{
     setNum(e.target.value);
    }
     return(
      <>
        <h6>Quantity:</h6>
        <div className='quantity'>
            <div >
                <div class="input-group">
                    <div class="input-group-prepend">
                    <button class="btn add" type="button" onClick={decNum}>-</button>
                    </div>
                    <input type="text" class="form-control qty-number" value={num} onChange={handleChange}/>
                    <div class="input-group-prepend">
                    <button class="btn add" type="button" onClick={incNum}>+</button>
                    </div>
                </div>
            </div>
        </div>
        <div id='total'>
            <p>Subtotal:<span id='price1'>$36.99</span></p>
        </div>
     </>
    );
}

export default Quantity