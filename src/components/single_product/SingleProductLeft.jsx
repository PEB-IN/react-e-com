import React from 'react'
import Slider from 'react-slick'
import { page_product } from '../Common/slider/Settings'

const SingleProductLeft = ({singleproductimages}) => {
  return (
    <>
    <div>
        <div className='big-screen'>
            <img id='bigimg' src={singleproductimages?.image} alt='girl_pic'/>
        </div>   

        <div className='oneproduct'>
            <Slider {...page_product}>
                {singleproductimages?.images?.map((imgdata,i)=><img src={imgdata} width={"50px"} onClick="changeImage('images')"/>)}
            </Slider>
        </div>
    </div>
    {/* <script>
        function changeImage(fileName){
            let img =document.querySelector("#bigimg");

        }   
    </script> */}

    </>
  )
}

export default SingleProductLeft