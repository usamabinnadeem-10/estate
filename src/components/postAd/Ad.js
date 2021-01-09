import React, { useState } from "react";
import "./mapLogic/map.css";
import GeneralBox from "./GeneralBox";
import LocationBox from "./LocationBox";
import FeatureBox from "./FeatureBox";
import Images from "./Images";
import SellerInfo from "./SellerInfo";
import { typeOf } from "react-multiple-image-input";

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
    rooms: 0,
    roomsParams: [],
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

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);

  const setStateHelper = (key, val) => {
    let tempAd = ad;
    tempAd[key] = val;
    setAd(tempAd);
  };

  const isNotZero = (data) => {
    if (typeof data === "number") {
      return data > 0;
    } else if (typeof data === "string") {
      return data.trim().length > 0;
    } else {
      return true;
    }
  };

  const publish = () => {
    let error_temp = false;
    let temp = ad;
    let errs = [];
    for (var prop in temp) {
      if (prop === "images") {
        if (temp[prop].length === 0) {
          error_temp = true;
          errs.push("Please upload images to your ad");
        }
      } else {
        if (!isNotZero(ad[prop])) {
          error_temp = true;
          let msg = prop + " is required";
          errs.push(msg);
        }
      }
    }

    let floorOkay = true;
    let spaceOkay = true;

    if (!error_temp) {
      floorOkay = ad["floor"] <= ad["floors"];
      spaceOkay = ad["livingSpace"] <= ad["area"];
      if (floorOkay && spaceOkay) {
        // axios
        setError(false);
        setErrorMessage([]);
      } else {
        if (!floorOkay) {
          errs.push("floor can not be more than floors");
          error_temp = true;
        }
        if (!spaceOkay) {
          errs.push("living space can not be more than total area");
          error_temp = true;
        }
        setErrorMessage(errs);
        setError(error_temp);
      }
    } else {
      setErrorMessage(errs);
      setError(error_temp);
    }
  };

  return (
    <div
      className="d-flex flex-column mx-auto col-10"
      style={{ marginTop: "100px" }}
    >
      <div className="d-flex flex-column" style={{ margin: "10px 50px" }}>
        <h2>Post Ad</h2>
        {error && <p>Remove errors and try again</p>}
        {error &&
          errorMessage.map((msg) => {
            return <p className="text-danger">*{msg}</p>;
          })}
      </div>
      <LocationBox setState={setStateHelper} />
      <div className="d-flex flex-row col-12 flex-wrap my-4">
        <GeneralBox setState={setStateHelper} />
        <FeatureBox setState={setStateHelper} />
      </div>
      <Images setState={setStateHelper} />
      <SellerInfo setState={setStateHelper} />
      <div className="col-12 d-flex flex-column">
        <button
          onClick={() => publish()}
          className="btn m-3 p-2 btn-lg btn-success col-4 mx-auto"
        >
          Publish
        </button>
      </div>
    </div>
  );
}

export default Ad;
