import React, { useState } from "react";
import { Link } from "react-router-dom";

function News(props) {
  const [detail, setDetail] = useState(props.detail);
  const [author, setAuthor] = useState(props.author);
  return (
    <div>
      <h5>
        <Link
          push
          to={{
            pathname: "/news-article/1",
            state: {
              title: props.title,
              detail: detail,
              author: author,
            },
          }}
        >
          {props.title}
        </Link>
      </h5>

      <p style={{ fontSize: "12px" }}>{props.brief}...</p>
    </div>
  );
}

export default News;
