import { memo } from "react";
import React from "react";

function Book(props) {
  return (
    <div className="card-book">
      <h2>{props.title}</h2>
      <p>
        {props.author} - {props.year}
      </p>
    </div>
  );
}

export default memo(Book);
