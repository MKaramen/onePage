import React from "react";
import styles from "./Navigation.module.css";
import Link from "./Link/Link";

const Navigation = props => (
  <React.Fragment>
    <ul className={styles.Navigation}>
      <Link link="#">About</Link>
      <Link link="#">Team</Link>
      <Link link="#">Events</Link>
      <Link link="#">Nous contacter</Link>
    </ul>
  </React.Fragment>
);

export default Navigation;
