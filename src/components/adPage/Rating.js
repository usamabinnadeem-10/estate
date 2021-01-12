import React from "react";
import ReactStars from "react-rating-stars-component";
import axios from "../../services/axios";
import { URL } from "../../URL";
import { config } from "../../URL";
import { Redirect } from "react-router-dom";

function Rating(props) {
  const user = JSON.parse(localStorage.getItem("user"));

  const ratingChanged = (rating) => {
    if (!props.loggedIn) {
      props.response("Please register or login to rate.");
    } else {
      axios
        .post(
          URL + "api/rate/",
          {
            ad: props.ad,
            rating: parseInt(rating),
            user: user.id,
          },
          config
        )
        .then((res) => {
          props.response("Thank you for rating.");
        })
        .catch((err) => {
          props.response(
            "You have either rated this ad already or this is your own ad."
          );
        });
    }
  };

  return (
    <ReactStars
      count={5}
      onChange={ratingChanged}
      size={36}
      activeColor="#ffd700"
    />
  );
}

export default Rating;
