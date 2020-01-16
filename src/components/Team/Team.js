import React from "react";

import Member from "./Member/Member";
import Title from "../Title/Title";

import Ceo from "../../assets/img/CEO.png";
import Cfo from "../../assets/img/CFO.png";
import Coo from "../../assets/img/COO.png";
import Cto from "../../assets/img/CTO.png";
import styles from "./Team.module.css";

const Team = () => (
  <div className={styles.Team}>
    <Title className={styles.Title}>Our team ...</Title>
    <div className={styles.Row1}>
      <Member image={Ceo} label="CEO">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        veniam eius nobis aut qui quidem doloremque voluptatem aperiam totam
        corrupti?
      </Member>
      <Member image={Coo} label="COO">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        veniam eius nobis aut qui quidem doloremque voluptatem aperiam totam
        corrupti?
      </Member>
    </div>
    <div className={styles.Row2}>
      <Member image={Cfo} label="CFO">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        veniam eius nobis aut qui quidem doloremque voluptatem aperiam totam
        corrupti?
      </Member>
      <Member image={Cto} label="CTO">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        veniam eius nobis aut qui quidem doloremque voluptatem aperiam totam
        corrupti?
      </Member>
    </div>
  </div>
);

export default Team;
