import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styles from "scss/Header.module.scss";
import logo from "resources/img/logo_black.png";
const Header = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.headerMainInner} inner`}>
          {!isLoggedIn ? (
            <a className={styles.btnLogon} href="./signIn.html">
              login
            </a>
          ) : (
            <div>로그인상태</div>
          )}

          {/* <a className={styles.btnBack} onClick={() => navigate(-1)}>
            back
          </a> */}
          <button
            type="button"
            className={`${styles.menuBtn} ${styles.menuOpen}`}
          >
            <span>Menu</span>
          </button>
          <div className={styles.headerLogo}>
            <Link to="/" className={styles.ABCD}>
              <img src={logo} alt="LOGO IMG" />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
