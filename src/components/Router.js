import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "routes/Home";
import SignIn from "routes/SignIn";
import Header from "components/Header";
import Navigation from "components/Navigation";
import Ar from "./Ar";
import MyImages from "./MyImages";
import Photo from "./Photo";
const AppRouter = ({ isLoggedIn, myImage }) => {
  const [headerOn, setHeaderOn] = useState("none");
  useEffect(() => {
    console.log(headerOn);
  }, [headerOn]);
  return (
    <div id="wrap">
      <Router>
        <Header
          isLoggedIn={isLoggedIn}
          setHeaderOn={setHeaderOn}
          style={{ display: headerOn ? "block" : "none" }}
        />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/photo" element={<Photo />}></Route>
          <Route exact path="/signIn" element={<SignIn />}></Route>
          <Route exact path="/myImages" element={<MyImages />}></Route>
          <Route exact path="/ar" element={<Ar />}></Route>
          <Route path="*" element={<Navigate replace to="/" />}></Route>
        </Routes>
        <Navigation myImage={myImage} />
      </Router>
    </div>
  );
};
export default AppRouter;
