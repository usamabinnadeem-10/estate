import React, { useState } from "react";
import { Link } from "react-router-dom";

function News(props) {
  return (
    <div>
      <h5>
        <Link
          push
          to={{
            pathname: "/news-article/" + props.news.news_id,
            state: {
              title: props.title,
              detail: props.detail,
              ad: props.news,
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
