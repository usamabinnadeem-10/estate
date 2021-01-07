import React, { useState } from "react";
import Editor from "../editor/Editor";

function NewsCreate() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const setDetailHelper = (detail) => {
    setDetail(detail);
  };

  return (
    <div
      className="d-flex flex-column col-10 mx-auto"
      style={{ marginTop: "250px" }}
    >
      <h4 className="text-muted">News</h4>
      <input
        onChange={(e) => setTitle(e.target.value)}
        className="form-control my-3"
        placeholder="Title of your news"
      ></input>
      <Editor setDetail={setDetailHelper} />
      <button className="btn btn-lg fw-bolder btn-success my-3">
        Post News
      </button>
    </div>
  );
}

export default NewsCreate;
