import React from "react";

const ColourCode = () => {
  return (
    <div>
      <div className="colouring">
        <div class="shoes-card">
          <h6>Color:</h6>
          <div class="shoes-pic"></div>
          <div class="shoes-colors">
            <input
              type="radio"
              id="white"
              name="one"
              value="white"
              class="radiocolor"
            />
            <input
              type="radio"
              id="red"
              name="one"
              value="red"
              class="radiocolor"
            />
            <input
              type="radio"
              id="blue"
              name="one"
              value="blue"
              class="radiocolor"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColourCode;
