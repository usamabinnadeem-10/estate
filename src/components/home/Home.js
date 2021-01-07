import React, { useState } from "react";
import Buy from "./Buy";
import Estimate from "./Estimate";

import Geocode from "react-geocode";

import AdBox from "./AdBox";
import News from "./News";

import {
  residential_buy,
  residential_take_off,
  commercial_buy,
  commercial_take_off,
  residential_by_the_day,
} from "./constants";

function Home() {
  const [selected, setSelected] = useState(1);
  const [search, setSearch] = useState("");
  const [option, setOption] = useState("residential");
  const [roomsSelected, setRoomsSelected] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [price, setPrice] = useState({
    min: 0,
    max: 0,
  });
  const [pref1, setPref1] = useState([]);
  const [pref2, setPref2] = useState([]);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState(false);
  const [pill, setPill] = useState(1);

  const setOptionHelper = (option) => {
    setOption(option);
  };

  const setSearchHelper = (search) => {
    setSearch(search);
  };

  const addRoomToListHelper = (rooms) => {
    setRoomsSelected(rooms);
  };

  const setPriceHelper = (amount, type) => {
    var temp = price;
    if (type === "min") {
      temp["min"] = amount;
    } else {
      temp["max"] = amount;
    }
    setPrice(temp);
  };

  const isPriceOk = () => {
    if (price["max"] > price["min"]) {
      return true;
    }
    return false;
  };

  const go = (address) => {
    if (isPriceOk()) {
      setOk(true);
      setErr(false);
    } else {
      setErr(true);
    }

    Geocode.fromAddress(
      address,
      "AIzaSyAto6Hd2ZwWEnjL1muQdRUBulh7kDWtKuM"
    ).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setCoordinates({
          lat: lat,
          lng: lng,
        });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const setPref1Helper = (pref) => {
    setPref1(pref);
  };

  const setPref2Helper = (pref) => {
    setPref2(pref);
  };

  const imgs = [
    "https://specials-images.forbesimg.com/imageserve/1026205392/960x0.jpg?fit=scale",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/modern-house-2-1538579843.jpg?crop=1.00xw:0.731xh;0,0.264xh&resize=980:*",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Tiny_house%2C_Portland.jpg/800px-Tiny_house%2C_Portland.jpg",
  ];

  const imgs2 = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Tiny_house%2C_Portland.jpg/800px-Tiny_house%2C_Portland.jpg",
  ];

  return (
    <div className="d-flex flex-column">
      <div
        className="d-flex flex-column mx-auto col-12 bg-dark align-items-center"
        style={{ marginTop: "250px", height: "400px" }}
      >
        {err && (
          <div className="card col-8">
            <h3 className="text-danger">
              *Please enter minimum and maximum amount and ensure that minimum
              is lesser than maximum
            </h3>
          </div>
        )}

        <div className="d-flex p-5">
          <ul
            className="d-flex flex-row justify-content-between nav nav-pills mb-3"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <a
                onClick={() => setSelected(1)}
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Buy
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                onClick={() => setSelected(2)}
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                href="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Take off
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                onClick={() => setSelected(3)}
                className="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                href="#pills-contact"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                By the day
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                onClick={() => setSelected(4)}
                className="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                href="#pills-contact"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Estimate
              </a>
            </li>
          </ul>
        </div>
        {selected === 1 && (
          <Buy
            option={option}
            residential={residential_buy}
            commercial={commercial_buy}
            by_the_day={false}
            setPref1Helper={setPref1Helper}
            setPref2Helper={setPref2Helper}
            setPriceHelper={setPriceHelper}
            setSearchHelper={setSearchHelper}
            setOptionHelper={setOptionHelper}
            addRoomToListHelper={addRoomToListHelper}
          />
        )}
        {selected === 2 && (
          <Buy
            option={option}
            residential={residential_take_off}
            commercial={commercial_take_off}
            by_the_day={false}
            setPref1Helper={setPref1Helper}
            setPref2Helper={setPref2Helper}
            setPriceHelper={setPriceHelper}
            setSearchHelper={setSearchHelper}
            setOptionHelper={setOptionHelper}
            addRoomToListHelper={addRoomToListHelper}
          />
        )}
        {selected === 3 && (
          <Buy
            option={"residential"}
            residential={residential_by_the_day}
            commercial={[]}
            by_the_day={true}
            setPref1Helper={setPref1Helper}
            setPref2Helper={setPref2Helper}
            setPriceHelper={setPriceHelper}
            setSearchHelper={setSearchHelper}
            setOptionHelper={setOptionHelper}
            addRoomToListHelper={addRoomToListHelper}
          />
        )}
        {selected === 4 && (
          <Estimate
            setPriceHelper={setPriceHelper}
            setPref1Helper={setPref1Helper}
            setSearchHelper={setSearchHelper}
            addRoomToListHelper={addRoomToListHelper}
          />
        )}

        <button
          className="btn btn-primary btn-lg m-4"
          onClick={() => go(search)}
        >
          Search
        </button>
      </div>
      <div className="col-10 mx-auto my-3">
        <ul
          className="d-flex flex-row nav nav-pills mb-3 justify-content-center"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              href="#pills-home"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Residential
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              href="#pills-profile"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Suburban
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              href="#pills-contact"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Commercial
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              href="#pills-contact"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Daily
            </a>
          </li>
        </ul>
      </div>

      <div className="d-flex flex-row col-12">
        <div className="d-flex flex-column col-8">
          <h2 className="col-11 mx-auto">
            <u>Premium Ads</u>
          </h2>
          <div className="card col-11 d-flex flex-row flex-wrap mx-auto justify-content-evenly mt-5">
            <AdBox
              images={imgs}
              price={12345678}
              rooms={3}
              area={50}
              location={"Street 10"}
            />
            <AdBox
              images={imgs2}
              price={12345678}
              rooms={3}
              area={50}
              location={"Street 10"}
            />
            <AdBox
              images={imgs}
              price={12345678}
              rooms={3}
              area={50}
              location={"Street 10"}
            />
            <AdBox
              images={imgs2}
              price={12345678}
              rooms={3}
              area={50}
              location={"Street 10"}
            />
          </div>
          <div className="card col-11 d-flex flex-row flex-wrap mx-auto justify-content-evenly mt-5">
            <AdBox
              images={imgs}
              price={12345678}
              rooms={3}
              area={50}
              location={"Street 10"}
            />
            <AdBox
              images={imgs}
              price={12345678}
              rooms={3}
              area={50}
              location={"Street 10"}
            />
            <AdBox
              images={imgs}
              price={12345678}
              rooms={3}
              area={50}
              location={"Street 10"}
            />
            <AdBox
              images={imgs}
              price={12345678}
              rooms={3}
              area={50}
              location={"Street 10"}
            />
            <AdBox
              images={imgs}
              price={12345678}
              rooms={3}
              area={50}
              location={"Street 10"}
            />
            <AdBox
              images={imgs}
              price={12345678}
              rooms={3}
              area={50}
              location={"Street 10"}
            />
          </div>
        </div>
        <div className="d-flex flex-column col-4">
          <h2 className="col-10 mx-auto">
            <u>News</u>
          </h2>
          <div className="d-flex flex-column card col-10 mx-auto mt-5">
            <div className="px-2 py-3">
              <News
                title={"10 worst districts of Moscow"}
                brief={
                  "In the course of a sample survey, the respondents - more than 4 thousand people - were asked to assess"
                }
                detail={
                  "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "
                }
                author={"Mr.Henry"}
              />

              <News
                title={"11 best ditricts of Moscow"}
                brief={
                  "In the course of a sample survey, the respondents - more than 4 thousand people - were asked to assess"
                }
                detail={
                  "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "
                }
                author={"Ms.Shaw"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
