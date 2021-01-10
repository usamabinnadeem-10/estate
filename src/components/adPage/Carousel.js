import React, { useState, useEffect } from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

function MyCarousel(props) {
  const [value, setValue] = useState(0);
  const [slides, setSlides] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);

  useEffect(() => {
    let imgs = [];
    let thumbs = [];
    props.images.forEach((element) => {
      console.log(element);
      imgs.push(
        <img
          src={element.file}
          style={{ maxWidth: "100%", height: "300px", objectFit: "contain" }}
        />
      );
      thumbs.push(
        <img src={element.file} style={{ width: "50px", height: "50px" }} />
      );
    });
    console.log(imgs);
    setSlides(imgs);
    setThumbnails(thumbs);
  }, [props.images]);

  const onChange = (value) => {
    setValue(value);
  };

  return (
    <div className="card col-6 p-3" style={{ height: "404px" }}>
      <div className="col-12">
        <Carousel value={value} slides={slides} onChange={onChange} />
        <Dots
          number={thumbnails.length}
          thumbnails={thumbnails}
          value={value}
          onChange={onChange}
          number={slides.length}
        />
      </div>
    </div>
  );
}

export default MyCarousel;
