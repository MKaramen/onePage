import React from "react";
import styles from "./Event.module.css";

const Event = props => (
  <React.Fragment>
    <p>{props.name}</p>
    <p>{props.date}</p>
    <p>{props.event}</p>
    <p>{props.children}</p>
  </React.Fragment>
);

export default Event;
