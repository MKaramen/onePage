import React from "react";
import styles from "./Event.module.css";

const Event = props => (
  <div className={styles.Warp}>
    <p className={styles.Title}>{props.name}</p>
    <p className={`${styles.Center} ${styles.Date}`}>{props.date}</p>
    <p className={styles.Center}>{props.event}</p>
    <p className={styles.Description}>{props.children}</p>
  </div>
);

export default Event;
