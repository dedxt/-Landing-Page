import React from "react";
import backImage from "../assets/back.jpg";

function Image() {
  return (
    <div
      style={{
        backgroundImage: `url(${backImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: 'cover',
        height: "50vh",
        marginBottom: '25px'
      }}
    ></div>
  );
}

export default Image;
