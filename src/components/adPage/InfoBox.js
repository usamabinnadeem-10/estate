import React, { useState, useEffect } from "react";
import Rating from "./Rating";
import axios from "../../services/axios";
import { URL } from "../../URL";
import { config } from "../../URL";

function InfoBox(props) {
  const [content, setContent] = useState([]);
  const [rating, setRating] = useState("no rating yet");
  const [ratingResponse, setRatingResponse] = useState("");

  useEffect(() => {
    var result = Object.keys(props.info).map(function (key) {
      return (
        <tr>
          <th>{key}</th>
          <td>{props.info[key]}</td>
        </tr>
      );
    });
    setContent(result);
  }, []);

  useEffect(() => {
    axios.get(URL + "api/get-rating/?ad_id=" + props.info.id).then((res) => {
      if (res.data.rating !== null) {
        setRating(res.data.rating);
      }
    });
  }, []);

  useEffect(() => {
    axios.get(URL + "api/get-rating/?ad_id=" + props.info.id).then((res) => {
      if (res.data.rating !== null) {
        setRating(res.data.rating);
      }
    });
  }, [ratingResponse]);

  const ratingResponseHelper = (message) => {
    setRatingResponse(message);
  };

  return (
    <div
      className="card col-5 offset-1 p-3"
      style={{
        overflow: "auto",
        height: "404px",
      }}
    >
      {" "}
      <div className="d-flex flex-row justify-content-between">
        <h3>Ad Information</h3>

        <h4 className="px-3 fw-bolder">{rating} / 5</h4>
      </div>
      <p className="text-danger">{ratingResponse}</p>
      <Rating
        response={ratingResponseHelper}
        loggedIn={props.loggedIn}
        ad={props.info.id}
      />
      <table className="table table-hover">
        <tbody>{content}</tbody>
      </table>
    </div>
  );
}

export default InfoBox;
