import React, { useState } from "react";

const Image = ({ styles, img, clickedItems, setClickedItems, clicked }) => {
  const handleClick = (id) => {
    clickedItems.includes(id)
      ? setClickedItems((prev) => prev.filter((e) => e != id))
      : setClickedItems((prev) => [...prev, id]);
  };
  return (
    <li
      className={styles.listItem}
      onClick={(e) => {
        handleClick(img.id);
      }}
      data-clicked={clicked}
    >
      <div className={`${styles.imgArea}`}>
        <img src={require(`../${img.src}`)} alt={img.id} />
      </div>
    </li>
  );
};
export default Image;
