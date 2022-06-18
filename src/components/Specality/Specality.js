import React from "react";
import logo1 from "../../pagess/Page1/img/specialities-01.png";
import logo2 from "../../pagess/Page1/img/specialities-02.png";
import logo3 from "../../pagess/Page1/img/specialities-03.png";
import logo4 from "../../pagess/Page1/img/specialities-04.png";
import logo5 from "../../pagess/Page1/img/specialities-05.png";
function Specality({ image, text }) {
  return (
    <div class="speicality-item text-center aling-items-justify ">
      <div class="speicality-img aling-items-justify">
        <img src={image} class="img-fluid" alt="Speciality" />
        <span className="aling-items-justify">
          <div className="dot"></div>
        </span>
      </div>
      <p>{text}</p>
    </div>
  );
}

export default Specality;
