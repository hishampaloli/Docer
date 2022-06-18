import React from "react";
import "./Features.css";
import logo16 from "../../pagess/Page1/img/feature-01.jpg";
import logo17 from "../../pagess/Page1/img/feature-02.jpg";
import logo18 from "../../pagess/Page1/img/feature-03.jpg";
import logo19 from "../../pagess/Page1/img/feature-04.jpg";
import logo20 from "../../pagess/Page1/img/feature-05.jpg";
import logo21 from "../../pagess/Page1/img/feature-06.jpg";

function Features({ image, text }) {
  return (
    <div class="feature-item text-center">
      <img src={image} class="img-fluid" alt="Feature" />
      <p>{text}</p>
    </div>
  );
}

export default Features;
