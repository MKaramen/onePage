import React from "react";
import Event from "./Event/Event";
import styles from "./Events.module.css";
import popImageClock from "../../assets/img/popImageClock.png";
import popimageBeer from "../../assets/img/PopimageBeer.png";
import Title from "../Title/Title";

const Events = props => (
  <div className={styles.Wrap}>
    <div className={styles.Title}>
      <img className={styles.Clock} src={popImageClock} alt="Pop Clock" />
      <Title>Our Events</Title>
      <img className={styles.Clock} src={popimageBeer} alt="Pop Beer" />
    </div>
    <div className={styles.Events}>
      <Event name="Salsa Course" date="Nov 21th" event="Latino night">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus
        repellendus voluptatibus fugit veritatis nulla quo amet, porro ab, hic
        vel odit. Beatae quasi nostrum eaque fugit culpa sed similique odit.
      </Event>

      <Event name="Christmas" date="Dec 24th" event="Christmas for refugees">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus
        repellendus voluptatibus fugit veritatis nulla quo amet, porro ab, hic
        vel odit. Beatae quasi nostrum eaque fugit culpa sed similique odit.
      </Event>

      <Event name="Finance research" date="Jan 5th" event="Financers Drink">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus
        repellendus voluptatibus fugit veritatis nulla quo amet, porro ab, hic
        vel odit. Beatae quasi nostrum eaque fugit culpa sed similique odit.
      </Event>
    </div>
  </div>
);

export default Events;
