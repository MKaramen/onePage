import React from "react";
import styles from "./Contact.module.css";
import FormInput from "./FormInput/FormInput";
import Title from "../Title/Title";

const Contact = props => (
  <div className={styles.Contact}>
    <Title className={styles.Title}>Need an Events ?</Title>
    <form className={styles.Form}>
      <FormInput className={styles.Name}>Name :</FormInput>
      <FormInput className={styles.LastName}>Last Name :</FormInput>
      <FormInput className={styles.Email}>Email :</FormInput>
      <label>Description</label>
      <textarea className={styles.TextArea} cols="30" rows="10"></textarea>
      <input type="submit" name="SEND" />
    </form>
  </div>
);

export default Contact;
