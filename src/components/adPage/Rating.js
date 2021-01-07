import React from "react";
import ReactStars from "react-rating-stars-component";

function Rating(props) {
  return (
    <ReactStars
      count={5}
      // onChange={ratingChanged}
      size={36}
      activeColor="#ffd700"
    />
  );
}

export default Rating;
