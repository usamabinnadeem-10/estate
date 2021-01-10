import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import InfoBox from "./InfoBox";
import Description from "./Description";
import Map from "../map/Map";
import MapSearch from "../mapSearch/MapSearch";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { URL } from "../../URL";

function AdPage() {
  const location = useLocation();
  const { id } = useParams();
  const [first, setFirst] = useState(true);

  const [ad, setAd] = useState({});
  const [images, setImages] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [info, setInfo] = useState({});
  const [detail, setDetail] = useState();
  const [feature1, setFeature1] = useState({});
  const [feature2, setFeature2] = useState({});
  const [feature3, setFeature3] = useState({});
  const [center, setCenter] = useState({});
  const [place, setPlace] = useState({});

  if (first) {
    axios
      .get(URL + "api/ad/?ad_id=" + id)
      .then((res) => {
        console.log("axios");
        setAd(res.data);
        setImages(res.data[0].images);
        setInfo({
          address: res.data[0].address,
          rooms: res.data[0].rooms,
          metro: res.data[0].metro,
          city: res.data[0].city,
          datePublished: res.data[0].date_posted,
        });
        setDetail(res.data[0].description);
        setFeature1({
          featureArray: res.data[0].feature1,
          floor: res.data[0].floor,
          floors: res.data[0].floors,
        });
        setFeature2({
          featureArray: res.data[0].feature2,
          livingSpace: res.data[0].livingSpace,
          parking: res.data[0].parking,
        });
        setFeature3({
          featureArray: res.data[0].feature3,
        });
        setCenter({
          lat: res.data[0].latitude,
          lng: res.data[0].longitude,
        });
        setPlace([
          {
            name: res.data[0].title,
            price: res.data[0].price,
            img: images,
            latitude: res.data[0].latitude,
            longitude: res.data[0].longitude,
          },
        ]);
      })
      .then((res) => {
        setFetched(true);
      })
      .catch((err) => {});

    setFirst(false);
  }

  return (
    <div
      className="d-flex col-9 mx-auto flex-column"
      style={{ marginTop: "100px" }}
    >
      <div className="col-12 d-flex flex-row" style={{ height: "min-content" }}>
        {fetched ? <Carousel images={images} /> : null}
        {fetched ? <InfoBox info={info} /> : null}
      </div>
      {fetched ? (
        <Description
          detail={detail}
          feature1={feature1}
          feature2={feature2}
          feature3={feature3}
        />
      ) : null}

      <div className="col-12 my-3">
        {fetched ? (
          <MapSearch center={center} zoom={15} places={place} />
        ) : null}
      </div>
    </div>
  );
}

export default AdPage;
