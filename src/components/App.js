import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import "scss/reset.scss";
import "scss/global.scss";
import "scss/custom.scss";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [myImage, setMyImage] = useState([]);
  useEffect(() => {
    setMyImage(["a", "b", "c"]);
  }, []);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} myImage={myImage} />
    </>
  );
}

export default App;
