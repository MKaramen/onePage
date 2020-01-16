import React from "react";
import styles from "./Contact.module.css";
import FormInput from "./FormInput/FormInput";
import Title from "../Title/Title";

const Contact = props => (
  <form>
    <Title>Need an Events ?</Title>
    <FormInput>Name :</FormInput>
    <FormInput>Last Name :</FormInput>
    <FormInput>Email :</FormInput>
    <label>Description</label>
    <textarea cols="30" rows="10"></textarea>
    <input type="submit" name="SEND" />
  </form>
);

export default Contact;
