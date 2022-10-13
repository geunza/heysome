import React from "react";
import { useParams } from "react-router-dom";
import AccountTop from "components/AccountTop";
const Account = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <AccountTop />
      <div>Account</div>
    </>
  );
};

export default Account;
