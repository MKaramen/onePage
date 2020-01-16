import React from "react";
import styles from "./Link.module.css";

const Link = props => (
  <li>
    <a href={props.link}>{props.children}</a>
  </li>
);
export default Link;
