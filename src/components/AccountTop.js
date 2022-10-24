import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
const AccountTop = ({ styles }) => {
  return (
    <>
      <div id={styles.AccountTop}>
        <Swiper
          spaceBetween={40}
          slidesPerGroup={3}
          pagination={{
            el: ".accountSwiperPagination",
          }}
          modules={[Pagination]}
          className={styles.accountSwiper}
          style={{ width: "100%" }}
        >
          <SwiperSlide className={styles.swiperSlide}>
            <div className={`${styles.inner} inner`}>
              <p className={styles.wayTitle}>포토카드 꾸미기 이용방법 1</p>
              <ul>
                <li>
                  <img
                    src={require(`../assets/img/Account/way_01.png`)}
                    alt="사진업로드"
                  />
                  <p>
                    <span>사진업로드</span>
                  </p>
                </li>
                <li className={styles.arr}></li>
                <li>
                  <img
                    src={require(`../assets/img/Account/way_02.png`)}
                    alt="디자인선택"
                  />
                  <p>
                    <span>디자인선택</span>
                  </p>
                </li>
                <li className={styles.arr}></li>
                <li>
                  <img
                    src={require(`../assets/img/Account/way_03.png`)}
                    alt="문구입력"
                  />
                  <p>
                    <span>문구입력</span>
                  </p>
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <div className={`${styles.inner} inner`}>
              <p className={styles.wayTitle}>포토카드 꾸미기 이용방법 2</p>
              <ul>
                <li>
                  <img
                    src={require(`../assets/img/Account/way_04.png`)}
                    alt="6자리 인증번호 확인"
                  />
                  <p>
                    <span>6자리</span>
                    <span>인증번호 확인</span>
                  </p>
                </li>
                <li className={styles.arr}></li>
                <li>
                  <img
                    src={require(`../assets/img/Account/way_05.png`)}
                    alt="키오스크 화면에 인증번호 입력"
                  />
                  <p>
                    <span>키오스크 화면에</span>
                    <span>인증번호 입력</span>
                  </p>
                </li>
                <li className={styles.arr}></li>
                <li>
                  <img
                    src={require(`../assets/img/Account/way_06.png`)}
                    alt="결제방법선택 후 출력"
                  />
                  <p>
                    <span>결제방법선택</span>
                    <span>후 출력</span>
                  </p>
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <div
            className={`${styles.accountSwiperPagination} accountSwiperPagination swiper-pagination`}
          ></div>
        </Swiper>
      </div>
    </>
  );
};

export default AccountTop;
