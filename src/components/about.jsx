import React from "react";
import "./about.css";

const quietFeatures = [
  {
    icon: "🔕",
    title: "Zero Notifications",
    description: "We won't pester you to open the app.",
  },
  {
    icon: "🔒",
    title: "Zero Data Usage",
    description: "Your photos and layouts stay on your device.",
  },
  {
    icon: "🍃",
    title: "Zero Noise",
    description: "No ads, no social feeds, no retention tricks.",
  },
];

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
          <div className="about-card about-card--quiet">
            <h3>Made for quiet creativity</h3>
            <ul className="about-quiet-features">
              {quietFeatures.map((feature) => (
                <li key={feature.title}>
                  <span className="about-feature-icon" aria-hidden="true">
                    {feature.icon}
                  </span>
                  <span>
                    <strong>{feature.title}</strong> — {feature.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
