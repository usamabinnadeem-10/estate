import React, { useState, useEffect } from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

function MyCarousel(props) {
  useEffect(() => {
    let imgs = [];
    let thumbs = [];
    props.images.forEach((element) => {
      imgs.push(
        <a href={element} target="_blank">
          <img
            src={element}
            style={{ maxWidth: "100%", height: "300px", objectFit: "contain" }}
          />
        </a>
      );
      thumbs.push(
        <img src={element} style={{ width: "50px", height: "50px" }} />
      );
    });
    setSlides(imgs);
    setThumbnails(thumbs);
  }, []);

  const [value, setValue] = useState(0);
  const [slides, setSlides] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);

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
