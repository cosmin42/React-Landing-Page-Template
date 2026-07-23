import React from "react";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Subscribe } from "./components/subscribe";
import { Footer } from "./components/footer";
import { getSiteContent } from "./i18n/translations/siteContent";
import SmoothScroll from "smooth-scroll";
import { useLanguage } from "./i18n/LanguageContext";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const { language } = useLanguage();
  const content = getSiteContent(language);

  return (
    <div>
      <Header data={content.home.header} demo={content.home.demo} language={language} />
      <About data={content.home.about} />
      <div className="subscribe-standalone">
        <div className="container">
          <Subscribe data={content.home.subscribe} language={language} embedded />
        </div>
      </div>
      <Contact data={content.home.contact} />
      <Footer />
    </div>
  );
};

export default App;
