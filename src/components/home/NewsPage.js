import React, { useState } from "react";
import { useLocation } from "react-router-dom";
function NewsPage() {
  let location = useLocation();
  return (
    <div className="col-9 mx-auto card p-3" style={{ marginTop: "250px" }}>
      <h3>{location.state.title}</h3>
      <p className="my-3">{location.state.detail}</p>
      <h5 className="mt-3 text-end">
        <i>{location.state.author}</i>
      </h5>
    </div>
  );
}

export default NewsPage;
