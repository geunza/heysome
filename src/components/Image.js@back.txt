import React, { useState } from "react";

const Image = ({ styles, img, clicked, setClicked, date }) => {
  const [border, setBorder] = useState(false);
  const imgClick = (e) => {
    setBorder((prev) => !prev);
    let id = img.id;
    let data = { id, date };
    let exist = clicked.findIndex((el, idx) => {
      return el.id == data.id;
    });
    if (exist >= 0) {
      setClicked((prev) => {
        let copy = [...prev];
        copy.splice(exist, 1);
        return copy;
      });
      //target.style.backgroundColor = "#ebdd02";
    } else {
      setClicked((prev) => [data, ...prev]);
      //target.style.backgroundColor = "";
    }
  };
  return (
    <li
      className={styles.listItem}
      key={img.id}
      style={{ backgroundColor: border ? "#fff" : "" }}
    >
      <div className={`${styles.imgArea}`} onClick={imgClick}>
        <img src={require(`../${img.src}`)} alt={img.id} />
      </div>
    </li>
  );
};
export default Image;
