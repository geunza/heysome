import React from "react";

const Image = ({ styles, img, idx, setClicked }) => {
  const imgClick = (e) => {
    let div = e.currentTarget;
    setClicked((prev) => [div, ...prev]);
  };
  return (
    <li className={styles.listItem} key={idx}>
      <div className={`${styles.imgArea} Hi`} onClick={imgClick}>
        <img src={require(`../${img}`)} alt={img.alt} />
      </div>
    </li>
  );
};
export default Image;
