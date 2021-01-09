import React, { useState, useEffect } from "react";
import { metros } from "./data";
import { cities } from "./data";
import MyGoogleMap from "./mapLogic/MyGoogleMap";

function LocationBox(props) {
  const [current_metro, setCurrent_metro] = useState("");
  const [is_metro_set, setIs_metro_set] = useState(false);

  const [current_city_list, setCurrent_city_list] = useState([]);

  const [current_city, setCurrent_city] = useState("");
  const [is_city_set, setIs_city_set] = useState(false);

  useEffect(() => {
    props.setState("metro", current_metro);
  }, [current_metro]);

  useEffect(() => {
    props.setState("city", current_city);
  }, [current_city]);

  const setMetro = (metro) => {
    setCurrent_metro(metro);
    setIs_metro_set(true);
    setIs_city_set(false);
    setCurrent_city("");

    if (metro === "Saint-Petersburg") {
      setCurrent_city_list(cities["Saint_Petersburg"]);
    } else if (metro === "Nizhny Novgorod") {
      setCurrent_city_list(cities["Nizhny_Novgorod"]);
    } else if (metro === "Novosibirsk") {
      setCurrent_city_list(cities["Novosibirsk"]);
    } else if (metro === "Samara") {
      setCurrent_city_list(cities["Samara"]);
    } else if (metro === "Yekaterinburg") {
      setCurrent_city_list(cities["Yekaterinburg"]);
    } else if (metro === "Moscow") {
      setCurrent_city_list(cities["Moscow"]);
    } else if (metro === "Kazan") {
      setCurrent_city_list(cities["Kazan"]);
    }
  };

  const setCity = (city) => {
    setCurrent_city(city);
    setIs_city_set(true);
  };

  const filterItems = (term) => {
    let list = [];
    if (current_metro === "Saint-Petersburg") {
      list = cities["Saint_Petersburg"];
    } else if (current_metro === "Nizhny Novgorod") {
      list = cities["Nizhny_Novgorod"];
    } else if (current_metro === "Novosibirsk") {
      list = cities["Novosibirsk"];
    } else if (current_metro === "Samara") {
      list = cities["Samara"];
    } else if (current_metro === "Yekaterinburg") {
      list = cities["Yekaterinburg"];
    } else if (current_metro === "Moscow") {
      list = cities["Moscow"];
    } else if (current_metro === "Kazan") {
      list = cities["Kazan"];
    }

    setMetro(current_metro);
    let filtered = list.filter((item) => item.toLowerCase().indexOf(term) > -1);
    setCurrent_city_list(filtered);
  };

  return (
    <div className="d-flex flex-column card p-2">
      <h3 className="text-muted" style={{ margin: "10px 50px" }}>
        Location
      </h3>
      <div className="d-flex flex-row flex-wrap justify-content-evenly">
        <div className="main-wrapper d-flex flex-row col-10 col-lg-5">
          <MyGoogleMap setState={props.setState} />
        </div>

        <div className="main-wrapper d-flex flex-row col-10 col-lg-5 ">
          <div id="banner" className="w-100 bg-dark d-flex flex-column">
            <div
              id="search"
              className="d-flex my-3 mx-2 p-2 flex-row flex-wrap"
            >
              <div className="col-6">
                <button
                  className="btn btn-outline-primary text-light dropdown-toggle btn-lg"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {is_metro_set ? current_metro : "Metro"}
                </button>

                <ul className="dropdown-menu">
                  {metros.map((metro) => {
                    return (
                      <li>
                        <a
                          id={metro + "-dropdown"}
                          className="dropdown-item"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            setMetro(
                              document.getElementById(metro + "-dropdown").text
                            )
                          }
                        >
                          {metro}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="col-6">
                <button
                  className="btn btn-outline-primary text-light dropdown-toggle btn-lg"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {is_city_set ? current_city : "City"}
                </button>

                <ul className="dropdown-menu">
                  <li>
                    <input
                      type="text"
                      onChange={(e) => filterItems(e.target.value)}
                      placeholder="search"
                      className="m-1"
                    ></input>
                  </li>
                  {current_city_list.map((city) => {
                    return (
                      <li>
                        <a
                          id={city + "-dropdown"}
                          className="dropdown-item"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            setCity(
                              document.getElementById(city + "-dropdown").text
                            )
                          }
                        >
                          {city}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div
              id="search"
              className="d-flex my-3 mx-2 p-2 flex-row flex-wrap justify-content-between"
            >
              <input
                onChange={(e) => {
                  props.setState("price", parseFloat(e.target.value));
                }}
                className="col-5"
                placeholder="Price"
                type="number"
                min="0"
              ></input>
              <select
                onClick={(e) => {
                  props.setState("currency", e.target.value);
                }}
                className="col-5 offset-1"
                name="currency"
                id="currency"
              >
                <option value="">Select Currency</option>
                <option value="1">RUB</option>
                <option value="2">EURO</option>
                <option value="3">USD</option>
              </select>
            </div>

            <div id="search" className="d-flex my-3 mx-2 p-2 flex-row">
              <div className="col-6">
                <input
                  onChange={(e) =>
                    props.setState("area", parseFloat(e.target.value))
                  }
                  placeholder="total area in m2"
                  type="number"
                  min="0"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationBox;
