import React, { useState, useEffect } from "react";

const residential = [
  "Apartment in a new building",
  "Resale apartment",
  "Room",
  "Bed",
  "Share",
  "House",
  "Part of the house",
  "Townhouse",
  "Plot",
];

const commercial = [
  "Office",
  "Coworking",
  "Trading area",
  "Warehouse",
  "Free appointment room",
  "Public catering",
  "Production",
  "Car service",
  "Ready business",
  "Building",
  "Domestic services",
  "Garage",
  "Commercial land",
];

function GeneralBox(props) {
  const [parameters, setParameters] = useState([]);

  const [remainingTitle, setRemainingTitle] = useState();
  const [remainingDescription, setRemainingDescription] = useState();

  const [propertyType, setPropertyType] = useState("");

  useEffect(() => {
    setParameters([]);
    props.setState("parameters", []);
    props.setState("propertyType", propertyType);
  }, [propertyType]);

  function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  const addParam = (param) => {
    let tempParam = parameters;
    const found = tempParam.find((elem) => elem === param);

    if (found) {
      let filteredArray = removeItemOnce(tempParam, param);
      setParameters(filteredArray);
    } else {
      tempParam.push(param);
      setParameters(tempParam);
    }

    sendToParent();
  };

  const sendToParent = () => {
    props.setState("parameters", parameters);
  };

  return (
    <div className="d-flex flex-column card p-2 mt-3 col-12 col-lg-6 me-4">
      <h3 className="text-muted" style={{ margin: "10px 50px" }}>
        General Information
      </h3>
      <div className="col" style={{ margin: "10px 50px" }}>
        <div className="d-flex flex-column">
          <h6 className="text-muted">
            <span className="text-danger">*</span> Property Type
          </h6>
          <select
            onClick={(e) => {
              setPropertyType(e.target.value);
              props.setState("propertyType", propertyType);
            }}
            name="property-type"
            id="property-type"
            className=""
          >
            <option value="">Select a category</option>
            <option value="1">Residential Property</option>
            <option value="2">Country Estate</option>
            <option value="3">Commercial Property</option>
            <option value="4">All New Buildings</option>
            <option value="5">Daily Real Estate</option>
          </select>
        </div>
        <div className="d-flex flex-row mt-3">
          <div className="col-6">
            <h6 className="text-muted">
              <span className="text-danger">*</span> Type
            </h6>
            <div className="d-flex flex-row">
              <div className="me-3">
                <input
                  onClick={() => props.setState("adType", "1")}
                  type="radio"
                  id="male"
                  name="type"
                  value="sale"
                />
                <label for="sale">Sale</label>
              </div>
              <div className="me-3">
                <input
                  onClick={() => props.setState("adType", "2")}
                  type="radio"
                  id="female"
                  name="type"
                  value="rent"
                />
                <label for="rent">Rent</label>
              </div>
            </div>
          </div>
          <div className="col-6">
            <h6 className="text-muted">
              <span className="text-danger">*</span> From
            </h6>
            <div className="d-flex flex-row">
              <div className="me-3">
                <input
                  onClick={() => props.setState("fromType", "1")}
                  type="radio"
                  id="male"
                  name="from"
                  value="owner"
                />
                <label for="sale">Owner</label>
              </div>
              <div className="me-3">
                <input
                  onClick={() => props.setState("fromType", "2")}
                  type="radio"
                  id="female"
                  name="from"
                  value="agent"
                />
                <label for="rent">Agent</label>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column mt-3">
          <h6 className="text-muted">
            <span className="text-danger">*</span> Title (47 characters max)
          </h6>
          <input
            onChange={(e) => {
              setRemainingTitle(47 - e.target.value.length);
              props.setState("title", e.target.value);
            }}
            id="property-title"
            type="text"
            placeholder="Title"
            className="p-2"
            maxLength="47"
          ></input>
          <p>
            {remainingTitle
              ? remainingTitle + " characters left"
              : "47 characters left"}
          </p>
        </div>
        <div className="d-flex flex-column mt-3">
          <h6 className="text-muted">
            <span className="text-danger">*</span> Description (3000 characters
            max)
          </h6>
          <textarea
            onChange={(e) => {
              setRemainingDescription(3000 - e.target.value.length);
              props.setState("description", e.target.value);
            }}
            type="text"
            placeholder="Description"
            rows="10"
            className="p-2"
            maxLength="3000"
          ></textarea>
          <p>
            {remainingDescription
              ? remainingDescription + " characters left"
              : "3000 characters left"}
          </p>
        </div>
        <div className="mt-3 d-flex flex-row flex-wrap">
          {propertyType === "1" &&
            residential.map((feature) => {
              return (
                <div className="col-12 col-sm-6 d-flex flex-row align-items-baseline p-1">
                  <input
                    className=""
                    type="checkbox"
                    id={feature}
                    name={feature}
                    value={feature}
                    onClick={(e) => addParam(e.target.value)}
                  />
                  <h6 className="mx-2">{feature}</h6>
                </div>
              );
            })}
        </div>
        <div className="mt-3 d-flex flex-row flex-wrap">
          {propertyType === "3" &&
            commercial.map((feature) => {
              return (
                <div className="col-12 col-sm-6 d-flex flex-row align-items-baseline p-1">
                  <input
                    className=""
                    type="checkbox"
                    id={feature}
                    name={feature}
                    value={feature}
                    onClick={(e) => addParam(e.target.value)}
                  />
                  <h6 className="mx-2">{feature}</h6>
                </div>
              );
            })}
        </div>
        <div className="d-flex flex-column mt-3"></div>
      </div>
    </div>
  );
}

export default GeneralBox;
