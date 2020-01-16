import React from "react";

import Title from "../../Title/Title";

import BeerImage from "../../../assets/img/imageBiere28.png";
import styles from "./AboutContent.module.css";

const AboutContent = () => (
  <div className={styles.Content}>
    <img className={styles.Image} src={BeerImage} alt="28 beers" />
    <div className={styles.Right}>
      <Title className={styles.Title}>Who we are...</Title>
      <p className={styles.TextTop}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, asperiores
        deserunt temporibus animi itaque inventore consequatur! Unde quisquam
        voluptatem sit cum natus iusto. Amet itaque ullam hic obcaecati.
        Possimus, ipsam! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Earum fugiat, quis sunt illum assumenda sint et aut asperiores
        nesciunt a aliquid blanditiis nihil, odio nobis itaque enim,
        consequuntur incidunt fugit!
      </p>
    </div>

    <p className={styles.TextBottom}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, asperiores
      deserunt temporibus animi itaque inventore consequatur! Unde quisquam
      voluptatem sit cum natus iusto. Amet itaque ullam hic obcaecati. Possimus,
      ipsam!
    </p>
  </div>
);

export default AboutContent;
