import React from "react";
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Home from "routes/Home";
import SignIn from "routes/SignIn";
import Header from "components/Header";
import Navigation from "components/Navigation";
import Ar from "./Ar";
import MyImages from "./MyImages";
import Photo from "./Photo";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <div id="wrap">
      <Router>
        <Header isLoggedIn={isLoggedIn} />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/signIn" element={<SignIn />}></Route>
          <Route exact path="/photo" element={<Photo />}></Route>
          <Route exact path="/myImages" element={<MyImages />}></Route>
          <Route exact path="/ar" element={<Ar />}></Route>
          <Route path="*" element={<Navigate replace to="/" />}></Route>
        </Routes>
        <Navigation />
      </Router>
    </div>
  );
};
export default AppRouter;
