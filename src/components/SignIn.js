import React from "react";
import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <>
      <div id="SignIn">
        <h2 className="title">
          로그인
          <Link to="/account/signUp">회원가입</Link>
        </h2>
      </div>
    </>
  );
};

export default SignIn;
