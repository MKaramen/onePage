import React from "react";
import styles from "./Link.module.css";

const Link = props => (
  <li className={styles.Li}>
    <a className={styles.Link} href={props.link}>
      {props.children}
    </a>
  </li>
);
export default Link;
