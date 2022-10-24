import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import AccountTop from "components/AccountTop";
import SignUp from "components/SignUp";
import SignIn from "components/SignIn";
import FindPassword from "components/FindPassword";
import FindAccount from "components/FindAccount";
import styles from "scss/Account.module.scss";
const Account = ({ isLoggedIn }) => {
  const { account } = useParams();
  // const [param, setParam] = useState("");
  // useEffect(()=>{
  //   setParam(id);
  // }, id)
  const navigate = useNavigate();
  useEffect(() => {
    isLoggedIn && navigate("/");
  }, [isLoggedIn]);

  return (
    <>
      <AccountTop styles={styles} />
      <div id={styles.AccountBottom} style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            display: "flex",
            gap: "15px",
          }}
        >
          <Link
            to="/account/signIn"
            style={{ color: "white", padding: "10px 3px" }}
          >
            로그인
          </Link>
          <Link
            to="/account/signUp"
            style={{ color: "white", padding: "10px 3px" }}
          >
            회원가입
          </Link>
          <Link
            to="/account/findAccount"
            style={{ color: "white", padding: "10px 3px" }}
          >
            아이디찾기
          </Link>
          <Link
            to="/account/findPassword"
            style={{ color: "white", padding: "10px 3px" }}
          >
            비밀번호찾기
          </Link>
        </div>
        <div className={`${styles.inner} inner`}>
          {account == "signIn" && <SignIn styles={styles} />}
          {account == "signUp" && <SignUp styles={styles} />}
          {account == "findAccount" && <FindAccount styles={styles} />}
          {account == "findPassword" && <FindPassword styles={styles} />}
        </div>
      </div>
    </>
  );
};

export default Account;
