import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import "scss/reset.scss";
import "scss/global.scss";
import "scss/custom.scss";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userImages, setUserImages] = useState([]);
  const getUserImages = async () => {
    const json = await fetch("/db/MyImages.json").then((res) => {
      return res.json();
    });
    const data = await json.data;
    data.sort((a, b) => {
      var dateA = new Date(a.date).getTime();
      var dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });
    setUserImages(data);
  };
  // const getUserImages2 = async () => {
  //   const json = await fetch("/db/MyImages.json").then((resp) => resp.json());
  //   console.log(json);
  // };
  useEffect(() => {
    getUserImages();
  }, []);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} userImages={userImages} />
    </>
  );
}

export default App;
