import React from "react";

import styles from "./About.module.css";
import AboutContent from "./AboutContent/AboutContent";

const About = props => (
  <div className={styles.About}>
    <AboutContent />
  </div>
);
export default About;
