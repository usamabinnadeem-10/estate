import React, { useState, useEffect } from "react";

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
    <div>
      <h3>Ad Information</h3>
      <table className="table table-hover">
        <tbody>{content}</tbody>
      </table>
    </div>
  );
}

export default InfoBox;
