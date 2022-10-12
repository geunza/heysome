import React, { useEffect, useState } from "react";
import styles from "scss/MyImages.module.scss";
import { Link } from "react-router-dom";
import Image from "components/Image";
const MyImages = ({ userImages }) => {
  const [clicked, setClicked] = useState([]);
  useEffect(() => {
    console.log(clicked);
  }, [clicked]);
  return (
    <div id={styles.MyImages}>
      <div className="inner">
        <p className={styles.noti}>
          프린트 할 사진을 선택해주세요.
          <button className={styles.btnPrint}>프린트</button>
        </p>
        <div className={`${styles.active} ${styles.listWrap}`}>
          {userImages.map((v, i, arr) => {
            return (
              <div key={i} className={styles.listRow}>
                <h4 className={styles.date}>{v.date}</h4>
                <ul className={styles.list}>
                  {v.image.map((img, idx) => {
                    return (
                      <Image
                        styles={styles}
                        img={img}
                        idx={idx}
                        setClicked={setClicked}
                      />
                    );
                  })}
                </ul>
              </div>
            );
          })}
          <button className={styles.btnPrint}>{clicked.length}</button>
        </div>
      </div>
    </div>
  );
};
export default MyImages;
