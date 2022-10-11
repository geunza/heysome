import React from "react";
import { Link } from "react-router-dom";
import styles from "scss/Navigation.module.scss";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul>
        <li>
          <Link to="/ar">
            <div className={`${styles.imgArea} ${styles.btnAr}`}></div>
            <span>AR Camera</span>
          </Link>
        </li>
        <li>
          <Link to="/photo">
            <div className={`${styles.imgArea} ${styles.btnPhoto}`}></div>
            <span>Photocard</span>
          </Link>
        </li>
        <li>
          <Link to="/myImages">
            <div className={`${styles.imgArea} ${styles.btnMy}`}>
              <span className={styles.numb}>2</span>
            </div>
            <span>My Image</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Footer;
