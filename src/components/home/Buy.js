import React, { useState, useEffect } from "react";
import Places from "./Places";

const rooms = ["1", "2", "3", "4", "5", "6+"];

function Buy({
  residential,
  commercial,
  by_the_day,
  setSearchHelper,
  setOptionHelper,
  option,
  addRoomToListHelper,
  setPriceHelper,
  setPref1Helper,
  setPref2Helper,
}) {
  const [optionLocal, setOptionLocal] = useState("");
  const [roomsSelected, setRoomsSelected] = useState([]);
  const [pref1, setPref1] = useState([]);
  const [pref2, setPref2] = useState([]);

  useEffect(() => {
    setPref1([]);
    setPref1Helper([]);
  }, [optionLocal]);

  useEffect(() => {
    if (window.innerWidth < 520 && window.innerWidth > 320) {
      document.getElementById("dropdownMenuButton").style.fontSize = "10px";
    } else if (window.innerWidth <= 320) {
      document.getElementById("dropdownMenuButton").style.fontSize = "9px";
    } else {
      document.getElementById("dropdownMenuButton").style.fontSize = "inherit";
    }

    // function handleResize(){
    //     if(window.innerWidth < 520 && window.innerWidth > 320){
    //         document.getElementById('dropdownMenuButton').style.fontSize = '10px'
    //     }else if(window.innerWidth <= 320){
    //         document.getElementById('dropdownMenuButton').style.fontSize = '9px'
    //     }
    //     else{
    //         document.getElementById('dropdownMenuButton').style.fontSize = 'inherit'
    //     }
    // }
    // window.addEventListener('resize', handleResize)
  });

  const addRoomToList = (e) => {
    var isChecked = document.getElementById(e).checked;
    if (isChecked) {
      let temp = roomsSelected;
      temp.push(e);
      setRoomsSelected(temp);
      addRoomToListHelper(temp);
    } else {
      const index = roomsSelected.indexOf(e);
      if (index > -1) {
        let temp = roomsSelected;
        temp.splice(index, 1);
        setRoomsSelected(temp);
        addRoomToListHelper(temp);
      }
    }
  };

  const choosePref1 = (e) => {
    var isChecked = document.getElementById(e).checked;
    if (isChecked) {
      let temp = pref1;
      temp.push(e.substring(2, e.length));
      setPref1(temp);
      setPref1Helper(temp);
    } else {
      const index = pref1.indexOf(e.substring(2, e.length));
      if (index > -1) {
        let temp = pref1;
        temp.splice(index, 1);
        setPref1(temp);
        setPref1Helper(temp);
      }
    }
  };

  const choosePref2 = (e) => {
    var isChecked = document.getElementById(e).checked;
    if (isChecked) {
      let temp = pref2;
      temp.push(e.substring(6, e.length));
      setPref2(temp);
      setPref2Helper(temp);
    } else {
      const index = pref1.indexOf(e.substring(6, e.length));
      if (index > -1) {
        let temp = pref2;
        temp.splice(index, 1);
        setPref2(temp);
        setPref2Helper(temp);
      }
    }
  };

  return (
    <div className="card bg-light d-flex flex-row col-10 flex-wrap align-items-center">
      <div className="dropdown bg-light ">
        <button
          className="btn dropdown-toggle "
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Apartment in a new building and secondary building
        </button>

        <ul
          id="dropdown-buy-1"
          className="dropdown-menu p-3"
          aria-labelledby="dropdownMenuButton"
        >
          {!by_the_day && (
            <li>
              <div className="d-flex flex-row pt-2 px-3 pb-4">
                <div className="d-flex flex-row align-items-baseline p-2">
                  <input
                    checked={option === "residential" ? "checked" : ""}
                    style={{ width: "20px" }}
                    onClick={() => {
                      setOptionLocal("residential");
                      setOptionHelper("residential");
                    }}
                    type="radio"
                    id="residential"
                    name="option"
                    value="residential"
                  />
                  <label for="residential">Residential</label>
                </div>
                <div className="d-flex flex-row align-items-baseline p-2">
                  <input
                    checked={option === "commercial" ? "checked" : ""}
                    onClick={() => {
                      setOptionLocal("commercial");
                      setOptionHelper("commercial");
                    }}
                    type="radio"
                    id="commercial"
                    name="option"
                    value="commercial"
                  />
                  <label for="commercial">Commercial</label>
                </div>
              </div>
            </li>
          )}

          {option === "residential"
            ? residential.map((row, index) => {
                return (
                  <>
                    <li key={"r-" + index}>
                      <div className="d-flex flex-row align-items-baseline px-3">
                        <input
                          onClick={(e) => choosePref1(e.target.id)}
                          type="checkbox"
                          id={"r-" + row}
                          name={"r-" + row}
                          value={"r-" + row}
                        />
                        <h6 className="mx-2">{row}</h6>
                      </div>
                    </li>
                    {index === 1 || index === 3 ? <hr></hr> : null}
                  </>
                );
              })
            : commercial.map((row, index) => {
                return (
                  <>
                    <li key={"c-" + index}>
                      <div className="d-flex flex-row align-items-baseline px-3">
                        <input
                          onClick={(e) => choosePref1(e.target.id)}
                          className=""
                          type="checkbox"
                          id={"c-" + row}
                          name={"c-" + row}
                          value={"c-" + row}
                        />
                        <h6 className="mx-2">{row}</h6>
                      </div>
                    </li>
                    {index === 10 ? <hr></hr> : null}
                  </>
                );
              })}
        </ul>
      </div>

      <div className="dropdown col-12 col-lg-1">
        <button
          className="btn  dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Rooms
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li>
            <div className="d-flex flex-row pt-2 px-3 pb-4">
              {rooms.map((room) => {
                return (
                  <div
                    className="d-flex flex-row align-items-baseline px-3"
                    key={room}
                  >
                    <input
                      onClick={(e) => addRoomToList(e.target.id)}
                      className=""
                      type="checkbox"
                      id={room}
                      name={room}
                      value={room}
                    />
                    <h6 className="mx-2">{room}</h6>
                  </div>
                );
              })}
            </div>
          </li>
          <li>
            <div className="d-flex flex-row align-items-baseline px-3">
              <input
                onClick={(e) => choosePref2(e.target.id)}
                className=""
                type="checkbox"
                id="pref2-Studio"
                name="pref2-Studio"
                value="pref2-Studio"
              />
              <h6 className="mx-2">Studio</h6>
            </div>
          </li>
          <li>
            <div className="d-flex flex-row align-items-baseline px-3">
              <input
                onClick={(e) => choosePref2(e.target.id)}
                className=""
                type="checkbox"
                id="pref2-Free Layout"
                name="pref2-Free Layout"
                value="pref2-Free Layout"
              />
              <h6 className="mx-2">Free layout</h6>
            </div>
          </li>
        </ul>
      </div>

      <div className="dropdown col-12 col-lg-1">
        <button
          className="btn  dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Price
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li>
            <div className="d-flex flex-column pt-2 px-3 pb-4">
              <input
                onChange={(e) => setPriceHelper(e.target.value, "min")}
                className="input-group p-1 mx-2 my-2"
                style={{ width: "100px" }}
                type="number"
                placeholder="minimum"
                min="0"
              ></input>
              <input
                onChange={(e) => setPriceHelper(e.target.value, "max")}
                className="input-group p-1 mx-2 my-2"
                style={{ width: "100px" }}
                type="number"
                placeholder="maximum"
                min="0"
              ></input>
            </div>
          </li>
        </ul>
      </div>

      <div className="d-flex flex-row align-items-center col-12 col-lg-4 p-2">
        <Places setSearchHelper={setSearchHelper} />
        {/* <input onChange={(e)=>setSearchHelper(e.target.value)} type="text" placeholder="city,region..." className="input-group"></input> */}
      </div>
    </div>
  );
}

export default Buy;
