import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import AccountTop from "components/AccountTop";
import SignUp from "components/SignUp";
import SignIn from "components/SignIn";
import FindPassword from "components/FindPassword";
import FindAccount from "components/FindAccount";
import styles from "scss/Account.module.scss";
const Account = () => {
  const { id } = useParams();
  // const [param, setParam] = useState("");
  // useEffect(()=>{
  //   setParam(id);
  // }, id)
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
          <Link to="/account/signUp">signUp</Link>
          <Link to="/account/signIn">signIn</Link>
          <Link to="/account/findPassword">findPassword</Link>
          <Link to="/account/findAccount">findAccount</Link>
        </div>
        {id == "signIn" && <SignIn styles={styles} />}
        {id == "signUp" && <SignUp styles={styles} />}
        {id == "findPassword" && <FindPassword styles={styles} />}
        {id == "findAccount" && <FindAccount styles={styles} />}
      </div>
    </>
  );
};

export default Account;
