import React from 'react';
import "./gallery.scss";

const ImageGallery = () => {

    const gallery = [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
        "image6.jpg"
    ]

  return (
    <div className="gallery">

    {gallery.map((image) => (
    <div>
        <img src={ require(`../../assets/img/${image}`)}/>
        </div>
        )) }

    </div>
  )
}

export default ImageGallery