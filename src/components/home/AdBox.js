import React, { useState } from "react";
import { Redirect } from "react-router-dom";

function AdBox(props) {
  const [redirect, setRedirect] = useState(false);

  return (
    <div
      className="card m-2 d-flex flex-column"
      style={{ height: "300px", width: "300px", cursor: "pointer" }}
      onClick={() => {
        setRedirect(true);
      }}
    >
      {redirect && <Redirect to="/Ad/1" />}
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
        <h5>{props.rooms}-rooms</h5>
        <h5>
          {props.area} m<sup>2</sup>
        </h5>
        <h4>{props.location}</h4>
      </div>
    </div>
  );
}

export default AdBox;
