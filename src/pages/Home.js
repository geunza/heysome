import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { Link } from "react-router-dom";
import styles from "scss/Home.module.scss";
import "swiper/css";
import "swiper/css/pagination";
const Home = () => {
  const [banner, setBanner] = useState([]);
  const getBanner = async () => {
    let json = await (await fetch("/db/HomeBanner.json")).json();
    setBanner(json.data);
  };
  useEffect(() => {
    getBanner();
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
                <img src={v.img} alt={v.alt} />
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
