import React, { useState } from "react";
import { Redirect } from "react-router-dom";

function AdBox(props) {
  const [redirect, setRedirect] = useState(false);

  return (
    <div
      className="card m-2 d-flex flex-column"
      style={{ height: "300px", width: "350px", cursor: "pointer" }}
      onClick={() => {
        setRedirect(true);
      }}
    >
      {redirect && <Redirect push to="/Ad/1" />}
      <div
        className="w-100 m-0 p-0"
        style={{ height: "200px", overflow: "auto" }}
      >
        <img
          src={props.images[0]}
          style={{ width: "100%", objectFit: "contain" }}
        />
      </div>
      <div className="mt-2 py-1 px-3 mt-2 d-flex flex-column">
        <h4 className="fw-bolder">{props.price} &#8381;</h4>
        <h6>{props.rooms}-rooms</h6>
        <h6>
          {props.area} m<sup>2</sup>
        </h6>
        <h6>{props.location}</h6>
      </div>
    </div>
  );
}

export default AdBox;
