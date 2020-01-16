import React from "react";
import styles from "./FormInput.module.css";

const FormInput = props => (
  <React.Fragment>
    <label>{props.children}</label>
    <input type="text" />
  </React.Fragment>
);

export default FormInput;
