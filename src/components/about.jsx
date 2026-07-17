import React from "react";
import "./about.css";

export const About = (props) => {
  const data = props.data || {};

  return (
    <div id="about">
      <div className="container">
        <div className="about-heading">
          <h2>{data.title}</h2>
        </div>
        <div className="about-columns">
          <div className="about-card">
            <h3>{data.forYouTitle}</h3>
            <ul>
              {data.forYouItems?.map((item, index) => (
                <li key={`${item}-${index}`}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="about-card about-card--highlight">
            <h3>{data.whatYouGetTitle}</h3>
            <ul>
              {data.whatYouGetItems?.map((item, index) => (
                <li key={`${item}-${index}`}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
