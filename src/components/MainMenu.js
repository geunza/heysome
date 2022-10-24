import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const MainMenu = ({ menuOpen, styles }) => {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    setBanner([
      { link: "/photo", img: "banner_01.png", alt: "Banner Image1" },
      { link: "/photo", img: "banner_02.png", alt: "Banner Image2" },
      { link: "/photo", img: "banner_01.png", alt: "Banner Image3" },
      { link: "/photo", img: "banner_02.png", alt: "Banner Image4" },
      { link: "/photo", img: "banner_01.png", alt: "Banner Image5" },
      { link: "/photo", img: "banner_02.png", alt: "Banner Image6" },
    ]);
  }, []);
  return (
    <div className={`${styles.mainMenu} mainMenu`}>
      <div className={styles.menuHeader}>
        <div className={`${styles.inner} inner`}>
          <Link className={styles.btnSetting} to="###">
            Setting
          </Link>
          <button
            type="button"
            className={`${styles.menuBtn} ${styles.menuClose}`}
            onClick={menuOpen}
          >
            <span>Close</span>
          </button>
          <div className={styles.headerLogo}>
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + "/public_assets/logo_black.png"}
                alt="HEYSOME LOGO"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.menuUtil}>
        <ul className={`${styles.btns} inner`}>
          <li>
            <Link to="/ar" className={`${styles.imgArea} ${styles.ar}`}></Link>
            <Link to="/ar" className={styles.txtArea}>
              AR camera
            </Link>
          </li>
          <li>
            <Link
              to="/photo"
              className={`${styles.imgArea} ${styles.photo}`}
            ></Link>
            <Link to="/photo" className={styles.txtArea}>
              Photocard
            </Link>
          </li>
          <li>
            <Link
              to="/myImages"
              className={`${styles.imgArea} ${styles.my}`}
            ></Link>
            <Link to="/myImages" className={styles.txtArea}>
              My Image
            </Link>
          </li>
          <li>
            <Link
              to="/history"
              className={`${styles.imgArea} ${styles.history}`}
            ></Link>
            <Link to="/history" className={styles.txtArea}>
              구매내역
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.bannerWrap}>
        <div className="inner">
          <Swiper
            spaceBetween={20}
            pagination={{
              el: ".mainMenuSwiperPagination",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className={styles.menuVisual}
            style={{ width: "100%" }}
          >
            {banner.map((v, i) => {
              return (
                <SwiperSlide key={i} className={`${styles.swiperSlide}`}>
                  <Link to={`${v.link}`}>
                    <img
                      src={require(`assets/img/MainMenu/${v.img}`)}
                      alt={v.alt}
                    />
                  </Link>
                </SwiperSlide>
              );
            })}
            <div
              className={`${styles.mainMenuSwiperPagination} mainMenuSwiperPagination`}
            ></div>
          </Swiper>
        </div>
      </div>
      <div>
        <div className="inner">
          <Link to="/notice" className={styles.btnNotice}>
            사용방법 및 유의사항
          </Link>
        </div>
      </div>
    </div>
  );
};
export default MainMenu;
