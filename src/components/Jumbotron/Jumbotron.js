import React from "react";

import Navigation from "./Navigation/Navigation";

import Logo from "../../assets/img/LOGO.png";
import styles from "./Jumbotron.module.css";

const Jumbotron = props => (
  <div className={styles.Jumbotron}>
    <Navigation />
    <img className={styles.Logo} src={Logo} alt="Main Eventer Logo" />
  </div>
);
export default Jumbotron;
