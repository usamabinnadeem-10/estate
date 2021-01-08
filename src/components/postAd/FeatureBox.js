import React, { useState, useEffect } from "react";

function FeatureBox(props) {
  const [a1, setA1] = useState([]);
  const [a2, setA2] = useState([]);
  const [a3, setA3] = useState([]);

  const feature1 = [
    "Furniture",
    "Animals allowed",
    "K-tioner",
    "Dishwasher",
    "It is possible with children",
    "Fireplace",
    "Internet",
    "Fridge",
    "Washing Machine",
    "Sauna",
    "Wardrobe",
  ];

  const feature2 = [
    "Elevator",
    "Tennis Court",
    "Sports Ground",
    "Signal",
    "Mortgage possible",
    "Swimming Pool",
    "Security / Concierge",
    "Playground",
    " Green array",
  ];

  const feature3 = [
    "School / University",
    "Park",
    "Far from the road",
    "Shopping centers",
    "Restaurant / Cafe",
    "Closed Area",
    "Residential Complex",
    "Business Area",
    "Rural Area",
  ];

  function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  const shouldAdd = (val, array) => {
    let tempArray = [];
    if (array === 1) {
      tempArray = a1;
    } else if (array === 2) {
      tempArray = a2;
    } else if (array === 3) {
      tempArray = a3;
    }

    const found = tempArray.find((elem) => elem === val);

    if (found) {
      let filteredArray = removeItemOnce(tempArray, val);
      if (array === 1) {
        setA1(filteredArray);
      } else if (array === 2) {
        setA2(filteredArray);
      } else if (array === 3) {
        setA3(filteredArray);
      }
    } else {
      tempArray.push(val);
      if (array === 1) {
        setA1(tempArray);
      } else if (array === 2) {
        setA2(tempArray);
      } else if (array === 3) {
        setA3(tempArray);
      }
    }
  };

  useEffect(() => {
    props.setState("feature1", a1);
  }, [a1]);

  useEffect(() => {
    props.setState("feature2", a2);
  }, [a2]);

  useEffect(() => {
    props.setState("feature3", a3);
  }, [a3]);

  return (
    <div className="d-flex flex-column card p-3 mt-3 col-lg-5 col-12">
      <div className="d-flex flex-column card p-3 my-2">
        <h3 className="text-muted">Feature No.1</h3>
        <div className="d-flex flex-row">
          <div className="d-flex flex-column col-6 p-2">
            <h6 className="text-muted">Floor</h6>
            <input
              onChange={(e) =>
                props.setState("floor", parseInt(e.target.value))
              }
              id="property-floor"
              type="number"
              placeholder="Floor"
              className="p-2"
              min="0"
            ></input>
          </div>
          <div className="d-flex flex-column col-6 p-2">
            <h6 className="text-muted">Floors</h6>
            <input
              onChange={(e) =>
                props.setState("floors", parseInt(e.target.value))
              }
              id="property-floor"
              type="number"
              placeholder="Floors"
              className="p-2"
              min="0"
            ></input>
          </div>
        </div>
        <div className="d-flex flex-row flex-wrap m-2 p-1">
          {feature1.map((feature) => {
            return (
              <div className="col-12 col-sm-6 d-flex flex-row align-items-baseline p-1">
                <input
                  onClick={(e) => shouldAdd(e.target.value, 1)}
                  className=""
                  type="checkbox"
                  id={feature}
                  name={feature}
                  value={feature}
                />
                <h6 className="mx-2">{feature}</h6>
              </div>
            );
          })}
        </div>
      </div>

      <div className="d-flex flex-column card p-3 my-2">
        <h3 className="text-muted">Feature No.2</h3>
        <div className="d-flex flex-row">
          <div className="d-flex flex-column col-6 p-2">
            <h6 className="text-muted">Living Space</h6>
            <input
              onChange={(e) =>
                props.setState("livingSpace", parseFloat(e.target.value))
              }
              id="property-floor"
              type="number"
              placeholder="in m²"
              className="p-2"
              min="0"
            ></input>
          </div>
          <div className="d-flex flex-column col-6 p-2">
            <h6 className="text-muted">Parking</h6>
            <select
              onClick={(e) => props.setState("parking", e.target.value)}
              name="parking"
              id="parking"
            >
              <option value="1">No</option>
              <option value="2">Garage</option>
              <option value="3">Underground</option>
              <option value="4">Multi-level</option>
              <option value="5">Outdoors</option>
            </select>
          </div>
        </div>
        <div className="d-flex flex-row flex-wrap m-2 p-1">
          {feature2.map((feature) => {
            return (
              <div className="col-12 col-sm-6 d-flex flex-row align-items-baseline p-1">
                <input
                  onClick={(e) => shouldAdd(e.target.value, 2)}
                  className=""
                  type="checkbox"
                  id={feature}
                  name={feature}
                  value={feature}
                />
                <h6 className="mx-2">{feature}</h6>
              </div>
            );
          })}
        </div>
      </div>

      <div className="d-flex flex-column card p-3 my-2">
        <h3 className="text-muted">Feature No.3</h3>
        <div className="d-flex flex-row flex-wrap m-2 p-1">
          {feature3.map((feature) => {
            return (
              <div className="col-12 col-sm-6 d-flex flex-row align-items-baseline p-1">
                <input
                  onClick={(e) => shouldAdd(e.target.value, 3)}
                  className=""
                  type="checkbox"
                  id={feature}
                  name={feature}
                  value={feature}
                />
                <h6 className="mx-2">{feature}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FeatureBox;
