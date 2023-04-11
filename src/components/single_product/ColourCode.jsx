import React from 'react'

const ColourCode = () => {
    // (document).ready(function(){


    //     (".shoes-colors span").click(function(){
    //       (".shoes-colors span").removeClass("active");
    //       (this).addClass("active");
    //       ("body").css("background",(this).attr("data-color"));
        
    //       (".shoes-button").css("color",(this).attr("data-color"));
          
    //     });
    //     });
  return (
    <div>      
        <div className='colouring'>
            <div class="shoes-card">
                <h6>Color:</h6>
                <div class="shoes-pic"></div>
                <div class="shoes-colors">
                <span class="blue active" data-color="#7ed6df"></span>
                <span class="green" data-color="#badc58"></span>
                <span class="yellow" data-color="#f9ca24"></span>
                <span class="rose" data-color="#ff7979"></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ColourCode