import React, { useState, useEffect } from "react";
import { commercial_take_off } from "../home/constants";
import Func from "./Carousel";
import InfoBox from "./InfoBox";

const imgs = [
  "https://specials-images.forbesimg.com/imageserve/1026205392/960x0.jpg?fit=scale",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/modern-house-2-1538579843.jpg?crop=1.00xw:0.731xh;0,0.264xh&resize=980:*",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Tiny_house%2C_Portland.jpg/800px-Tiny_house%2C_Portland.jpg",
];

const info = {
  name: "Bill",
  location: "Street 10",
  rooms: "3",
  city: "ABC",
  district: "ABCDEF",
};

function AdPage() {
  const [ad, setAd] = useState({});

  useEffect(() => {}, []);

  return (
    <div
      className="d-flex col-9 mx-auto flex-column"
      style={{ marginTop: "200px" }}
    >
      <div className="col-12 d-flex flex-row" style={{ height: "min-content" }}>
        <div className="card col-6 p-3" style={{ height: "404px" }}>
          <Func images={imgs} />
        </div>

        <div
          className="card col-5 offset-1 p-3"
          style={{
            overflow: "auto",
            height: "404px",
          }}
        >
          <InfoBox info={info} />
        </div>
      </div>
      <div className="card my-4 p-3 col-12">
        <h4 className="text-muted fw-bolder">Description</h4>
        <p>
          Loerm Ipsum Loerm Ipsum Loerm Ipsum Loerm Ipsum Loerm Ipsum Loerm
          Ipsum Loerm Ipsum Loerm Ipsum Loerm Ipsum Loerm Ipsum Loerm Ipsum
          Loerm Ipsum Loerm Ipsum Loerm Ipsum Loerm Ipsum Loerm Ipsum Loerm
          Ipsum Loerm Ipsum Loerm Ipsum Loerm Ipsum Loerm Ipsum Loerm Ipsum
          Loerm Ipsum Loerm Ipsum Loerm Ipsum Loerm Ipsum
        </p>
      </div>
    </div>
  );
}

export default AdPage;
