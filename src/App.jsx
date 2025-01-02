import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { Atuacao } from "./components/atuacao";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { HeaderSecondary } from "./components/headerSecondary";
import { Toaster } from "react-hot-toast";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Team data={landingPageData.Team} />
      {/* <HeaderSecondary data={landingPageData.HeaderSecondary} /> */}
      <Features data={landingPageData.Features} />
      <Atuacao data={landingPageData.About} />
      <Contact data={landingPageData.Contact} />

      <Toaster position="bottom-left" reverseOrder={true} />
    </div>
  );
};

export default App;
