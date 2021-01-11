import React from "react";
import FeatureRepresentation from "./FeatureRepresentation";

function Description(props) {
  return (
    <div className="card my-4 p-3 col-12">
      <div className="mb-3 d-flex flex-column">
        <h4 className="text-muted fw-bolder">Description</h4>
        <p>{props.detail}</p>
      </div>
      <FeatureRepresentation
        feature={4}
        title={"Main Highlights"}
        featureArray={props.parameters}
      />
      <FeatureRepresentation
        feature={5}
        title={"Room Highlights"}
        featureArray={props.roomsParams}
      />
      <FeatureRepresentation
        feature={1}
        title={"Feature 1"}
        floor={props.feature1.floor}
        floors={props.feature1.floors}
        featureArray={props.feature1.featureArray}
      />
      <FeatureRepresentation
        feature={2}
        title={"Feature 2"}
        livingSpace={props.feature2.livingSpace}
        parking={props.feature2.parking}
        featureArray={props.feature2.featureArray}
      />
      <FeatureRepresentation
        feature={3}
        title={"Feature 3"}
        featureArray={props.feature3.featureArray}
      />
    </div>
  );
}

export default Description;
