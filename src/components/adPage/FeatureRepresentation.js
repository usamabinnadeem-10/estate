import React from "react";

function FeatureRepresentation(props) {
  return (
    <div className="d-flex flex-column my-3 col-6">
      <h4 className="text-muted fw-bolder">{props.title}</h4>
      {props.feature === 1 && (
        <h5>
          {props.floor}
          <sup>th</sup> / {props.floors}
          <span> floor</span>
        </h5>
      )}
      {props.feature === 2 && (
        <h5>
          <b>{props.livingSpace}</b> m<sup>2</sup> of living space with{" "}
          {props.parking} parking
        </h5>
      )}

      <table className="table table-hover">
        <tbody>
          {props.featureArray.map((feature) => {
            return (
              <tr>
                <th>{feature}</th>
                <td className="fw-bolder" style={{ color: "#18DB28" }}>
                  &#10003;
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default FeatureRepresentation;
