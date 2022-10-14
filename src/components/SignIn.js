import React, { useState } from "react";
import { Link } from "react-router-dom";
const SignIn = ({ styles }) => {
  const submitSignIn = (e) => {
    e.preventDefault();
  };
  const [userID, setUserID] = useState("");
  const [userPW, setUserPW] = useState("");
  const iptChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name == "userID") {
      setUserID(value);
    } else if (name == "userPW") {
      setUserPW(value);
    }
  };
  const onSocialClick = (e) => {
    const {
      target: { name },
    } = e;
    if (name == "socialNaver") {
      //네이버
    } else if (name == "socialKakao") {
      //카카오
    }
  };
  return (
    <div id={styles.signIn}>
      <h2 className={styles.title}>
        <span>로그인</span>
        <Link to="/account/signUp">회원가입</Link>
      </h2>
      <form onSubmit={submitSignIn}>
        <fieldset>
          <input
            type="text"
            name="userID"
            placeholder="아이디"
            value={userID}
            onChange={iptChange}
          />
          <input
            type="text"
            name="userPW"
            placeholder="비밀번호"
            value={userPW}
            onChange={iptChange}
          />
          <div className={styles.autoSignIn}>
            <input type="checkbox" name="autoSignIn" id="autoSignIn" />
            <label htmlFor="autoSignIn">
              <span>자동로그인</span>
            </label>
          </div>
          <button type="submit" className={styles.btnSubmit}>
            로그인
          </button>
        </fieldset>
      </form>
      <div className={styles.findAccount}>
        <Link
          to="/account/findAccount"
          style={{ borderRight: "1px solid #797979" }}
        >
          아이디 찾기
        </Link>
        <Link to="/account/findPassword">비밀번호 찾기</Link>
      </div>
      <div className={styles.socialSignIn}>
        <button onClick={onSocialClick} name="socialNaver">
          네이버
        </button>
        <button onClick={onSocialClick} name="socialKakao">
          카카오톡
        </button>
      </div>
    </div>
  );
};

export default SignIn;
