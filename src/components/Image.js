import React from "react";
import backImage from "../assets/back.jpg";

const randomImage = "https://picsum.photos/1366/768";

function Image() {
  return (
    <div
      style={{
        backgroundImage: `url(${randomImage})`,
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
