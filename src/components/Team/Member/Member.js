import React from "react";

import styles from "./Member.module.css";

const Member = props => (
  <div className={styles.Member}>
    <img
      className={styles.Image}
      src={props.image}
      alt={props.label + " image"}
    />
    <div className={styles.Right}>
      <p className={styles.Label}>{props.label}</p>
      <p className={styles.Text}>{props.children}</p>
    </div>
  </div>
);

export default Member;
