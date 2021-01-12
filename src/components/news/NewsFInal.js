import React, { useState } from "react";
import BraftEditor from "braft-editor";
import "braft-editor/dist/index.css";
import axios from "../../services/axios";
import { URL } from "../../URL";
import { config } from "../../URL";
import { Redirect } from "react-router-dom";

function NewsFinal() {
  const [editorState, setEditorState] = useState(null);
  const [redirect, setRedirect] = useState(false);

  const submitContent = () => {
    // const htmlContent = editorState.toHTML();
    const textContent = editorState.toText();
    let data = {
      title: document.getElementById("title-news").value,
      detail: textContent,
    };

    axios
      .post(URL + "api/news-create/", data, config)
      .then((res) => {
        setRedirect(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEditorChange = (editorState) => {
    setEditorState(editorState);
  };

  return (
    <div className="my-component mx-4" style={{ marginTop: "100px" }}>
      {redirect && <Redirect to="/" />}

      <h4 className="text-muted">Add News ("Ctrl + S" to save)</h4>
      <input
        id="title-news"
        className="form-control my-3"
        placeholder="Title of your news"
      ></input>
      <BraftEditor
        language="en"
        value={editorState}
        onChange={handleEditorChange}
        onSave={submitContent}
      />
    </div>
  );
}

export default NewsFinal;
