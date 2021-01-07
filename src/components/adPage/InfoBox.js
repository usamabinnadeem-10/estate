import React, { useState, useEffect } from "react";
import Rating from "./Rating";

function InfoBox(props) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    var result = Object.keys(props.info).map(function (key) {
      return (
        <tr>
          <th>{key}</th>
          <td>{props.info[key]}</td>
        </tr>
      );
    });
    setContent(result);
  }, []);

  return (
    <div
      className="card col-5 offset-1 p-3"
      style={{
        overflow: "auto",
        height: "404px",
      }}
    >
      {" "}
      <div className="d-flex flex-row justify-content-between">
        <h3>Ad Information</h3>
        <h4 className="px-3 fw-bolder">4.0 / 5</h4>
      </div>
      <Rating />
      <table className="table table-hover">
        <tbody>{content}</tbody>
      </table>
    </div>
  );
}

export default InfoBox;
