import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";
import styles from "scss/Home.module.scss";
import "swiper/css";
import "swiper/css/pagination";
const Home = () => {
  const [slides, setSlides] = useState([
    { link: "/photo", img: "banner_01.png" },
    { link: "/photo", img: "banner_02.png" },
    { link: "/photo", img: "banner_03.png" },
    { link: "/photo", img: "banner_04.png" },
    { link: "/photo", img: "banner_05.png" },
    { link: "/photo", img: "banner_06.png" },
  ]);

  return (
    <>
      <>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination]}
          className={styles.mainVisual}
          style={{ width: "100%" }}
        >
          {slides.map((v) => {
            console.log(v);
            return (
              <SwiperSlide
                key={v.img}
                className={`${styles.swiperSlide}`}
                style={{
                  backgroundImage: `url("/resources/img/Home/banner_01.png")`,
                }}
              >
                <Link to={`${v.link}`}></Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    </>
  );
};
export default Home;
