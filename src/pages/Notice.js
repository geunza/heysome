import React, { useEffect, useState } from "react";
import styles from "scss/Notice.module.scss";
import Notice_content from "components/Notice_content";
const Notice = () => {
  const [tab, setTab] = useState(0);
  const [cont, setCont] = useState([]);
  const tabClick = (e) => {
    const {
      target: { value },
    } = e;
    setTab(value);
    document
      .querySelectorAll(".noticeBtn")
      .forEach((v) => v.classList.remove("active"));
    e.currentTarget.classList.add("active");
  };
  const getNotice = async () => {
    let json = await (await fetch("/db/Notice.json")).json();
    setCont(json.data);
  };
  useEffect(() => {
    getNotice();
  }, []);
  return (
    <div id={styles.Notice} className="inner">
      <div className={styles.noticeBtns}>
        <button value="0" className="noticeBtn active" onClick={tabClick}>
          사용방법
        </button>
        <button value="1" className="noticeBtn" onClick={tabClick}>
          유의사항
        </button>
      </div>
      <Notice_content tab={tab} cont={cont} styles={styles} />
    </div>
  );
};
export default Notice;
