import React from "react";
import BraftEditor from "braft-editor";
import "braft-editor/dist/index.css";
import axios from "../../services/axios";
import { URL } from "../../URL";
import { config } from "../../URL";
import { Redirect } from "react-router-dom";

export default class EditorDemo extends React.Component {
  state = {
    editorState: null,
  };

  // async componentDidMount() {
  //   // Assume here to get the editor content in html format from the server
  //   const htmlContent = await fetchEditorContent();
  //   // Use BraftEditor.createEditorState to convert html strings to editorState data needed by the editor
  //   this.setState({
  //     editorState: BraftEditor.createEditorState(htmlContent),
  //   });
  // }

  submitContent = async () => {
    // Pressing ctrl + s when the editor has focus will execute this method
    // Before the editor content is submitted to the server, you can directly call editorState.toHTML () to get the HTML content
    const htmlContent = this.state.editorState.toHTML();
    const textContent = this.state.editorState.toText();

    let data = {
      title: document.getElementById("title-news").value,
      detail: textContent,
    };

    axios
      .post(URL + "api/news-create/", data, config)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  handleEditorChange = (editorState) => {
    this.setState({ editorState });
  };

  render() {
    const { editorState } = this.state;

    return (
      <div className="my-component mx-4" style={{ marginTop: "100px" }}>
        <Redirect to="/" />;
        <h4 className="text-muted">Add News ("Ctrl + S" to save)</h4>
        <input
          id="title-news"
          className="form-control my-3"
          placeholder="Title of your news"
        ></input>
        <BraftEditor
          language="en"
          value={editorState}
          onChange={this.handleEditorChange}
          onSave={this.submitContent}
        />
      </div>
    );
  }
}

// import React, { useState } from "react";
// import BraftEditor from "braft-editor";
// import { Box } from "@chakra-ui/core";
// import "braft-editor/dist/index.css";
// import { Props } from "./custom-layout-cf.model";

// function CustomLayoutCF(props) {
//   const [editorState, setEditorState] = useState(
//     BraftEditor.createEditorState(null)
//   );

//   const handleChange = (newEditorState) => {
//     console.log(newEditorState.toHTML()); //Issue here
//     console.log(newEditorState.toText()); //this works fine

//     setEditorState(newEditorState);
//   };

//   return (
//     <Box maxWidth="96%" m="0 auto" mt={5} mb={5}>
//       <BraftEditor value={editorState} onChange={handleChange} language="en" />
//     </Box>
//   );
// }

// export default CustomLayoutCF;
