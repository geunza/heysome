import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "pages/Home";
import Header from "components/Header";
import Navigation from "components/Navigation";
import Ar from "pages/Ar";
import MyImages from "pages/MyImages";
import Photo from "pages/Photo";
import Notice from "pages/Notice";
import Account from "pages/Account";
import History from "pages/History";
const AppRouter = ({ isLoggedIn, userImages }) => {
  const [headerOn, setHeaderOn] = useState(true);
  return (
    <div id="wrap">
      <Router>
        <Header
          isLoggedIn={isLoggedIn}
          headerOn={headerOn}
          setHeaderOn={setHeaderOn}
        />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/photo" element={<Photo />}></Route>
          <Route exact path="/notice" element={<Notice />}></Route>
          <Route exact path="/history" element={<History />}></Route>
          <Route exact path="/account/:id" element={<Account />}></Route>
          <Route
            exact
            path="/myImages"
            element={<MyImages userImages={userImages} />}
          ></Route>
          <Route exact path="/ar" element={<Ar />}></Route>
          <Route path="*" element={<Navigate replace to="/" />}></Route>
        </Routes>
        <Navigation userImages={userImages} headerOn={headerOn} />
      </Router>
    </div>
  );
};
export default AppRouter;
