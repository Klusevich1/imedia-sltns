import React from "react";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <img src="/images/logo.svg" alt="" />
      </div>
      <div className={styles.lines}>
        <div></div>
        <div></div>
      </div>
      <div className={styles.navLinks}>
        <a href="#">О компании</a>
        <a href="#">Услуги</a>
        <a href="#">Проекты</a>
        <a href="#">Контакты</a>
      </div>
      <div className={styles.phoneAndOrder}>
        <p>+375 (29) 626-44-35</p>
        <button>ЗАКАЗАТЬ ПРОЕКТ</button>
      </div>
    </div>
  );
};
