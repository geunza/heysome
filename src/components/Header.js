import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";
import MainMenu from "components/MainMenu";
import styles from "scss/Header.module.scss";
import logo from "assets/img/logo_black.png";
const Header = ({ isLoggedIn, setHeaderOn, headerOn }) => {
  const navigate = useNavigate();
  const path = useLocation().pathname.split("/")[1];
  const [onMenu, setOnMenu] = useState(false);
  const menuOpen = () => {
    setOnMenu((prev) => !prev);
  };
  const NOGLOBAL = ["account"];
  useEffect(() => {
    // path변경시
    setOnMenu(false);
    NOGLOBAL.includes(path) ? setHeaderOn(false) : setHeaderOn(true);
  }, [path]);
  return (
    <>
      <header
        className={styles.header}
        style={{ display: headerOn ? "block" : "none" }}
      >
        <div className={`${styles.headerMainInner} inner`}>
          {path == "" ? (
            !isLoggedIn ? (
              <Link className={styles.btnLogon} to="/account/signIn">
                login
              </Link>
            ) : (
              <div>로그인상태</div>
            )
          ) : (
            <a className={styles.btnBack} onClick={() => navigate(-1)}>
              back
            </a>
          )}

          <button
            type="button"
            className={`${styles.menuBtn} ${styles.menuOpen}`}
            onClick={menuOpen}
          >
            <span>Menu</span>
          </button>
          <div className={styles.headerLogo}>
            <Link to="/" className={styles.ABCD}>
              <img src={logo} alt="HEYSOME LOGO" />
            </Link>
          </div>
        </div>
        {onMenu ? <MainMenu menuOpen={menuOpen} styles={styles} /> : null}
      </header>
    </>
  );
};
export default Header;
