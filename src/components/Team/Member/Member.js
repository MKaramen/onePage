import React from "react";

const Member = props => (
  <div>
    <img src={props.image} alt={props.label + " image"} />
    <p>{props.label}</p>
    <p>{props.children}</p>
  </div>
);

export default Member;
