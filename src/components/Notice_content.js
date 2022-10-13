import React, { useEffect, useState } from "react";

const Notice_content = ({ tab, cont, styles }) => {
  return (
    <div className={styles.noticeCont}>
      {cont.length > 0 &&
        cont[tab].item.map((content) => {
          return (
            <div key={content.title}>
              <h4>{content.title}</h4>
              <ul>
                {content.list.map((list, idx) => {
                  return (
                    <li key={idx}>
                      {list.split("\n").map((text, idx2) => {
                        return (
                          <span key={idx2}>
                            {text}
                            <br />
                          </span>
                        );
                      })}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
    </div>
  );
};
export default Notice_content;
