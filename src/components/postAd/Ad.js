import React, { useState } from "react";
import "./mapLogic/map.css";
import GeneralBox from "./GeneralBox";
import LocationBox from "./LocationBox";
import FeatureBox from "./FeatureBox";
import Images from "./Images";
import SellerInfo from "./SellerInfo";

function Ad() {
  const [ad, setAd] = useState({
    latitude: "",
    longitude: "",
    address: "",

    metro: "",
    city: "",
    price: 0.0,
    currency: "",
    area: 0.0,

    propertyType: "",
    adType: "",
    fromType: "",
    title: "",
    description: "",
    parameters: [],

    floor: 0,
    floors: 0,
    feature1: [],

    livingSpace: 0.0,
    parking: "",
    feature2: [],

    feature3: [],

    images: [],

    name: "",
    email: "",
  });
  const setStateHelper = (key, val) => {
    let tempAd = ad;
    tempAd[key] = val;
    setAd(tempAd);
  };

  return (
    <div
      className="d-flex flex-column mx-auto col-10"
      style={{ marginTop: "350px" }}
    >
      <div className="d-flex flex-column" style={{ margin: "10px 50px" }}>
        <h2>Post Ad</h2>
      </div>
      <LocationBox setState={setStateHelper} />
      <div className="d-flex flex-row col-12 flex-wrap my-4">
        <GeneralBox setState={setStateHelper} />
        <FeatureBox setState={setStateHelper} />
      </div>
      <Images setState={setStateHelper} />
      <SellerInfo setState={setStateHelper} />
    </div>
  );
}

export default Ad;
