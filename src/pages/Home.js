import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { Link } from "react-router-dom";
import styles from "scss/Home.module.scss";
import "swiper/css";
import "swiper/css/pagination";
const Home = () => {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    setBanner([
      { link: "/photo", img: "banner_01.png", alt: "Banner Image1" },
      { link: "/photo", img: "banner_02.png", alt: "Banner Image2" },
      { link: "/photo", img: "banner_03.png", alt: "Banner Image3" },
      { link: "/photo", img: "banner_04.png", alt: "Banner Image4" },
      { link: "/photo", img: "banner_05.png", alt: "Banner Image5" },
      { link: "/photo", img: "banner_06.png", alt: "Banner Image6" },
    ]);
  }, []);
  return (
    <div id="Home">
      <Swiper
        pagination={{
          el: ".swiperPagination",
          type: "fraction",
        }}
        autoplay={{
          delay: 2000,
        }}
        navigation={true}
        modules={[Pagination, Autoplay]}
        className={styles.mainVisual}
      >
        {banner.map((v) => {
          return (
            <SwiperSlide key={v.img} className={`${styles.swiperSlide}`}>
              <Link to={`${v.link}`}>
                <img src={require(`assets/img/Home/${v.img}`)} alt={v.alt} />
              </Link>
            </SwiperSlide>
          );
        })}
        <div className={`${styles.swiperPagination} swiperPagination`}></div>
      </Swiper>
    </div>
  );
};
export default Home;
