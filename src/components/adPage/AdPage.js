import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import InfoBox from "./InfoBox";
import Description from "./Description";
import Map from "../map/Map";
import MapSearch from "../mapSearch/MapSearch";

const imgs = [
  "https://specials-images.forbesimg.com/imageserve/1026205392/960x0.jpg?fit=scale",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/modern-house-2-1538579843.jpg?crop=1.00xw:0.731xh;0,0.264xh&resize=980:*",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Tiny_house%2C_Portland.jpg/800px-Tiny_house%2C_Portland.jpg",
];

const location = [
  {
    name: "Title of Ad",
    price: 90000,
    img: imgs,
    latitude: 32.091131499999996,
    longitude: 74.1818074,
  },
];

const info = {
  name: "Bill",
  contact: "03001234567",
  location: "Street 10",
  rooms: "3",
  metro: "ABC",
  city: "ABCDEF",
  datePublished: "2020-10-10",
};

const description = {
  detail:
    "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  feature1: {
    floor: 10,
    floors: 20,
    featureArray: [
      "Furniture",
      "Animals allowed",
      "K-tioner",
      "Sauna",
      "Fridge",
    ],
  },
  feature2: {
    livingSpace: 80,
    parking: "Garage",
    featureArray: ["Elevator", "Tennis Court", "Sports Ground", "Playground"],
  },
  feature3: {
    featureArray: ["Park", "Rural Area"],
  },
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
        <Carousel images={imgs} />
        <InfoBox info={info} />
      </div>
      <Description
        detail={description.detail}
        feature1={description.feature1}
        feature2={description.feature2}
        feature3={description.feature3}
      />
      <div className="col-12 my-3">
        <MapSearch
          center={{ lat: location[0].latitude, lng: location[0].longitude }}
          zoom={17}
          places={location}
        />
      </div>
    </div>
  );
}

export default AdPage;
