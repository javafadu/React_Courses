import React from 'react';
import image1Src from "../../assets/img/image1.jpg";

const Image1 = () => {
  return (
    <div>
      {/* If image files in public folder*/}
    <img src="logo512.png"></img>

     {/* If image files in src folder*/}
    <img src={image1Src}></img>
    <img src={require("../../assets/img/image2.jpg")}/>
    </div>
  )
}

export default Image1