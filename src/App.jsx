import React from "react";
import { Header } from "./components/header";
import { TestFlight } from "./components/testflight";
import { Screenshots } from "./components/screenshots";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { getSiteContent } from "./data/siteContent";
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
      <Header data={content.home.header} />
      <TestFlight
        data={{
          ...content.home.demo,
          url: content.home.header.appStoreHref,
          buttonText: content.home.header.appStoreAlt,
        }}
      />
      <Screenshots data={content.home.screenshots} />
      <About data={content.home.about} />
      <Contact data={content.home.contact} />
      <Footer />
    </div>
  );
};

export default App;
