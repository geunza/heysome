import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "scss/findAccount.scss";
const FindAccount = ({ styles }) => {
  const [userName, setUserName] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [authType, setAuthType] = useState("phone");
  const iptChange = (e) => {
    const {
      target: { name: value },
    } = e;
  };
  const authTypeChange = (e) => {
    const {
      target: { value },
    } = e;
    setAuthType(value);
  };
  const submitFindAccount = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div id={styles.findAccount}>
        <h2 className={styles.title}>
          <span>아이디찾기</span>
        </h2>
        <div className="authType">
          <button
            type="button"
            value="phone"
            className="tabBtn"
            onClick={authTypeChange}
          >
            휴대폰인증
          </button>
          <button
            type="button"
            value="email"
            className="tabBtn"
            onClick={authTypeChange}
          >
            이메일인증
          </button>
        </div>
        <form onSubmit={submitFindAccount}>
          {authType == "phone" ? (
            <fieldset>
              <input type="text" name="name" id="name" placeholder="이름" />
              <input
                type="text"
                name="number"
                id="number"
                placeholder="휴대폰번호"
              />
              <button type="submit" className={styles.btnSubmit}>
                인증번호 받기
              </button>
            </fieldset>
          ) : (
            <div className="findEmail"></div>
          )}
        </form>
      </div>
    </>
  );
};
export default FindAccount;
