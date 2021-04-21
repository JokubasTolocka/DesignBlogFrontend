import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => (
  <div className={styles.root}>
    <div className={styles.contacts}>
      <h4 className={styles.contactMe}>Contact Me</h4>
      <a href="mailto:jokubas.tj@gmail.com" className={styles.email}>
        jokubas.tj@gmail.com
      </a>
    </div>
  </div>
);

export default Footer;
