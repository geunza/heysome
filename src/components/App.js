import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import Header from "components/Header";
import Navigation from "components/Navigation";
import "scss/reset.scss";
import "scss/global.scss";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
    </>
  );
}

export default App;
