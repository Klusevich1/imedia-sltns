import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footBlock}>
      <h1 className={styles.footTitle}>iMedia Solutions</h1>
      <div className={styles.line}></div>
      <div className={styles.footLine}>
        <div className={styles.column}>
          <p>Республика Беларусь, 220030, г. Минск,</p>
          <p>ул. Интернациональная 36 (Бизнес центр “A1”),</p>
          <p>этаж 5, офис 505</p>
        </div>
        <div className={styles.phones}>
          <div className={styles.column}>
            <p>+375 (29) 626-44-35 (A1)</p>
            <p>+375 (33) 654-44-35 (МТС)</p>
            <p>+375 (17) 348-14-94 (Городской)</p>
          </div>
          <p>info@imedia.by</p>
        </div>
        <div className={styles.column}>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Linkedin</p>
        </div>
        <p>© 2009-2021 iMedia.by</p>
      </div>
    </div>
  );
};
